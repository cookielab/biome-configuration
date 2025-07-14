import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";
import { compileFromFile } from "json-schema-to-typescript";
import { generate as generateZodSchema } from "ts-to-zod";

/**
 * Converts a Zod V3 schema string to V4.
 *
 * Necessary as `ts-to-zod` does not support V4 yet.
 * For now only the import and `z.record` updates are necessary.
 *
 * @param schema - Zod V3 schema string
 *
 * @returns Zod V4 schema string
 */
const migrateToZod4 = (schema: string): string => {
	return schema.replaceAll("z.record(", "z.record(z.string(), ");
}

/**
 * Generate a new Zod schema file using the source JSON schema file.
 *
 * @param source - Path to the source JSON schema file
 * @param target - Path where to save the Zod schema
 */
const generateTypeScriptTypes = async (source: string, target: string): Promise<void> => {
	const configurationType = await compileFromFile(source);

	const { getZodSchemasFile } = generateZodSchema({
		keepComments: true,
		sourceText: configurationType,
	});

	const zodV4Schema = migrateToZod4(getZodSchemasFile("."));

	fs.writeFileSync(target, zodV4Schema);
}

/**
 * Generate a Zod schema file from the JSON schema definition supplied in `@biomejs/biome/configuration_schema.json`.
 *
 * If the target directory does not exist, it is recursively created as well.
 *
 * @argument {string} source - Path to the source schema.
 * @argument {string} target - Path where to save the generated file.
 */
const generateSchema = async (): Promise<void> => {
	const {
		values: { source, target },
	} = parseArgs({
		allowPositionals: true,
		args: process.argv,
		options: {
			source: {
				type: "string",
			},
			target: {
				type: "string",
			},
		},
	});

	if (source === undefined || source.trim().length === 0) {
		throw new Error('The "source" argument is missing!');
	}

	if (target === undefined || target.trim().length === 0) {
		throw new Error('The "target" argument is missing!');
	}

	if (!fs.existsSync(path.dirname(source))) {
		fs.mkdirSync(path.dirname(source), { recursive: true });
	}

	await generateTypeScriptTypes(source, target);
}

try {
	await generateSchema();
} catch (error: unknown) {
	console.error(error);

	process.exit(1);
}

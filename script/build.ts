import type { z } from "zod/v4";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";
import { baseConfiguration } from "../src/base.ts";
import type {
	configurationSchema,
	rulesSchema,
} from "../src/generated/configuration.ts";
import { base } from "../src/rules/base.ts";
import { frontend } from "../src/rules/frontend.ts";
import { graphql } from "../src/rules/graphql.ts";
import { next } from "../src/rules/next.ts";
import { node } from "../src/rules/node.ts";
import { react } from "../src/rules/react.ts";

type Configuration = z.infer<typeof configurationSchema>;
type Rules = z.infer<typeof rulesSchema>;

const ruleSets = {
	base: base,
	frontend: frontend,
	graphql: graphql,
	next: next,
	node: node,
	react: react,
} as const satisfies Record<string, Rules>;

/**
 * Clean a directory of all files.
 *
 * @param directory Target directory to clean
 */
const clearDirectory = (directory: string): void => {
	const files = fs.readdirSync(directory);

	for (const file of files) {
		fs.unlinkSync(path.join(directory, file));
	}
}

/**
 * Write a configuration file to the specified directory.

 * @param configuration Configuration to write
 * @param directory Target directory
 * @param name Name of the configuration
 */
const writeConfigurationFile = (
	configuration: Configuration,
	directory: string,
	name: string,
): void  => {
	const stringified = JSON.stringify(configuration);
	const fileName = path.join(directory, name);

	fs.writeFileSync(fileName, stringified, { encoding: "utf8", flag: "w" });
}

/**
 * Build the individual configuration files into the specified directory.
 *
 * @param target - Path where to save the generated files
 */
const build = (): void => {
	const {
		values: { target },
	} = parseArgs({
		allowPositionals: true,
		args: process.argv,
		options: {
			target: {
				type: "string",
			},
		},
	});

	if (target === undefined || target.trim().length === 0) {
		throw new Error('The "target" argument is missing!');
	}

	if (!fs.existsSync(target)) {
		fs.mkdirSync(target, { recursive: true });
	}

	clearDirectory(target);

	for (const [name, rules] of Object.entries(ruleSets)) {
		const configuration = {
			...baseConfiguration,

			linter: {
				...baseConfiguration.linter,

				rules: rules,
			},
		} satisfies Configuration;

		writeConfigurationFile(configuration, target, `${name}.json`);
	}
}

try {
	build();
} catch (error: unknown) {
	console.error(error);

	process.exit(1);
}

import type { z } from "zod";
import type {
	configurationSchema,
	indentStyleSchema,
	lineEndingSchema,
	quoteStyleSchema,
} from "./generated/configuration";

const LINE_WIDTH = 120 as const;
const INDENT_WIDTH = 2 as const;
const LINE_ENDING = "lf" as const satisfies z.infer<typeof lineEndingSchema>;
const INDENT_STYLE = "tab" as const satisfies z.infer<typeof indentStyleSchema>;
const QUOTE_STYLE = "double" as const satisfies z.infer<
	typeof quoteStyleSchema
>;

/**
 * This is the base configuration used in all of the rule sets.
 * The aim here is to configure as much as possible so that all of the use cases of Biome can be used across editors in a consistent manner.
 */
const baseConfiguration = {
	assist: {
		actions: {
			recommended: true,
			source: {
				organizeImports: {
					level: "on",
					options: {
						groups: [":URL:", ":BUN:", ":NODE:", ":PACKAGE:", ":PACKAGE_WITH_PROTOCOL:", ":ALIAS:", ":PATH:"],
					},
				},
				recommended: false,
				/**
				 * Manual sorting is preferred.
				 */
				useSortedAttributes: "off",
				/**
				 * Manual sorting is preferred.
				 */
				useSortedKeys: "off",
				/**
				 * Manual sorting is preferred.
				 */
				useSortedProperties: "off",
			},
		},
	},

	css: {
		assist: {
			enabled: true,
		},

		formatter: {
			enabled: true,

			indentStyle: INDENT_STYLE,
			indentWidth: INDENT_WIDTH,
			lineEnding: LINE_ENDING,
			lineWidth: LINE_WIDTH,
			quoteStyle: QUOTE_STYLE,
		},

		linter: {
			enabled: true,
		},

		parser: {
			allowWrongLineComments: false,
			cssModules: true,
		},
	},

	formatter: {
		attributePosition: "multiline",
		bracketSameLine: false,
		bracketSpacing: true,
		enabled: true,
		expand: "auto",
		formatWithErrors: false,
		indentStyle: INDENT_STYLE,
		indentWidth: INDENT_WIDTH,
		lineEnding: LINE_ENDING,
		lineWidth: LINE_WIDTH,
		useEditorconfig: true,
	},

	graphql: {
		assist: {
			enabled: true,
		},

		formatter: {
			bracketSpacing: true,
			enabled: true,
			indentStyle: INDENT_STYLE,
			indentWidth: INDENT_WIDTH,
			lineEnding: LINE_ENDING,
			lineWidth: LINE_WIDTH,
			quoteStyle: QUOTE_STYLE,
		},

		linter: {
			enabled: true,
		},
	},

	html: {
		formatter: {
			attributePosition: "auto",
			bracketSameLine: false,
			enabled: true,
			indentScriptAndStyle: true,
			indentStyle: INDENT_STYLE,
			indentWidth: INDENT_WIDTH,
			lineEnding: LINE_ENDING,
			lineWidth: LINE_WIDTH,
			selfCloseVoidElements: "always",
			whitespaceSensitivity: "strict",
		},
	},

	javascript: {
		assist: {
			enabled: true,
		},

		formatter: {
			arrowParentheses: "always",
			attributePosition: "auto",
			bracketSameLine: false,
			bracketSpacing: true,
			enabled: true,
			expand: "auto",
			indentStyle: INDENT_STYLE,
			indentWidth: INDENT_WIDTH,
			jsxQuoteStyle: QUOTE_STYLE,
			lineEnding: LINE_ENDING,
			lineWidth: LINE_WIDTH,
			quoteProperties: "asNeeded",
			quoteStyle: QUOTE_STYLE,
			semicolons: "always",
			trailingCommas: "all",
		},

		linter: {
			enabled: true,
		},

		parser: {
			jsxEverywhere: false,
			unsafeParameterDecoratorsEnabled: false,
		},
	},

	json: {
		assist: {
			enabled: true,
		},

		formatter: {
			bracketSpacing: true,
			enabled: true,
			expand: "auto",
			indentStyle: INDENT_STYLE,
			indentWidth: INDENT_WIDTH,
			lineEnding: LINE_ENDING,
			lineWidth: LINE_WIDTH,
			trailingCommas: "none",
		},

		linter: {
			enabled: true,
		},

		parser: {
			allowComments: true,
			allowTrailingCommas: false,
		},
	},

	linter: {
		enabled: true,
	},

	plugins: ["@cookielab.io/plugins/useGroupedExportsLast.grit"],
} as const satisfies z.infer<typeof configurationSchema>;

export { baseConfiguration };

[**@cookielab.io/biome-config**](../../README.md)

***

[@cookielab.io/biome-config](../../modules.md) / [base](../README.md) / baseConfiguration

# Variable: baseConfiguration

> `const` **baseConfiguration**: `object`

Defined in: [base.ts:19](https://github.com/cookielab/biome-configuration/blob/main/src/base.ts#L19)

This is the base configuration used in all of the rule sets.
The aim here is to configure as much as possible so that all of the use cases of Biome can be used across editors in a consistent manner.

## Type Declaration

### assist

> `readonly` **assist**: `object`

#### assist.actions

> `readonly` **actions**: `object`

#### assist.actions.recommended

> `readonly` **recommended**: `true` = `true`

#### assist.actions.source

> `readonly` **source**: `object`

#### assist.actions.source.organizeImports

> `readonly` **organizeImports**: `object`

#### assist.actions.source.organizeImports.level

> `readonly` **level**: `"on"` = `"on"`

#### assist.actions.source.organizeImports.options

> `readonly` **options**: `object`

#### assist.actions.source.organizeImports.options.groups

> `readonly` **groups**: \[\{ `type`: `true`; \}\]

#### assist.actions.source.recommended

> `readonly` **recommended**: `false` = `false`

#### assist.actions.source.useSortedAttributes

> `readonly` **useSortedAttributes**: `"off"` = `"off"`

Manual sorting is preferred.

#### assist.actions.source.useSortedKeys

> `readonly` **useSortedKeys**: `"off"` = `"off"`

Manual sorting is preferred.

#### assist.actions.source.useSortedProperties

> `readonly` **useSortedProperties**: `"off"` = `"off"`

Manual sorting is preferred.

### css

> `readonly` **css**: `object`

#### css.assist

> `readonly` **assist**: `object`

#### css.assist.enabled

> `readonly` **enabled**: `true` = `true`

#### css.formatter

> `readonly` **formatter**: `object`

#### css.formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### css.formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### css.formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### css.formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### css.formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### css.formatter.quoteStyle

> `readonly` **quoteStyle**: `"double"` = `QUOTE_STYLE`

#### css.linter

> `readonly` **linter**: `object`

#### css.linter.enabled

> `readonly` **enabled**: `true` = `true`

#### css.parser

> `readonly` **parser**: `object`

#### css.parser.allowWrongLineComments

> `readonly` **allowWrongLineComments**: `false` = `false`

#### css.parser.cssModules

> `readonly` **cssModules**: `true` = `true`

### formatter

> `readonly` **formatter**: `object`

#### formatter.attributePosition

> `readonly` **attributePosition**: `"auto"` = `"auto"`

#### formatter.bracketSameLine

> `readonly` **bracketSameLine**: `false` = `false`

#### formatter.bracketSpacing

> `readonly` **bracketSpacing**: `true` = `true`

#### formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### formatter.expand

> `readonly` **expand**: `"auto"` = `"auto"`

#### formatter.formatWithErrors

> `readonly` **formatWithErrors**: `false` = `false`

#### formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### formatter.useEditorconfig

> `readonly` **useEditorconfig**: `true` = `true`

### graphql

> `readonly` **graphql**: `object`

#### graphql.assist

> `readonly` **assist**: `object`

#### graphql.assist.enabled

> `readonly` **enabled**: `true` = `true`

#### graphql.formatter

> `readonly` **formatter**: `object`

#### graphql.formatter.bracketSpacing

> `readonly` **bracketSpacing**: `true` = `true`

#### graphql.formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### graphql.formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### graphql.formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### graphql.formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### graphql.formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### graphql.formatter.quoteStyle

> `readonly` **quoteStyle**: `"double"` = `QUOTE_STYLE`

#### graphql.linter

> `readonly` **linter**: `object`

#### graphql.linter.enabled

> `readonly` **enabled**: `true` = `true`

### html

> `readonly` **html**: `object`

#### html.formatter

> `readonly` **formatter**: `object`

#### html.formatter.attributePosition

> `readonly` **attributePosition**: `"auto"` = `"auto"`

#### html.formatter.bracketSameLine

> `readonly` **bracketSameLine**: `false` = `false`

#### html.formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### html.formatter.indentScriptAndStyle

> `readonly` **indentScriptAndStyle**: `true` = `true`

#### html.formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### html.formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### html.formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### html.formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### html.formatter.selfCloseVoidElements

> `readonly` **selfCloseVoidElements**: `"always"` = `"always"`

#### html.formatter.whitespaceSensitivity

> `readonly` **whitespaceSensitivity**: `"strict"` = `"strict"`

### javascript

> `readonly` **javascript**: `object`

#### javascript.assist

> `readonly` **assist**: `object`

#### javascript.assist.enabled

> `readonly` **enabled**: `true` = `true`

#### javascript.formatter

> `readonly` **formatter**: `object`

#### javascript.formatter.arrowParentheses

> `readonly` **arrowParentheses**: `"always"` = `"always"`

#### javascript.formatter.attributePosition

> `readonly` **attributePosition**: `"auto"` = `"auto"`

#### javascript.formatter.bracketSameLine

> `readonly` **bracketSameLine**: `false` = `false`

#### javascript.formatter.bracketSpacing

> `readonly` **bracketSpacing**: `true` = `true`

#### javascript.formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### javascript.formatter.expand

> `readonly` **expand**: `"auto"` = `"auto"`

#### javascript.formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### javascript.formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### javascript.formatter.jsxQuoteStyle

> `readonly` **jsxQuoteStyle**: `"double"` = `QUOTE_STYLE`

#### javascript.formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### javascript.formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### javascript.formatter.quoteProperties

> `readonly` **quoteProperties**: `"asNeeded"` = `"asNeeded"`

#### javascript.formatter.quoteStyle

> `readonly` **quoteStyle**: `"double"` = `QUOTE_STYLE`

#### javascript.formatter.semicolons

> `readonly` **semicolons**: `"always"` = `"always"`

#### javascript.formatter.trailingCommas

> `readonly` **trailingCommas**: `"all"` = `"all"`

#### javascript.linter

> `readonly` **linter**: `object`

#### javascript.linter.enabled

> `readonly` **enabled**: `true` = `true`

#### javascript.parser

> `readonly` **parser**: `object`

#### javascript.parser.jsxEverywhere

> `readonly` **jsxEverywhere**: `false` = `false`

#### javascript.parser.unsafeParameterDecoratorsEnabled

> `readonly` **unsafeParameterDecoratorsEnabled**: `false` = `false`

### json

> `readonly` **json**: `object`

#### json.assist

> `readonly` **assist**: `object`

#### json.assist.enabled

> `readonly` **enabled**: `true` = `true`

#### json.formatter

> `readonly` **formatter**: `object`

#### json.formatter.bracketSpacing

> `readonly` **bracketSpacing**: `true` = `true`

#### json.formatter.enabled

> `readonly` **enabled**: `true` = `true`

#### json.formatter.expand

> `readonly` **expand**: `"auto"` = `"auto"`

#### json.formatter.indentStyle

> `readonly` **indentStyle**: `"tab"` = `INDENT_STYLE`

#### json.formatter.indentWidth

> `readonly` **indentWidth**: `2` = `INDENT_WIDTH`

#### json.formatter.lineEnding

> `readonly` **lineEnding**: `"lf"` = `LINE_ENDING`

#### json.formatter.lineWidth

> `readonly` **lineWidth**: `120` = `LINE_WIDTH`

#### json.formatter.trailingCommas

> `readonly` **trailingCommas**: `"none"` = `"none"`

#### json.linter

> `readonly` **linter**: `object`

#### json.linter.enabled

> `readonly` **enabled**: `true` = `true`

#### json.parser

> `readonly` **parser**: `object`

#### json.parser.allowComments

> `readonly` **allowComments**: `true` = `true`

#### json.parser.allowTrailingCommas

> `readonly` **allowTrailingCommas**: `false` = `false`

### linter

> `readonly` **linter**: `object`

#### linter.enabled

> `readonly` **enabled**: `true` = `true`

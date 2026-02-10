/** biome-ignore-all lint/style/useNamingConvention: Biome rule names use consecutive uppercase characters, unfortunately. */
import type { z } from "zod";
import type {
	a11YSchema,
	complexitySchema,
	correctnessSchema,
	nurserySchema,
	performanceSchema,
	rulesSchema,
	securitySchema,
	styleSchema,
	suspiciousSchema,
} from "../generated/configuration";

/**
 * Accessibility should only be activated in projects with frontend code (HTML, React, Solid, Svelte, Vue...)
 */
const a11y = {
	noAccessKey: "off",
	noAriaHiddenOnFocusable: "off",
	noAriaUnsupportedElements: "off",
	noAutofocus: "off",
	noDistractingElements: "off",
	noHeaderScope: "off",
	noInteractiveElementToNoninteractiveRole: "off",
	noLabelWithoutControl: "off",
	noNoninteractiveElementInteractions: "off",
	noNoninteractiveElementToInteractiveRole: "off",
	noNoninteractiveTabindex: "off",
	noPositiveTabindex: "off",
	noRedundantAlt: "off",
	noRedundantRoles: "off",
	noStaticElementInteractions: "off",
	noSvgWithoutTitle: "off",
	recommended: false,
	useAltText: "off",
	useAnchorContent: "off",
	useAriaActivedescendantWithTabindex: "off",
	useAriaPropsForRole: "off",
	useAriaPropsSupportedByRole: "off",
	useButtonType: "off",
	useFocusableInteractive: "off",
	useGenericFontNames: "off",
	useHeadingContent: "off",
	useHtmlLang: "off",
	useIframeTitle: "off",
	useKeyWithClickEvents: "off",
	useKeyWithMouseEvents: "off",
	useMediaCaption: "off",
	useSemanticElements: "off",
	useValidAnchor: "off",
	useValidAriaProps: "off",
	useValidAriaRole: "off",
	useValidAriaValues: "off",
	useValidAutocomplete: "off",
	useValidLang: "off",
} as const satisfies z.infer<ReturnType<typeof a11YSchema.required>>;

const complexity = {
	noAdjacentSpacesInRegex: "error",
	noArguments: "warn",
	/**
	 * No point in banning any types globally. Should be done per-project, if at all.
	 */
	noBannedTypes: "off",
	noCommaOperator: "error",
	noEmptyTypeParameters: "error",
	noExcessiveCognitiveComplexity: "warn",
	/**
	 * Does not really make sense as high line count != high complexity.
	 */
	noExcessiveLinesPerFunction: "off",
	noExcessiveNestedTestSuites: "warn",
	noExtraBooleanCast: "error",
	noFlatMapIdentity: "error",
	noForEach: "error",
	noImplicitCoercions: "error",
	/**
	 * Frontend-only rule.
	 */
	noImportantStyles: "off",
	noStaticOnlyClass: "error",
	noThisInStatic: "off",
	noUselessCatch: "error",
	noUselessConstructor: "error",
	noUselessContinue: "error",
	noUselessEmptyExport: "error",
	noUselessEscapeInRegex: "error",
	/**
	 * React-only rule.
	 */
	noUselessFragments: "off",
	noUselessLabel: "error",
	noUselessLoneBlockStatements: "error",
	noUselessRename: "error",
	noUselessStringConcat: "error",
	noUselessStringRaw: "error",
	noUselessSwitchCase: "error",
	noUselessTernary: "error",
	noUselessThisAlias: "error",
	noUselessTypeConstraint: "error",
	noUselessUndefinedInitialization: "error",
	noVoid: "error",
	recommended: false,
	useArrowFunction: "error",
	useDateNow: "error",
	useFlatMap: "error",
	useIndexOf: "error",
	/**
	 * Clashes with index-based access required by a strict Typescript configuration when using records with `string` as the key type.
	 */
	useLiteralKeys: "off",
	useNumericLiterals: "error",
	useOptionalChain: "error",
	useRegexLiterals: "error",
	useSimpleNumberKeys: "error",
	useSimplifiedLogicExpression: "error",
	useWhile: "error",
} as const satisfies z.infer<ReturnType<typeof complexitySchema.required>>;

const correctness = {
	/**
	 * React-only rule.
	 */
	noChildrenProp: "off",
	noConstAssign: "error",
	noConstantCondition: "error",
	noConstantMathMinMaxClamp: "error",
	noConstructorReturn: "error",
	noEmptyCharacterClassInRegex: "error",
	noEmptyPattern: "error",
	/**
	 * Should only be enabled per-project, depending on the bundler and CommonJS/ESM usage.
	 *
	 * Recommended level would be `error`.
	 */
	noGlobalDirnameFilename: "off",
	noGlobalObjectCalls: "error",
	noInnerDeclarations: "error",
	noInvalidBuiltinInstantiation: "error",
	noInvalidConstructorSuper: "error",
	/**
	 * Frontend-only rule.
	 */
	noInvalidDirectionInLinearGradient: "off",
	/**
	 * Frontend-only rule.
	 */
	noInvalidGridAreas: "off",
	/**
	 * Frontend-only rule.
	 */
	noInvalidPositionAtImportRule: "off",
	noInvalidUseBeforeDeclaration: "error",
	/**
	 * Frontend-only rule.
	 */
	noMissingVarFunction: "off",
	/**
	 * React-only rule.
	 */
	noNestedComponentDefinitions: "off",
	/**
	 * Should only be disabled in Node projects.
	 */
	noNodejsModules: "error",
	noNonoctalDecimalEscape: "error",
	noPrecisionLoss: "error",
	noPrivateImports: "error",
	noProcessGlobal: "error",
	/**
	 * Qwik-only rule
	 */
	noQwikUseVisibleTask: "off",
	/**
	 * React-only rule.
	 */
	noReactPropAssignments: "off",
	/**
	 * React-only rule.
	 */
	noRenderReturnValue: "off",
	/**
	 * React-only rule.
	 */
	noRestrictedElements: "off",
	noSelfAssign: "error",
	noSetterReturn: "error",
	/**
	 * Solid-only rule.
	 */
	noSolidDestructuredProps: "off",
	noStringCaseMismatch: "error",
	noSwitchDeclarations: "error",
	noUndeclaredDependencies: "error",
	noUndeclaredVariables: "error",
	/**
	 * Frontend-only rule.
	 */
	noUnknownFunction: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownMediaFeatureName: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownProperty: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownPseudoClass: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownPseudoElement: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownTypeSelector: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnknownUnit: "off",
	/**
	 * Frontend-only rule.
	 */
	noUnmatchableAnbSelector: "off",
	noUnreachable: "error",
	noUnreachableSuper: "error",
	noUnsafeFinally: "error",
	noUnsafeOptionalChaining: "error",
	noUnusedFunctionParameters: "error",
	noUnusedImports: "error",
	noUnusedLabels: "error",
	noUnusedPrivateClassMembers: "error",
	noUnusedVariables: "error",
	/**
	 * React-only rule.
	 */
	noVoidElementsWithChildren: "off",
	noVoidTypeReturn: "error",
	recommended: false,
	/**
	 * React-only rule.
	 */
	useExhaustiveDependencies: "off",
	/**
	 * GraphQL-only rule.
	 */
	useGraphqlNamedOperations: "off",
	/**
	 * React-only rule.
	 */
	useHookAtTopLevel: "off",
	/**
	 * Frontend-only rule.
	 */
	useImageSize: "off",
	/**
	 * Should only be enabled per-project, depending on the bundler usage.
	 *
	 * Recommended level would be `error`.
	 */
	useImportExtensions: "off",
	useIsNan: "error",
	useJsonImportAttributes: "error",
	/**
	 * React-only rule.
	 */
	useJsxKeyInIterable: "off",
	useParseIntRadix: "error",
	/**
	 * Qwik-only rule.
	 */
	useQwikClasslist: "off",
	useSingleJsDocAsterisk: "warn",
	/**
	 * React-only rule.
	 */
	useUniqueElementIds: "off",
	useValidForDirection: "error",
	useValidTypeof: "error",
	useYield: "error",
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	/**
	 * This rule promotes  more accessible interfaces. However, turning this into an error would be too harsh as a lot of links would not meet the necessary criteria to pass.
	 * Leaving the level to `warn` keeps the balance between being helpful and annoying/fighting with designers.
	 */
	noAmbiguousAnchorText: "warn",
	/**
	 * NextJS-only rule.
	 */
	noBeforeInteractiveScriptOutsideDocument: "off",
	/**
	 * `continue` helps to avoid nesting inside loop bodies.
	 */
	noContinue: "off",
	noDeprecatedImports: "warn",
	/**
	 * Frontend-only rule.
	 */
	noDeprecatedMediaType: "off",
	/**
	 * Enforces a more readable regular expression.
	 */
	noDivRegex: "error",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateArgumentNames: "off",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateAttributes: "off",
	/**
	 * NodeJS-only rule.
	 */
	noDuplicateDependencies: "off",
	/**
	 * React & Solid.js only rule.
	 */
	noDuplicatedSpreadProps: "off",
	/**
	 * This rule is enabled just in case. Enums are otherwise forbidden by the configuration.
	 */
	noDuplicateEnumValueNames: "error",
	/**
	 * This rule is enabled just in case. Enums are otherwise forbidden by the configuration.
	 */
	noDuplicateEnumValues: "error",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateFieldDefinitionNames: "off",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateGraphqlOperationName: "off",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateInputFieldNames: "off",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateVariableNames: "off",
	/**
	 * GraphQL-only rule.
	 */
	noEmptySource: "off",
	/**
	 * Keeping this `off` as this approach is useful when working with libraries and projects that use `null` and `undefined` interchangeably.
	 */
	noEqualsToNull: "off",
	/**
	 * Should really be left up to individual projects. More than two can be fine, if defining things like Errors in a single place.
	 * The configuration is left up at the `warn` level to let maintainers know that a rule like this exists and can be configured differently.
	 */
	noExcessiveClassesPerFile: {
		level: "warn",
		options: {
			maxClasses: 2,
		},
	},
	/**
	 * The rule is left as `off`. If required, it should be enabled on a project level.
	 */
	noExcessiveLinesPerFile: "off",
	/**
	 * Creating a new class without consuming it seems like a code smell - constructors should not have side-effects.
	 */
	noFloatingClasses: "error",
	noFloatingPromises: "error",
	/**
	 * `for-in` loops are usually just a typo when trying to remember how `for-of` is written.
	 *  As the Biome documentation mentions, `for-of`, plain `for` loop, or even `array.entries` are the better and more explicit options.
	 */
	noForIn: "warn",
	/**
	 * Frontend-only rule.
	 */
	noHexColors: "off",
	noImportCycles: "error",
	/**
	 * This rule should be useful for the avoidance of incorrectly auto-inserted semicolons.
	 * Although, the usage in for-loops makes sense and is thus allowed.
	 */
	noIncrementDecrement: {
		level: "error",
		options: {
			allowForLoopAfterthoughts: true,
		},
	},
	/**
	 * JSX-dialects only rule.
	 */
	noJsxLiterals: "off",
	/**
	 * React-only rule.
	 */
	noJsxPropsBind: "off",
	/**
	 * React-only rule.
	 */
	noLeakedRender: "off",
	noMisusedPromises: "error",
	/**
	 * Keeping the assignments more explicit. There are no performance gains, as the code is bundled & minified anyway.
	 * Keeping the assignments separate makes them more readable.
	 */
	noMultiAssign: "error",
	/**
	 * Using strings with ``` is a better approach.
	 */
	noMultiStr: "error",
	/**
	 * NextJS-only rule.
	 */
	noNextAsyncClientComponent: "off",
	/**
	 * Just making sure there are no unused parameters in recursive functions.
	 */
	noParametersOnlyUsedInRecursion: "off",
	/**
	 * This approach to accessing object's prototype is deprecated since 2009.
	 */
	noProto: "error",
	/**
	 * React-only rule.
	 */
	noReactForwardRef: "off",
	/**
	 * Prevents re-exporting the same value as a named export and a default export as well.
	 */
	noRedundantDefaultExport: "error",
	/**
	 * There is no need to assign anything when returning.
	 */
	noReturnAssign: "error",
	/**
	 * GraphQL-only rule.
	 */
	noRootType: "off",
	/**
	 * Frontend-only rule.
	 */
	noScriptUrl: "off",
	noShadow: "error",
	/**
	 * NextJS-only rule.
	 */
	noSyncScripts: "off",
	/**
	 * Ternaries are a superior way of assigning to variables.
	 * They only become hard to read once they become nested or use long conditions.
	 */
	noTernary: "off",
	/**
	 * Turborepo-only rule.
	 */
	noUndeclaredEnvVars: "off",
	/**
	 * JSX-only rule.
	 */
	noUnknownAttribute: "off",
	noUnnecessaryConditions: "warn",
	/**
	 * Produces too many false-positives for now.
	 */
	noUnresolvedImports: "off",
	noUnusedExpressions: "error",
	noUselessCatchBinding: "error",
	noUselessUndefined: "error",
	/**
	 * Vue-only rule.
	 */
	noVueArrowFuncInWatch: "off",
	/**
	 * Vue-only rule.
	 */
	noVueDataObjectDeclaration: "off",
	/**
	 * Vue-only rule.
	 */
	noVueDuplicateKeys: "off",
	/**
	 * Vue-only rule.
	 */
	noVueOptionsApi: "off",
	/**
	 * Vue-only rule.
	 */
	noVueReservedKeys: "off",
	/**
	 * Vue-only rule.
	 */
	noVueReservedProps: "off",
	/**
	 * Vue-only rule.
	 */
	noVueSetupPropsReactivityLoss: "off",
	/**
	 * Vue-only rule.
	 */
	noVueVIfWithVFor: "off",
	recommended: false,
	/**
	 * Enforces all sorting operations to be explicitly defined.
	 */
	useArraySortCompare: "error",
	/**
	 * There is no need to await non-Promise values.
	 */
	useAwaitThenable: "error",
	useConsistentArrowReturn: "error",
	/**
	 * This rule is enabled just in case. Enums are otherwise forbidden by the configuration.
	 */
	useConsistentEnumValueType: "error",
	/**
	 * GraphQL-only rule.
	 */
	useConsistentGraphqlDescriptions: "off",
	/**
	 * This rule enforces a consistent method signature in interfaces and types.
	 * The property style keeps the code definitions consistant between attributes and methods.
	 */
	useConsistentMethodSignatures: { level: "error", options: { style: "property" } },
	/**
	 * GraphQL-only rule.
	 */
	useDeprecatedDate: "off",
	/**
	 * Destructuring may be more readable in many cases. However, the distinction is not simply black-and-white and is left up to the code reviewer.
	 * The level is left at `info` to at least let the user know that the option exists.
	 */
	useDestructuring: "info",
	/**
	 * Promotes better error-handling practices.
	 */
	useErrorCause: "error",
	useExhaustiveSwitchCases: "error",
	/**
	 * The rule is currently missing the option to make the following usage valid:
	 *
	 * @example
	 * ```typescript
	 * const returnsString = (): string => "value";
	 *
	 * const isDefinitelyString = returnsString(); // isDefinitelyString would have to have it's typed explicitly written out
	 * ```
	 */
	useExplicitType: "off",
	/**
	 * Much more readable approach then indexing into a possibly empty array.
	 */
	useFind: "error",
	/**
	 * This rule promotes the use of cross-platform compatible global accessors.
	 * Biome allows for some `window` specific accesses that are not directly available on globalThis.
	 */
	useGlobalThis: "warn",
	/**
	 * NextJS-only rule.
	 */
	useInlineScriptId: "off",
	/**
	 * GraphQL-only rule.
	 */
	useLoneAnonymousOperation: "off",
	/**
	 * GraphQL-only rule.
	 */
	useLoneExecutableDefinition: "off",
	useMaxParams: "error",
	/**
	 * Qwik-only rule.
	 */
	useQwikMethodUsage: "off",
	/**
	 * Qwik-only rule.
	 */
	useQwikValidLexicalScope: "off",
	/**
	 * `RegExp.exec` is slightly faster than `String.match`.
	 */
	useRegexpExec: "error",
	/**
	 * This rule should only be enabled in a specific project as every project uses different required scripts.
	 */
	useRequiredScripts: "off",
	/**
	 * Frontend-only rule.
	 */
	useSortedClasses: "off",
	/**
	 * Spread syntax is more readable than using `Object.apply`.
	 */
	useSpread: "error",
	useVueConsistentDefinePropsDeclaration: "off",
	useVueConsistentVBindStyle: "off",
	useVueConsistentVOnStyle: "off",
	/**
	 * Vue-only rule.
	 */
	useVueDefineMacrosOrder: "off",
	useVueHyphenatedAttributes: "off",
	/**
	 * Vue-only rule.
	 */
	useVueMultiWordComponentNames: "off",
	useVueValidTemplateRoot: "off",
	useVueValidVBind: "off",
	useVueValidVCloak: "off",
	useVueValidVElse: "off",
	useVueValidVElseIf: "off",
	useVueValidVHtml: "off",
	useVueValidVIf: "off",
	useVueValidVOn: "off",
	useVueValidVOnce: "off",
	useVueValidVPre: "off",
	useVueValidVText: "off",
	useVueVapor: "off",
	useVueVForKey: "off",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	noAccumulatingSpread: "error",
	noAwaitInLoops: "warn",
	/**
	 * Should only be enabled per-project.
	 *
	 * Recommended level would be `error`.
	 */
	noBarrelFile: "off",
	noDelete: "error",
	noDynamicNamespaceImportAccess: "error",
	/**
	 * NextJS-only rule.
	 */
	noImgElement: "off",
	noNamespaceImport: "error",
	noReExportAll: "error",
	/**
	 * NextJS-only rule.
	 */
	noUnwantedPolyfillio: "off",
	recommended: false,
	/**
	 * Frontend-only rule.
	 */
	useGoogleFontPreconnect: "off",
	/**
	 * Solid-only rule.
	 */
	useSolidForComponent: "off",
	useTopLevelRegex: "error",
} as const satisfies z.infer<ReturnType<typeof performanceSchema.required>>;

const security = {
	/**
	 * Frontend-only rule.
	 */
	noBlankTarget: "off",
	/**
	 * React-only rule.
	 */
	noDangerouslySetInnerHtml: "off",
	/**
	 * React-only rule.
	 */
	noDangerouslySetInnerHtmlWithChildren: "off",
	noGlobalEval: "error",
	/**
	 * Produces too many false-positives.
	 */
	noSecrets: "off",
	recommended: false,
} as const satisfies z.infer<ReturnType<typeof securitySchema.required>>;

const style = {
	/**
	 * Should only be enabled in ESM projects or projects using bundlers.
	 *
	 * Recommended level would be `error`.
	 */
	noCommonJs: "off",
	noDefaultExport: "error",
	/**
	 * Frontend-only rule.
	 */
	noDescendingSpecificity: "off",
	noDoneCallback: "error",
	noEnum: "error",
	noExportedImports: "error",
	/**
	 * NextJS-only rule.
	 */
	noHeadElement: "off",
	noImplicitBoolean: "error",
	noInferrableTypes: "error",
	noMagicNumbers: "warn",
	noNamespace: "error",
	noNegationElse: "error",
	noNestedTernary: "error",
	noNonNullAssertion: "error",
	noParameterAssign: "error",
	noParameterProperties: "error",
	noProcessEnv: "error",
	/**
	 * No point in banning any globals globally. Should be done per-project, if at all.
	 */
	noRestrictedGlobals: "off",
	/**
	 * No point in banning any imports globally. Should be done per-project, if at all.
	 */
	noRestrictedImports: "off",
	/**
	 * No point in banning any types globally. Should be done per-project, if at all.
	 */
	noRestrictedTypes: "off",
	/**
	 * Shouting is not a crime.
	 */
	noShoutyConstants: "off",
	noSubstr: "error",
	noUnusedTemplateLiteral: "error",
	noUselessElse: "error",
	/**
	 * Frontend-only rule.
	 */
	noValueAtRule: "off",
	noYodaExpression: "error",
	recommended: false,
	useArrayLiterals: "error",
	useAsConstAssertion: "error",
	useAtIndex: "error",
	useBlockStatements: "error",
	useCollapsedElseIf: "error",
	useCollapsedIf: "error",
	/**
	 * React-only rule.
	 */
	useComponentExportOnlyModules: "off",
	useConsistentArrayType: {
		level: "error",
		options: {
			syntax: "shorthand",
		},
	},
	useConsistentBuiltinInstantiation: "error",
	/**
	 * React-only rule.
	 */
	useConsistentCurlyBraces: "off",
	useConsistentMemberAccessibility: {
		level: "error",
		options: {
			accessibility: "explicit",
		},
	},
	useConsistentObjectDefinitions: {
		level: "error",
		options: {
			syntax: "explicit",
		},
	},
	/**
	 * `type` and `interface` are pretty much equivalent. However, to prevent accidental declaration merging of interfaces with the same name and to enable easy declaration of unions, mapped types or
	 * conditional types, `type` is the recommended approach.
	 *
	 * This rule should be disabled only for cases when needing to use `class ClassName implements Interface`.
	 *
	 * For in-depth explanation see https://www.totaltypescript.com/type-vs-interface-which-should-you-use
	 */
	useConsistentTypeDefinitions: {
		level: "error",
		options: {
			style: "type",
		},
	},
	useConst: "error",
	useDefaultParameterLast: "error",
	/**
	 * Only `warn` as to not clash with `nursery/useExhaustiveSwitchCases`.
	 */
	useDefaultSwitchClause: "warn",
	/**
	 * GraphQL-only rule.
	 */
	useDeprecatedReason: "off",
	/**
	 * Enums are forbidden.
	 */
	useEnumInitializers: "off",
	useExplicitLengthCheck: "error",
	useExponentiationOperator: "error",
	useExportsLast: "error",
	useExportType: "error",
	/**
	 * Should only be enabled per-project.
	 */
	useFilenamingConvention: "off",
	useForOf: "error",
	/**
	 * React-only rule.
	 */
	useFragmentSyntax: "off",
	/**
	 * GraphQL-only rule.
	 */
	useGraphqlNamingConvention: "off",
	useGroupedAccessorPairs: "error",
	useImportType: "error",
	/**
	 * Enums are forbidden.
	 */
	useLiteralEnumMembers: "off",
	useNamingConvention: "warn",
	/**
	 * Node-only rule.
	 */
	useNodeAssertStrict: "off",
	/**
	 * Node-only rule.
	 */
	useNodejsImportProtocol: "off",
	useNumberNamespace: "error",
	useNumericSeparators: "error",
	useObjectSpread: "error",
	/**
	 * React-only rule.
	 */
	useReactFunctionComponents: "off",
	useReadonlyClassProperties: "warn",
	/**
	 * React-only rule.
	 */
	useSelfClosingElements: "off",
	useShorthandAssign: "error",
	useShorthandFunctionType: "error",
	useSingleVarDeclarator: "error",
	useSymbolDescription: "error",
	useTemplate: "error",
	useThrowNewError: "error",
	useThrowOnlyError: "error",
	useTrimStartEnd: "error",
	useUnifiedTypeSignatures: "warn",
} as const satisfies z.infer<ReturnType<typeof styleSchema.required>>;

const suspicious = {
	/**
	 * Frontend-only rule.
	 */
	noAlert: "off",
	noApproximativeNumericConstant: "error",
	/**
	 * React-only rule.
	 */
	noArrayIndexKey: "off",
	noAssignInExpressions: "error",
	noAsyncPromiseExecutor: "error",
	noBiomeFirstException: "error",
	noBitwiseOperators: "error",
	noCatchAssign: "error",
	noClassAssign: "error",
	/**
	 * React-only rule.
	 */
	noCommentText: "off",
	noCompareNegZero: "error",
	noConfusingLabels: "error",
	noConfusingVoidType: "error",
	noConsole: "error",
	noConstantBinaryExpressions: "error",
	noConstEnum: "error",
	noControlCharactersInRegex: "error",
	noDebugger: "error",
	/**
	 * Frontend-only rule.
	 */
	noDocumentCookie: "off",
	/**
	 * Frontend-only rule.
	 */
	noDocumentImportInPage: "off",
	noDoubleEquals: "error",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateAtImportRules: "off",
	noDuplicateCase: "error",
	noDuplicateClassMembers: "error",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateCustomProperties: "off",
	noDuplicateElseIf: "error",
	/**
	 * GraphQL-only rule.
	 */
	noDuplicateFields: "off",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateFontNames: "off",
	/**
	 * React-only rule.
	 */
	noDuplicateJsxProps: "off",
	noDuplicateObjectKeys: "error",
	noDuplicateParameters: "error",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateProperties: "off",
	/**
	 * Frontend-only rule.
	 */
	noDuplicateSelectorsKeyframeBlock: "off",
	noDuplicateTestHooks: "error",
	/**
	 * Frontend-only rule.
	 */
	noEmptyBlock: "off",
	/**
	 * Frontend-only rule.
	 */
	noEmptyBlockStatements: "off",
	noEmptyInterface: "error",
	noEvolvingTypes: "error",
	noExplicitAny: "error",
	noExportsInTest: "error",
	noExtraNonNullAssertion: "error",
	noFallthroughSwitchClause: "error",
	noFocusedTests: "error",
	noFunctionAssign: "error",
	noGlobalAssign: "error",
	noGlobalIsFinite: "error",
	noGlobalIsNan: "error",
	/**
	 * NextJS-only rule.
	 */
	noHeadImportInDocument: "off",
	noImplicitAnyLet: "error",
	noImportAssign: "error",
	/**
	 * Frontend-only rule.
	 */
	noImportantInKeyframe: "off",
	noIrregularWhitespace: "error",
	noLabelVar: "error",
	noMisleadingCharacterClass: "error",
	noMisleadingInstantiator: "error",
	noMisplacedAssertion: "error",
	noMisrefactoredShorthandAssign: "error",
	noNonNullAssertedOptionalChain: "error",
	noOctalEscape: "error",
	noPrototypeBuiltins: "error",
	/**
	 * Disables "quickfix" actions from being defined in Biome configuration. Left up to consumers to enable/disable.
	 */
	noQuickfixBiome: "off",
	/**
	 * Solid and qwik rule only.
	 */
	noReactSpecificProps: "off",
	noRedeclare: "error",
	noRedundantUseStrict: "error",
	noSelfCompare: "error",
	noShadowRestrictedNames: "error",
	/**
	 * Frontend-only rule.
	 */
	noShorthandPropertyOverrides: "off",
	noSkippedTests: "error",
	noSparseArray: "error",
	/**
	 * React-only rule.
	 */
	noSuspiciousSemicolonInJsx: "off",
	noTemplateCurlyInString: "error",
	noThenProperty: "error",
	noTsIgnore: "error",
	noUnassignedVariables: "error",
	/**
	 * Frontend-only rule.
	 */
	noUnknownAtRules: "off",
	noUnsafeDeclarationMerging: "error",
	noUnsafeNegation: "error",
	noUselessEscapeInString: "error",
	noUselessRegexBackrefs: "error",
	noVar: "error",
	noWith: "error",
	recommended: false,
	useAdjacentOverloadSignatures: "error",
	useAwait: "error",
	useBiomeIgnoreFolder: "error",
	useDefaultSwitchClauseLast: "error",
	useErrorMessage: "error",
	useGetterReturn: "error",
	/**
	 * Frontend-only rule.
	 */
	useGoogleFontDisplay: "off",
	useGuardForIn: "warn",
	useIsArray: "error",
	useIterableCallbackReturn: "error",
	useNamespaceKeyword: "error",
	useNumberToFixedDigitsArgument: "error",
	useStaticResponseMethods: "warn",
	useStrictMode: "error",
} as const satisfies z.infer<ReturnType<typeof suspiciousSchema.required>>;

const base = {
	a11y: a11y,
	complexity: complexity,
	correctness: correctness,
	nursery: nursery,
	performance: performance,
	recommended: false,
	security: security,
	style: style,
	suspicious: suspicious,
} as const satisfies z.infer<ReturnType<typeof rulesSchema.required>>;

export { base };

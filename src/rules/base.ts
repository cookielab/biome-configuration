import type { z } from "zod";
import type {
	a11ySchema,
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
} as const satisfies z.infer<ReturnType<typeof a11ySchema.required>>;

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
	noExcessiveNestedTestSuites: "warn",
	noExtraBooleanCast: "error",
	noFlatMapIdentity: "error",
	noForEach: "error",
	noStaticOnlyClass: "error",
	noThisInStatic: "error",
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
	 * Should only be disabled in Node projects.
	 */
	noNodejsModules: "error",
	noNonoctalDecimalEscape: "error",
	noPrecisionLoss: "error",
	noPrivateImports: "error",
	/**
	 * React-only rule.
	 */
	noRenderReturnValue: "off",
	noSelfAssign: "error",
	noSetterReturn: "error",
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
	 * React-only rule.
	 */
	useHookAtTopLevel: "off",
	/**
	 * Should only be enabled per-project, depending on the bundler usage.
	 *
	 * Recommended level would be `error`.
	 */
	useImportExtensions: "off",
	useIsNan: "error",
	/**
	 * React-only rule.
	 */
	useJsxKeyInIterable: "off",
	useValidForDirection: "error",
	useValidTypeof: "error",
	useYield: "error",
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	noAwaitInLoop: "warn",
	noBitwiseOperators: "error",
	noConstantBinaryExpression: "error",
	/**
	 * Solid-only rule.
	 */
	noDestructuredProps: "off",
	/**
	 * Does not really make sense as high line count != high complexity.
	 */
	noExcessiveLinesPerFunction: "off",
	noFloatingPromises: "error",
	/**
	 * Should only be enabled per-project, depending on the bundler and CommonJS/ESM usage.
	 *
	 * Recommended level would be `error`.
	 */
	noGlobalDirnameFilename: "off",
	noImplicitCoercion: "error",
	/**
	 * Frontend-only rule.
	 */
	noImportantStyles: "off",
	noImportCycles: "error",
	noMagicNumbers: "warn",
	noMisusedPromises: "error",
	/**
	 * React-only rule.
	 */
	noNestedComponentDefinitions: "off",
	/**
	 * Frontend-only rule.
	 */
	noNoninteractiveElementInteractions: "off",
	noNonNullAssertedOptionalChain: "error",
	noProcessGlobal: "error",
	/**
	 * Disables "quickfix" actions from being defined in Biome configuration. Left up to consumers to enable/disable.
	 */
	noQuickfixBiome: "off",
	/**
	 * Qwik-only rule.
	 */
	noQwikUseVisibleTask: "off",
	/**
	 * React-only rule.
	 */
	noReactPropAssign: "off",
	/**
	 * React-only rule.
	 */
	noRestrictedElements: "off",
	/**
	 * Produces too many false-positives for now.
	 */
	noSecrets: "off",
	noShadow: "error",
	noTsIgnore: "warn",
	noUnassignedVariables: "error",
	/**
	 * Frontend-only rule.
	 */
	noUnknownAtRule: "off",
	noUnnecessaryConditions: "warn",
	/**
	 * Produces too many false-positives for now.
	 */
	noUnresolvedImports: "off",
	/**
	 * NextJS-only rule.
	 */
	noUnwantedPolyfillio: "off",
	noUselessBackrefInRegex: "error",
	noUselessEscapeInString: "error",
	noUselessUndefined: "error",
	/**
	 * Vue-only rule.
	 */
	noVueDataObjectDeclaration: "off",
	/**
	 * Vue-only rule.
	 */
	noVueReservedKeys: "off",
	/**
	 * Vue-only rule.
	 */
	noVueReservedProps: "off",
	recommended: false,
	useAdjacentGetterSetter: "error",
	/**
	 * JSX-only rule.
	 */
	useAnchorHref: "off",
	useConsistentObjectDefinition: {
		level: "error",
		options: {
			syntax: "explicit",
		},
	},
	useConsistentResponse: "warn",
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
	useExportsLast: "error",
	/**
	 * Solid-only rule.
	 */
	useForComponent: "off",
	/**
	 * Frontend-only rule.
	 */
	useGoogleFontPreconnect: "off",
	/**
	 * Frontend-only rule.
	 */
	useImageSize: "off",
	useIndexOf: "error",
	useIterableCallbackReturn: "error",
	useJsonImportAttribute: "error",
	/**
	 * GraphQL-only rule.
	 */
	useNamedOperation: "off",
	/**
	 * Graduated to the `style` category.
	 */
	useNamingConvention: "off",
	useNumericSeparators: "error",
	useObjectSpread: "error",
	useParseIntRadix: "error",
	/**
	 * Qwik-only rule.
	 */
	useQwikClasslist: "off",
	/**
	 * React-only rule.
	 */
	useReactFunctionComponents: "off",
	useReadonlyClassProperties: "warn",
	useSingleJsDocAsterisk: "warn",
	/**
	 * Frontend-only rule.
	 */
	useSortedClasses: "off",
	useSymbolDescription: "error",
	useUnifiedTypeSignature: "warn",
	/**
	 * React-only rule.
	 */
	useUniqueElementIds: "off",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	noAccumulatingSpread: "error",
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
	recommended: false,
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
	useConsistentMemberAccessibility: "error",
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
	useImportType: "error",
	/**
	 * Enums are forbidden.
	 */
	useLiteralEnumMembers: "off",
	/**
	 * Should only be enabled per-project.
	 */
	useNamingConvention: "off",
	/**
	 * Node-only rule.
	 */
	useNodeAssertStrict: "off",
	/**
	 * Node-only rule.
	 */
	useNodejsImportProtocol: "off",
	useNumberNamespace: "error",
	/**
	 * React-only rule.
	 */
	useSelfClosingElements: "off",
	useShorthandAssign: "error",
	useShorthandFunctionType: "error",
	useSingleVarDeclarator: "error",
	useTemplate: "error",
	useThrowNewError: "error",
	useThrowOnlyError: "error",
	useTrimStartEnd: "error",
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
	noOctalEscape: "error",
	noPrototypeBuiltins: "error",
	/**
	 * React-only rule.
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
	noUnsafeDeclarationMerging: "error",
	noUnsafeNegation: "error",
	noVar: "error",
	noWith: "error",
	recommended: false,
	useAdjacentOverloadSignatures: "error",
	useAwait: "error",
	useDefaultSwitchClauseLast: "error",
	useErrorMessage: "error",
	useGetterReturn: "error",
	/**
	 * Frontend-only rule.
	 */
	useGoogleFontDisplay: "off",
	useGuardForIn: "warn",
	useIsArray: "error",
	useNamespaceKeyword: "error",
	useNumberToFixedDigitsArgument: "error",
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

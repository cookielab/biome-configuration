import {
	type A11yRules,
	base,
	type ComplexityRules,
	type CorrectnessRules,
	type NurseryRules,
	type PerformanceRules,
	type Rules,
	type SecurityRules,
	type StyleRules,
	type SuspiciousRules,
} from "./base";

const a11y = {
	...base.a11y,

	noAccessKey: "error",
	/**
	 * This rule promotes  more accessible interfaces.
	 */
	noAmbiguousAnchorText: "error",
	noAriaHiddenOnFocusable: "error",
	noAriaUnsupportedElements: "error",
	noAutofocus: "error",
	noDistractingElements: "error",
	noHeaderScope: "error",
	noInteractiveElementToNoninteractiveRole: "error",
	noLabelWithoutControl: "error",
	noNoninteractiveElementInteractions: "error",
	noNoninteractiveElementToInteractiveRole: "error",
	noNoninteractiveTabindex: "error",
	noPositiveTabindex: "error",
	noRedundantAlt: "error",
	noRedundantRoles: "error",
	noStaticElementInteractions: "error",
	noSvgWithoutTitle: "error",
	useAltText: "error",
	useAnchorContent: "error",
	useAriaActivedescendantWithTabindex: "error",
	useAriaPropsForRole: "error",
	useAriaPropsSupportedByRole: "error",
	useButtonType: "error",
	useFocusableInteractive: "error",
	useGenericFontNames: "error",
	useHeadingContent: "error",
	useHtmlLang: "error",
	useIframeTitle: "error",
	useKeyWithClickEvents: "error",
	useKeyWithMouseEvents: "error",
	useMediaCaption: "error",
	useSemanticElements: "error",
	useValidAnchor: "error",
	useValidAriaProps: "error",
	useValidAriaRole: "error",
	useValidAriaValues: "error",
	useValidAutocomplete: "error",
	useValidLang: "error",
} as const satisfies A11yRules;

const complexity = {
	...base.complexity,

	/**
	 * Enforces a cleaner CSS definition. Nesting 3 or more classes in a single rule should lead to a refactor.
	 */
	noExcessiveSelectorClasses: {
		level: "error",
		options: {
			maxClasses: 2,
		},
	},
	noImportantStyles: "error",
} as const satisfies ComplexityRules;

const correctness = {
	...base.correctness,

	/**
	 * This rule should help with writing valid HTML.
	 */
	noDuplicateAttributes: "error",
	noInvalidDirectionInLinearGradient: "error",
	noInvalidGridAreas: "error",
	noInvalidPositionAtImportRule: "error",
	noMissingVarFunction: "error",
	noUnknownFunction: "error",
	noUnknownMediaFeatureName: "error",
	noUnknownProperty: "error",
	noUnknownPseudoClass: "error",
	noUnknownPseudoElement: "error",
	noUnknownTypeSelector: "error",
	noUnmatchableAnbSelector: "error",
	useImageSize: "warn",
} as const satisfies CorrectnessRules;

const nursery = {
	...base.nursery,
} as const satisfies NurseryRules;

const performance = {
	...base.performance,

	/**
	 * `innerText` and `textContent` do not always return the same value, which may lead to unexpected issues.
	 */
	useDomNodeTextContent: "error",
	useGoogleFontPreconnect: "error",
} as const satisfies PerformanceRules;

const security = {
	...base.security,

	noBlankTarget: "error",
	/**
	 * This rule should help with preventing any XSS vulnerabilities.
	 */
	noScriptUrl: "error",
	/**
	 * Forces `iframe` elements to have a sandbox attribute.
	 */
	useIframeSandbox: "error",
} as const satisfies SecurityRules;

const style = {
	...base.style,

	noDescendingSpecificity: "error",
	/**
	 * This rule is disabled as HEX colors are pretty widely used.
	 */
	noHexColors: "off",
	/**
	 * Inline styles do not generate any errors but are harder to maintain in general. CSS files or similar solutions should be preferred.
	 */
	noInlineStyles: "warn",
	noValueAtRule: "error",
	/**
	 * Enforces `querySelector` usage over the old DOM APIs.
	 */
	useDomQuerySelector: "error",
} as const satisfies StyleRules;

const suspicious = {
	...base.suspicious,

	noAlert: "error",
	/**
	 * This rule prevents the usage of deprecated media types in CSS.
	 */
	noDeprecatedMediaType: "error",
	noDocumentCookie: "error",
	noDocumentImportInPage: "error",
	noDuplicateAtImportRules: "error",
	noDuplicateCustomProperties: "error",
	noDuplicateFontNames: "error",
	noDuplicateProperties: "error",
	/**
	 * Prevents selector duplication.
	 */
	noDuplicateSelectors: "error",
	noEmptyBlock: "error",
	noEmptyBlockStatements: "error",
	noImportantInKeyframe: "error",
	noShorthandPropertyOverrides: "error",
	noUnknownAtRules: "error",
	/**
	 * Reports when a CSS feature is not widely available. Intended to prevent usage of incompatible constructs.
	 */
	useBaseline: {
		level: "warn",
		options: {
			available: "widely",
		},
	},
	useGoogleFontDisplay: "error",
} as const satisfies SuspiciousRules;

const frontend = {
	a11y: a11y,
	complexity: complexity,
	correctness: correctness,
	nursery: nursery,
	performance: performance,
	preset: "none",
	security: security,
	style: style,
	suspicious: suspicious,
} as const satisfies Rules;

export { frontend };

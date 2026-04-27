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
import { base } from "./base";

const a11y = {
	...base.a11y,

	noAccessKey: "error",
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
	recommended: false,
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
} as const satisfies z.infer<ReturnType<typeof a11YSchema.required>>;

const complexity = {
	...base.complexity,

	noImportantStyles: "error",
} as const satisfies z.infer<ReturnType<typeof complexitySchema.required>>;

const correctness = {
	...base.correctness,

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
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	...base.nursery,

	/**
	 * This rule prevents the usage of deprecated media types in CSS.
	 */
	noDeprecatedMediaType: "error",
	/**
	 * This rule should help with writing valid HTML.
	 */
	noDuplicateAttributes: "error",
	/**
	 * Prevents selector duplication.
	 */
	noDuplicateSelectors: "error",
	/**
	 * Excessive class selectors are not necessarily an error but they make the CSS harder to read.
	 */
	noExcessiveSelectorClasses: "warn",
	/**
	 * This rule is disabled as HEX colors are pretty widely used.
	 */
	noHexColors: "off",
	/**
	 * Inline styles do not generate any errors but are harder to maintain in general. CSS files or similar solutions should be preferred.
	 */
	noInlineStyles: "warn",
	/**
	 * This rule should help with preventing any XSS vulnerabilities.
	 */
	noScriptUrl: "error",
	/**
	 * Reports when a CSS feature is not widely available. Intended to prevent usage of incompatible constructs.
	 */
	useBaseline: {
		level: "warn",
		options: {
			available: "widely",
		},
	},
	/**
	 * `innerText` and `textContent` do not always return the same value, which may lead to unexpected issues.
	 */
	useDomNodeTextContent: "error",
	/**
	 * Enforces `querySelector` usage over the old DOM APIs.
	 */
	useDomQuerySelector: "error",
	/**
	 * Forces `iframe` elements to have a sandbox attribute.
	 */
	useIframeSandbox: "error",
	useSortedClasses: "error",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	...base.performance,

	useGoogleFontPreconnect: "error",
} as const satisfies z.infer<ReturnType<typeof performanceSchema.required>>;

const security = {
	...base.security,

	noBlankTarget: "error",
} as const satisfies z.infer<ReturnType<typeof securitySchema.required>>;

const style = {
	...base.style,

	noDescendingSpecificity: "error",
	noValueAtRule: "error",
} as const satisfies z.infer<ReturnType<typeof styleSchema.required>>;

const suspicious = {
	...base.suspicious,

	noAlert: "error",
	noDocumentCookie: "error",
	noDocumentImportInPage: "error",
	noDuplicateAtImportRules: "error",
	noDuplicateCustomProperties: "error",
	noDuplicateFontNames: "error",
	noDuplicateProperties: "error",
	noEmptyBlock: "error",
	noEmptyBlockStatements: "error",
	noImportantInKeyframe: "error",
	noShorthandPropertyOverrides: "error",
	noUnknownAtRules: "error",
	useGoogleFontDisplay: "error",
} as const satisfies z.infer<ReturnType<typeof suspiciousSchema.required>>;

const frontend = {
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

export { frontend };

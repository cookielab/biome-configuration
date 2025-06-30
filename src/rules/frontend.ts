import type { z } from "zod/v4";
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
} as const satisfies z.infer<ReturnType<typeof a11ySchema.required>>;

const complexity = {
	...base.complexity,
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
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	...base.nursery,

	noImportantStyles: "error",
	noNoninteractiveElementInteractions: "error",
	noUnknownAtRule: "error",
	useGoogleFontPreconnect: "error",
	useSortedClasses: "error",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	...base.performance,
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

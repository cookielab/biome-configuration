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
import { frontend } from "./frontend";

const a11y = {
	...frontend.a11y,
} as const satisfies z.infer<ReturnType<typeof a11YSchema.required>>;

const complexity = {
	...frontend.complexity,

	noUselessFragments: "error",
} as const satisfies z.infer<ReturnType<typeof complexitySchema.required>>;

const correctness = {
	...frontend.correctness,

	noChildrenProp: "error",
	noNestedComponentDefinitions: "error",
	noReactPropAssignments: "error",
	noRenderReturnValue: "error",
	noRestrictedElements: "error",
	noVoidElementsWithChildren: "error",
	useExhaustiveDependencies: "error",
	useHookAtTopLevel: "error",
	useJsxKeyInIterable: "error",
	useUniqueElementIds: "error",
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	...frontend.nursery,

	useReactFunctionComponents: "error",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	...frontend.performance,
} as const satisfies z.infer<ReturnType<typeof performanceSchema.required>>;

const security = {
	...frontend.security,

	noDangerouslySetInnerHtml: "error",
	noDangerouslySetInnerHtmlWithChildren: "error",
} as const satisfies z.infer<ReturnType<typeof securitySchema.required>>;

const style = {
	...frontend.style,

	useComponentExportOnlyModules: "error",
	useConsistentCurlyBraces: "error",
	useFragmentSyntax: "error",
	useSelfClosingElements: "error",
} as const satisfies z.infer<ReturnType<typeof styleSchema.required>>;

const suspicious = {
	...frontend.suspicious,

	noArrayIndexKey: "error",
	noCommentText: "error",
	noDuplicateJsxProps: "error",
	noSuspiciousSemicolonInJsx: "error",
} as const satisfies z.infer<ReturnType<typeof suspiciousSchema.required>>;

const react = {
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

export { react };

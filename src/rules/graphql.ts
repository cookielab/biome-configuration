import type z from "zod";
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
} as const satisfies z.infer<ReturnType<typeof a11YSchema.required>>;

const complexity = {
	...base.complexity,
} as const satisfies z.infer<ReturnType<typeof complexitySchema.required>>;

const correctness = {
	...base.correctness,

	useGraphqlNamedOperations: "error",
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	...base.nursery,
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	...base.performance,
} as const satisfies z.infer<ReturnType<typeof performanceSchema.required>>;

const security = {
	...base.security,
} as const satisfies z.infer<ReturnType<typeof securitySchema.required>>;

const style = {
	...base.style,

	useDeprecatedReason: "error",
	useGraphqlNamingConvention: "error",
} as const satisfies z.infer<ReturnType<typeof styleSchema.required>>;

const suspicious = {
	...base.suspicious,

	noDuplicateFields: "error",
} as const satisfies z.infer<ReturnType<typeof suspiciousSchema.required>>;

const graphql = {
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

export { graphql };

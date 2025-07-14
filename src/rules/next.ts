import type z from "zod";
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
import { react } from "./react";

const a11y = {
	...react.a11y,
} as const satisfies z.infer<ReturnType<typeof a11ySchema.required>>;

const complexity = {
	...react.complexity,
} as const satisfies z.infer<ReturnType<typeof complexitySchema.required>>;

const correctness = {
	...react.correctness,
} as const satisfies z.infer<ReturnType<typeof correctnessSchema.required>>;

const nursery = {
	...react.nursery,

	noUnwantedPolyfillio: "error",
} as const satisfies z.infer<ReturnType<typeof nurserySchema.required>>;

const performance = {
	...react.performance,

	noImgElement: "error",
} as const satisfies z.infer<ReturnType<typeof performanceSchema.required>>;

const security = {
	...react.security,
} as const satisfies z.infer<ReturnType<typeof securitySchema.required>>;

const style = {
	...react.style,

	noHeadElement: "error",
} as const satisfies z.infer<ReturnType<typeof styleSchema.required>>;

const suspicious = {
	...react.suspicious,

	noHeadImportInDocument: "error",
} as const satisfies z.infer<ReturnType<typeof suspiciousSchema.required>>;

const next = {
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

export { next };

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
} as const satisfies A11yRules;

const complexity = {
	...base.complexity,
} as const satisfies ComplexityRules;

const correctness = {
	...base.correctness,

	noNodejsModules: "off",
} as const satisfies CorrectnessRules;

const nursery = {
	...base.nursery,
} as const satisfies NurseryRules;

const performance = {
	...base.performance,
} as const satisfies PerformanceRules;

const security = {
	...base.security,
} as const satisfies SecurityRules;

const style = {
	...base.style,

	useNodeAssertStrict: "error",
	useNodejsImportProtocol: "error",
} as const satisfies StyleRules;

const suspicious = {
	...base.suspicious,

	noDuplicateDependencies: "error",
} as const satisfies SuspiciousRules;

const node = {
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

export { node };

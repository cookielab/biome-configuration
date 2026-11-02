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

	/**
	 * GraphQL should not enable this behavior in the first place.
	 */
	noDuplicateArgumentNames: "error",
	/**
	 * GraphQL should not enable this behavior in the first place.
	 */
	noDuplicateFieldDefinitionNames: "error",
	/**
	 * GraphQL should not enable this behavior in the first place.
	 */
	noDuplicateInputFieldNames: "error",
	/**
	 * GraphQL should not enable this behavior in the first place.
	 */
	noDuplicateVariableNames: "error",
	useGraphqlNamedOperations: "error",
	/**
	 * This rule helps with writing valid GraphQL queries.
	 */
	useLoneAnonymousOperation: "error",
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

	/**
	 * Disabling specific types at the root level is left up to the user project.
	 */
	noRootType: "off",
	/**
	 * Enforces a consistent style of descriptions.
	 */
	useConsistentGraphqlDescriptions: {
		level: "error",
		options: {
			style: "block",
		},
	},
	useDeprecatedReason: "error",
	useGraphqlNamingConvention: "error",
	/**
	 * This rule promotes consistent naming across mutations.
	 */
	useInputName: "error",
	/**
	 * This rule helps with writing maintainable GraphQL.
	 */
	useLoneExecutableDefinition: "error",
} as const satisfies StyleRules;

const suspicious = {
	...base.suspicious,

	noDuplicateFields: "error",
	/**
	 * GraphQL should not enable this behavior in the first place.
	 */
	noDuplicateGraphqlOperationName: "error",
	noEmptySource: "error",
	/**
	 * @deprecated
	 */
	useDeprecatedDate: "off",
} as const satisfies SuspiciousRules;

const graphql = {
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

export { graphql };

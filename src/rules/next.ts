import type {
	A11yRules,
	ComplexityRules,
	CorrectnessRules,
	NurseryRules,
	PerformanceRules,
	Rules,
	SecurityRules,
	StyleRules,
	SuspiciousRules,
} from "./base";
import { react } from "./react";

const a11y = {
	...react.a11y,
} as const satisfies A11yRules;

const complexity = {
	...react.complexity,
} as const satisfies ComplexityRules;

const correctness = {
	...react.correctness,

	/**
	 * Enforces the correct usage of `beforeInteractive` scripts.
	 */
	noBeforeInteractiveScriptOutsideDocument: "error",
	/**
	 * Disallows the usage of async functions for NextJS components.
	 */
	noNextAsyncClientComponent: "error",
	/**
	 * Inline script IDs are required for compiler tracking and optimization.
	 */
	useInlineScriptId: "error",
} as const satisfies CorrectnessRules;

const nursery = {
	...react.nursery,
} as const satisfies NurseryRules;

const performance = {
	...react.performance,

	noImgElement: "error",
	/**
	 * Synchronous scripts by themselves impact the performance.
	 */
	noSyncScripts: "error",
	noUnwantedPolyfillio: "error",
} as const satisfies PerformanceRules;

const security = {
	...react.security,
} as const satisfies SecurityRules;

const style = {
	...react.style,

	noHeadElement: "error",
} as const satisfies StyleRules;

const suspicious = {
	...react.suspicious,

	noHeadImportInDocument: "error",
} as const satisfies SuspiciousRules;

const next = {
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

export { next };

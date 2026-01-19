[**@cookielab.io/biome-config**](../../../README.md)

***

[@cookielab.io/biome-config](../../../modules.md) / [rules/react](../README.md) / react

# Variable: react

> `const` **react**: `object`

Defined in: [rules/react.ts:91](https://github.com/cookielab/biome-configuration/blob/main/src/rules/react.ts#L91)

## Type Declaration

### a11y

> `readonly` **a11y**: `object`

#### a11y.noAccessKey

> `readonly` **noAccessKey**: `"error"` = `"error"`

#### a11y.noAriaHiddenOnFocusable

> `readonly` **noAriaHiddenOnFocusable**: `"error"` = `"error"`

#### a11y.noAriaUnsupportedElements

> `readonly` **noAriaUnsupportedElements**: `"error"` = `"error"`

#### a11y.noAutofocus

> `readonly` **noAutofocus**: `"error"` = `"error"`

#### a11y.noDistractingElements

> `readonly` **noDistractingElements**: `"error"` = `"error"`

#### a11y.noHeaderScope

> `readonly` **noHeaderScope**: `"error"` = `"error"`

#### a11y.noInteractiveElementToNoninteractiveRole

> `readonly` **noInteractiveElementToNoninteractiveRole**: `"error"` = `"error"`

#### a11y.noLabelWithoutControl

> `readonly` **noLabelWithoutControl**: `"error"` = `"error"`

#### a11y.noNoninteractiveElementInteractions

> `readonly` **noNoninteractiveElementInteractions**: `"error"` = `"error"`

#### a11y.noNoninteractiveElementToInteractiveRole

> `readonly` **noNoninteractiveElementToInteractiveRole**: `"error"` = `"error"`

#### a11y.noNoninteractiveTabindex

> `readonly` **noNoninteractiveTabindex**: `"error"` = `"error"`

#### a11y.noPositiveTabindex

> `readonly` **noPositiveTabindex**: `"error"` = `"error"`

#### a11y.noRedundantAlt

> `readonly` **noRedundantAlt**: `"error"` = `"error"`

#### a11y.noRedundantRoles

> `readonly` **noRedundantRoles**: `"error"` = `"error"`

#### a11y.noStaticElementInteractions

> `readonly` **noStaticElementInteractions**: `"error"` = `"error"`

#### a11y.noSvgWithoutTitle

> `readonly` **noSvgWithoutTitle**: `"error"` = `"error"`

#### a11y.recommended

> `readonly` **recommended**: `false` = `false`

#### a11y.useAltText

> `readonly` **useAltText**: `"error"` = `"error"`

#### a11y.useAnchorContent

> `readonly` **useAnchorContent**: `"error"` = `"error"`

#### a11y.useAriaActivedescendantWithTabindex

> `readonly` **useAriaActivedescendantWithTabindex**: `"error"` = `"error"`

#### a11y.useAriaPropsForRole

> `readonly` **useAriaPropsForRole**: `"error"` = `"error"`

#### a11y.useAriaPropsSupportedByRole

> `readonly` **useAriaPropsSupportedByRole**: `"error"` = `"error"`

#### a11y.useButtonType

> `readonly` **useButtonType**: `"error"` = `"error"`

#### a11y.useFocusableInteractive

> `readonly` **useFocusableInteractive**: `"error"` = `"error"`

#### a11y.useGenericFontNames

> `readonly` **useGenericFontNames**: `"error"` = `"error"`

#### a11y.useHeadingContent

> `readonly` **useHeadingContent**: `"error"` = `"error"`

#### a11y.useHtmlLang

> `readonly` **useHtmlLang**: `"error"` = `"error"`

#### a11y.useIframeTitle

> `readonly` **useIframeTitle**: `"error"` = `"error"`

#### a11y.useKeyWithClickEvents

> `readonly` **useKeyWithClickEvents**: `"error"` = `"error"`

#### a11y.useKeyWithMouseEvents

> `readonly` **useKeyWithMouseEvents**: `"error"` = `"error"`

#### a11y.useMediaCaption

> `readonly` **useMediaCaption**: `"error"` = `"error"`

#### a11y.useSemanticElements

> `readonly` **useSemanticElements**: `"error"` = `"error"`

#### a11y.useValidAnchor

> `readonly` **useValidAnchor**: `"error"` = `"error"`

#### a11y.useValidAriaProps

> `readonly` **useValidAriaProps**: `"error"` = `"error"`

#### a11y.useValidAriaRole

> `readonly` **useValidAriaRole**: `"error"` = `"error"`

#### a11y.useValidAriaValues

> `readonly` **useValidAriaValues**: `"error"` = `"error"`

#### a11y.useValidAutocomplete

> `readonly` **useValidAutocomplete**: `"error"` = `"error"`

#### a11y.useValidLang

> `readonly` **useValidLang**: `"error"` = `"error"`

### complexity

> `readonly` **complexity**: `object`

#### complexity.noAdjacentSpacesInRegex

> `readonly` **noAdjacentSpacesInRegex**: `"error"` = `"error"`

#### complexity.noArguments

> `readonly` **noArguments**: `"warn"` = `"warn"`

#### complexity.noBannedTypes

> `readonly` **noBannedTypes**: `"off"` = `"off"`

No point in banning any types globally. Should be done per-project, if at all.

#### complexity.noCommaOperator

> `readonly` **noCommaOperator**: `"error"` = `"error"`

#### complexity.noEmptyTypeParameters

> `readonly` **noEmptyTypeParameters**: `"error"` = `"error"`

#### complexity.noExcessiveCognitiveComplexity

> `readonly` **noExcessiveCognitiveComplexity**: `"warn"` = `"warn"`

#### complexity.noExcessiveLinesPerFunction

> `readonly` **noExcessiveLinesPerFunction**: `"off"` = `"off"`

Does not really make sense as high line count != high complexity.

#### complexity.noExcessiveNestedTestSuites

> `readonly` **noExcessiveNestedTestSuites**: `"warn"` = `"warn"`

#### complexity.noExtraBooleanCast

> `readonly` **noExtraBooleanCast**: `"error"` = `"error"`

#### complexity.noFlatMapIdentity

> `readonly` **noFlatMapIdentity**: `"error"` = `"error"`

#### complexity.noForEach

> `readonly` **noForEach**: `"error"` = `"error"`

#### complexity.noImplicitCoercions

> `readonly` **noImplicitCoercions**: `"error"` = `"error"`

#### complexity.noImportantStyles

> `readonly` **noImportantStyles**: `"error"` = `"error"`

#### complexity.noStaticOnlyClass

> `readonly` **noStaticOnlyClass**: `"error"` = `"error"`

#### complexity.noThisInStatic

> `readonly` **noThisInStatic**: `"off"` = `"off"`

#### complexity.noUselessCatch

> `readonly` **noUselessCatch**: `"error"` = `"error"`

#### complexity.noUselessConstructor

> `readonly` **noUselessConstructor**: `"error"` = `"error"`

#### complexity.noUselessContinue

> `readonly` **noUselessContinue**: `"error"` = `"error"`

#### complexity.noUselessEmptyExport

> `readonly` **noUselessEmptyExport**: `"error"` = `"error"`

#### complexity.noUselessEscapeInRegex

> `readonly` **noUselessEscapeInRegex**: `"error"` = `"error"`

#### complexity.noUselessFragments

> `readonly` **noUselessFragments**: `"error"` = `"error"`

#### complexity.noUselessLabel

> `readonly` **noUselessLabel**: `"error"` = `"error"`

#### complexity.noUselessLoneBlockStatements

> `readonly` **noUselessLoneBlockStatements**: `"error"` = `"error"`

#### complexity.noUselessRename

> `readonly` **noUselessRename**: `"error"` = `"error"`

#### complexity.noUselessStringConcat

> `readonly` **noUselessStringConcat**: `"error"` = `"error"`

#### complexity.noUselessStringRaw

> `readonly` **noUselessStringRaw**: `"error"` = `"error"`

#### complexity.noUselessSwitchCase

> `readonly` **noUselessSwitchCase**: `"error"` = `"error"`

#### complexity.noUselessTernary

> `readonly` **noUselessTernary**: `"error"` = `"error"`

#### complexity.noUselessThisAlias

> `readonly` **noUselessThisAlias**: `"error"` = `"error"`

#### complexity.noUselessTypeConstraint

> `readonly` **noUselessTypeConstraint**: `"error"` = `"error"`

#### complexity.noUselessUndefinedInitialization

> `readonly` **noUselessUndefinedInitialization**: `"error"` = `"error"`

#### complexity.noVoid

> `readonly` **noVoid**: `"error"` = `"error"`

#### complexity.recommended

> `readonly` **recommended**: `false` = `false`

#### complexity.useArrowFunction

> `readonly` **useArrowFunction**: `"error"` = `"error"`

#### complexity.useDateNow

> `readonly` **useDateNow**: `"error"` = `"error"`

#### complexity.useFlatMap

> `readonly` **useFlatMap**: `"error"` = `"error"`

#### complexity.useIndexOf

> `readonly` **useIndexOf**: `"error"` = `"error"`

#### complexity.useLiteralKeys

> `readonly` **useLiteralKeys**: `"off"` = `"off"`

Clashes with index-based access required by a strict Typescript configuration when using records with `string` as the key type.

#### complexity.useNumericLiterals

> `readonly` **useNumericLiterals**: `"error"` = `"error"`

#### complexity.useOptionalChain

> `readonly` **useOptionalChain**: `"error"` = `"error"`

#### complexity.useRegexLiterals

> `readonly` **useRegexLiterals**: `"error"` = `"error"`

#### complexity.useSimpleNumberKeys

> `readonly` **useSimpleNumberKeys**: `"error"` = `"error"`

#### complexity.useSimplifiedLogicExpression

> `readonly` **useSimplifiedLogicExpression**: `"error"` = `"error"`

#### complexity.useWhile

> `readonly` **useWhile**: `"error"` = `"error"`

### correctness

> `readonly` **correctness**: `object`

#### correctness.noChildrenProp

> `readonly` **noChildrenProp**: `"error"` = `"error"`

#### correctness.noConstantCondition

> `readonly` **noConstantCondition**: `"error"` = `"error"`

#### correctness.noConstantMathMinMaxClamp

> `readonly` **noConstantMathMinMaxClamp**: `"error"` = `"error"`

#### correctness.noConstAssign

> `readonly` **noConstAssign**: `"error"` = `"error"`

#### correctness.noConstructorReturn

> `readonly` **noConstructorReturn**: `"error"` = `"error"`

#### correctness.noEmptyCharacterClassInRegex

> `readonly` **noEmptyCharacterClassInRegex**: `"error"` = `"error"`

#### correctness.noEmptyPattern

> `readonly` **noEmptyPattern**: `"error"` = `"error"`

#### correctness.noGlobalDirnameFilename

> `readonly` **noGlobalDirnameFilename**: `"off"` = `"off"`

Should only be enabled per-project, depending on the bundler and CommonJS/ESM usage.

Recommended level would be `error`.

#### correctness.noGlobalObjectCalls

> `readonly` **noGlobalObjectCalls**: `"error"` = `"error"`

#### correctness.noInnerDeclarations

> `readonly` **noInnerDeclarations**: `"error"` = `"error"`

#### correctness.noInvalidBuiltinInstantiation

> `readonly` **noInvalidBuiltinInstantiation**: `"error"` = `"error"`

#### correctness.noInvalidConstructorSuper

> `readonly` **noInvalidConstructorSuper**: `"error"` = `"error"`

#### correctness.noInvalidDirectionInLinearGradient

> `readonly` **noInvalidDirectionInLinearGradient**: `"error"` = `"error"`

#### correctness.noInvalidGridAreas

> `readonly` **noInvalidGridAreas**: `"error"` = `"error"`

#### correctness.noInvalidPositionAtImportRule

> `readonly` **noInvalidPositionAtImportRule**: `"error"` = `"error"`

#### correctness.noInvalidUseBeforeDeclaration

> `readonly` **noInvalidUseBeforeDeclaration**: `"error"` = `"error"`

#### correctness.noMissingVarFunction

> `readonly` **noMissingVarFunction**: `"error"` = `"error"`

#### correctness.noNestedComponentDefinitions

> `readonly` **noNestedComponentDefinitions**: `"error"` = `"error"`

#### correctness.noNodejsModules

> `readonly` **noNodejsModules**: `"error"` = `"error"`

Should only be disabled in Node projects.

#### correctness.noNonoctalDecimalEscape

> `readonly` **noNonoctalDecimalEscape**: `"error"` = `"error"`

#### correctness.noPrecisionLoss

> `readonly` **noPrecisionLoss**: `"error"` = `"error"`

#### correctness.noPrivateImports

> `readonly` **noPrivateImports**: `"error"` = `"error"`

#### correctness.noProcessGlobal

> `readonly` **noProcessGlobal**: `"error"` = `"error"`

#### correctness.noQwikUseVisibleTask

> `readonly` **noQwikUseVisibleTask**: `"off"` = `"off"`

Qwik-only rule

#### correctness.noReactPropAssignments

> `readonly` **noReactPropAssignments**: `"error"` = `"error"`

#### correctness.noRenderReturnValue

> `readonly` **noRenderReturnValue**: `"error"` = `"error"`

#### correctness.noRestrictedElements

> `readonly` **noRestrictedElements**: `"error"` = `"error"`

#### correctness.noSelfAssign

> `readonly` **noSelfAssign**: `"error"` = `"error"`

#### correctness.noSetterReturn

> `readonly` **noSetterReturn**: `"error"` = `"error"`

#### correctness.noSolidDestructuredProps

> `readonly` **noSolidDestructuredProps**: `"off"` = `"off"`

Solid-only rule.

#### correctness.noStringCaseMismatch

> `readonly` **noStringCaseMismatch**: `"error"` = `"error"`

#### correctness.noSwitchDeclarations

> `readonly` **noSwitchDeclarations**: `"error"` = `"error"`

#### correctness.noUndeclaredDependencies

> `readonly` **noUndeclaredDependencies**: `"error"` = `"error"`

#### correctness.noUndeclaredVariables

> `readonly` **noUndeclaredVariables**: `"error"` = `"error"`

#### correctness.noUnknownFunction

> `readonly` **noUnknownFunction**: `"error"` = `"error"`

#### correctness.noUnknownMediaFeatureName

> `readonly` **noUnknownMediaFeatureName**: `"error"` = `"error"`

#### correctness.noUnknownProperty

> `readonly` **noUnknownProperty**: `"error"` = `"error"`

#### correctness.noUnknownPseudoClass

> `readonly` **noUnknownPseudoClass**: `"error"` = `"error"`

#### correctness.noUnknownPseudoElement

> `readonly` **noUnknownPseudoElement**: `"error"` = `"error"`

#### correctness.noUnknownTypeSelector

> `readonly` **noUnknownTypeSelector**: `"error"` = `"error"`

#### correctness.noUnknownUnit

> `readonly` **noUnknownUnit**: `"off"` = `"off"`

Frontend-only rule.

#### correctness.noUnmatchableAnbSelector

> `readonly` **noUnmatchableAnbSelector**: `"error"` = `"error"`

#### correctness.noUnreachable

> `readonly` **noUnreachable**: `"error"` = `"error"`

#### correctness.noUnreachableSuper

> `readonly` **noUnreachableSuper**: `"error"` = `"error"`

#### correctness.noUnsafeFinally

> `readonly` **noUnsafeFinally**: `"error"` = `"error"`

#### correctness.noUnsafeOptionalChaining

> `readonly` **noUnsafeOptionalChaining**: `"error"` = `"error"`

#### correctness.noUnusedFunctionParameters

> `readonly` **noUnusedFunctionParameters**: `"error"` = `"error"`

#### correctness.noUnusedImports

> `readonly` **noUnusedImports**: `"error"` = `"error"`

#### correctness.noUnusedLabels

> `readonly` **noUnusedLabels**: `"error"` = `"error"`

#### correctness.noUnusedPrivateClassMembers

> `readonly` **noUnusedPrivateClassMembers**: `"error"` = `"error"`

#### correctness.noUnusedVariables

> `readonly` **noUnusedVariables**: `"error"` = `"error"`

#### correctness.noVoidElementsWithChildren

> `readonly` **noVoidElementsWithChildren**: `"error"` = `"error"`

#### correctness.noVoidTypeReturn

> `readonly` **noVoidTypeReturn**: `"error"` = `"error"`

#### correctness.recommended

> `readonly` **recommended**: `false` = `false`

#### correctness.useExhaustiveDependencies

> `readonly` **useExhaustiveDependencies**: `"error"` = `"error"`

#### correctness.useGraphqlNamedOperations

> `readonly` **useGraphqlNamedOperations**: `"off"` = `"off"`

GraphQL-only rule.

#### correctness.useHookAtTopLevel

> `readonly` **useHookAtTopLevel**: `"error"` = `"error"`

#### correctness.useImageSize

> `readonly` **useImageSize**: `"warn"` = `"warn"`

#### correctness.useImportExtensions

> `readonly` **useImportExtensions**: `"off"` = `"off"`

Should only be enabled per-project, depending on the bundler usage.

Recommended level would be `error`.

#### correctness.useIsNan

> `readonly` **useIsNan**: `"error"` = `"error"`

#### correctness.useJsonImportAttributes

> `readonly` **useJsonImportAttributes**: `"error"` = `"error"`

#### correctness.useJsxKeyInIterable

> `readonly` **useJsxKeyInIterable**: `"error"` = `"error"`

#### correctness.useParseIntRadix

> `readonly` **useParseIntRadix**: `"error"` = `"error"`

#### correctness.useQwikClasslist

> `readonly` **useQwikClasslist**: `"off"` = `"off"`

Qwik-only rule.

#### correctness.useSingleJsDocAsterisk

> `readonly` **useSingleJsDocAsterisk**: `"warn"` = `"warn"`

#### correctness.useUniqueElementIds

> `readonly` **useUniqueElementIds**: `"error"` = `"error"`

#### correctness.useValidForDirection

> `readonly` **useValidForDirection**: `"error"` = `"error"`

#### correctness.useValidTypeof

> `readonly` **useValidTypeof**: `"error"` = `"error"`

#### correctness.useYield

> `readonly` **useYield**: `"error"` = `"error"`

### nursery

> `readonly` **nursery**: `object`

#### nursery.noAmbiguousAnchorText

> `readonly` **noAmbiguousAnchorText**: `"warn"` = `"warn"`

This rule promotes  more accessible interfaces. However, turning this into an error would be too harsh as a lot of links would not meet the necessary criteria to pass.
Leaving the level to `warn` keeps the balance between being helpful and annoying/fighting with designers.

#### nursery.noBeforeInteractiveScriptOutsideDocument

> `readonly` **noBeforeInteractiveScriptOutsideDocument**: `"off"` = `"off"`

NextJS-only rule.

#### nursery.noContinue

> `readonly` **noContinue**: `"off"` = `"off"`

`continue` helps to avoid nesting inside loop bodies.

#### nursery.noDeprecatedImports

> `readonly` **noDeprecatedImports**: `"warn"` = `"warn"`

#### nursery.noDuplicateDependencies

> `readonly` **noDuplicateDependencies**: `"off"` = `"off"`

NodeJS-only rule.

#### nursery.noDuplicatedSpreadProps

> `readonly` **noDuplicatedSpreadProps**: `"error"` = `"error"`

Prevents unnecessary computations as spreading props twice makes React go crazy.

#### nursery.noEmptySource

> `readonly` **noEmptySource**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.noEqualsToNull

> `readonly` **noEqualsToNull**: `"off"` = `"off"`

Keeping this `off` as this approach is useful when working with libraries and projects that use `null` and `undefined` interchangeably.

#### nursery.noFloatingPromises

> `readonly` **noFloatingPromises**: `"error"` = `"error"`

#### nursery.noForIn

> `readonly` **noForIn**: `"warn"` = `"warn"`

`for-in` loops are usually just a typo when trying to remember how `for-of` is written.
 As the Biome documentation mentions, `for-of`, plain `for` loop, or even `array.entries` are the better and more explicit options.

#### nursery.noImportCycles

> `readonly` **noImportCycles**: `"error"` = `"error"`

#### nursery.noIncrementDecrement

> `readonly` **noIncrementDecrement**: `object`

This rule should be useful for the avoidance of incorrectly auto-inserted semicolons.
Although, the usage in for-loops makes sense and is thus allowed.

#### nursery.noIncrementDecrement.level

> `readonly` **level**: `"error"` = `"error"`

#### nursery.noIncrementDecrement.options

> `readonly` **options**: `object`

#### nursery.noIncrementDecrement.options.allowForLoopAfterthoughts

> `readonly` **allowForLoopAfterthoughts**: `true` = `true`

#### nursery.noJsxLiterals

> `readonly` **noJsxLiterals**: `"warn"` = `"warn"`

Should only be a recommendation as not every React project will be using translations.

#### nursery.noJsxPropsBind

> `readonly` **noJsxPropsBind**: `"error"` = `"error"`

Using `bind` is treated by React as a new function on each render.

#### nursery.noLeakedRender

> `readonly` **noLeakedRender**: `"error"` = `"error"`

Prevents unintended values from being rendered. For example the `false` case when using `&&`.

#### nursery.noMisusedPromises

> `readonly` **noMisusedPromises**: `"error"` = `"error"`

#### nursery.noMultiAssign

> `readonly` **noMultiAssign**: `"error"` = `"error"`

Keeping the assignments more explicit. There are no performance gains, as the code is bundled & minified anyway.
Keeping the assignments separate makes them more readable.

#### nursery.noMultiStr

> `readonly` **noMultiStr**: `"error"` = `"error"`

Using strings with ``` is a better approach.

#### nursery.noNextAsyncClientComponent

> `readonly` **noNextAsyncClientComponent**: `"off"` = `"off"`

NextJS-only rule.

#### nursery.noParametersOnlyUsedInRecursion

> `readonly` **noParametersOnlyUsedInRecursion**: `"off"` = `"off"`

Just making sure there are no unused parameters in recursive functions.

#### nursery.noProto

> `readonly` **noProto**: `"error"` = `"error"`

This approach to accessing object's prototype is deprecated since 2009.

#### nursery.noReactForwardRef

> `readonly` **noReactForwardRef**: `"off"` = `"off"`

React-only rule.

#### nursery.noReturnAssign

> `readonly` **noReturnAssign**: `"error"` = `"error"`

There is no need to assign anything when returning.

#### nursery.noScriptUrl

> `readonly` **noScriptUrl**: `"error"` = `"error"`

This rule should help with preventing any XSS vulnerabilities.

#### nursery.noShadow

> `readonly` **noShadow**: `"error"` = `"error"`

#### nursery.noSyncScripts

> `readonly` **noSyncScripts**: `"off"` = `"off"`

NextJS-only rule.

#### nursery.noTernary

> `readonly` **noTernary**: `"off"` = `"off"`

Ternaries are a superior way of assigning to variables.
They only become hard to read once they become nested or use long conditions.

#### nursery.noUndeclaredEnvVars

> `readonly` **noUndeclaredEnvVars**: `"off"` = `"off"`

Turborepo-only rule.

#### nursery.noUnknownAttribute

> `readonly` **noUnknownAttribute**: `"warn"` = `"warn"`

#### nursery.noUnnecessaryConditions

> `readonly` **noUnnecessaryConditions**: `"warn"` = `"warn"`

#### nursery.noUnresolvedImports

> `readonly` **noUnresolvedImports**: `"off"` = `"off"`

Produces too many false-positives for now.

#### nursery.noUnusedExpressions

> `readonly` **noUnusedExpressions**: `"error"` = `"error"`

#### nursery.noUselessCatchBinding

> `readonly` **noUselessCatchBinding**: `"error"` = `"error"`

#### nursery.noUselessUndefined

> `readonly` **noUselessUndefined**: `"error"` = `"error"`

#### nursery.noVueDataObjectDeclaration

> `readonly` **noVueDataObjectDeclaration**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueDuplicateKeys

> `readonly` **noVueDuplicateKeys**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueReservedKeys

> `readonly` **noVueReservedKeys**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueReservedProps

> `readonly` **noVueReservedProps**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueSetupPropsReactivityLoss

> `readonly` **noVueSetupPropsReactivityLoss**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueVIfWithVFor

> `readonly` **noVueVIfWithVFor**: `"off"` = `"off"`

Vue-only rule.

#### nursery.recommended

> `readonly` **recommended**: `false` = `false`

#### nursery.useArraySortCompare

> `readonly` **useArraySortCompare**: `"error"` = `"error"`

Enforces all sorting operations to be explicitly defined.

#### nursery.useAwaitThenable

> `readonly` **useAwaitThenable**: `"error"` = `"error"`

There is no need to await non-Promise values.

#### nursery.useConsistentArrowReturn

> `readonly` **useConsistentArrowReturn**: `"error"` = `"error"`

#### nursery.useConsistentGraphqlDescriptions

> `readonly` **useConsistentGraphqlDescriptions**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useDeprecatedDate

> `readonly` **useDeprecatedDate**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useDestructuring

> `readonly` **useDestructuring**: `"info"` = `"info"`

Destructuring may be more readable in many cases. However, the distinction is not simply black-and-white and is left up to the code reviewer.
The level is left at `info` to at least let the user know that the option exists.

#### nursery.useExhaustiveSwitchCases

> `readonly` **useExhaustiveSwitchCases**: `"error"` = `"error"`

#### nursery.useExplicitType

> `readonly` **useExplicitType**: `"off"` = `"off"`

The rule is currently missing the option to make the following usage valid:

##### Example

```typescript
const returnsString = (): string => "value";

const isDefinitelyString = returnsString(); // isDefinitelyString would have to have it's typed explicitly written out
```

#### nursery.useFind

> `readonly` **useFind**: `"error"` = `"error"`

Much more readable approach then indexing into a possibly empty array.

#### nursery.useMaxParams

> `readonly` **useMaxParams**: `"error"` = `"error"`

#### nursery.useQwikMethodUsage

> `readonly` **useQwikMethodUsage**: `"off"` = `"off"`

Qwik-only rule.

#### nursery.useQwikValidLexicalScope

> `readonly` **useQwikValidLexicalScope**: `"off"` = `"off"`

Qwik-only rule.

#### nursery.useRegexpExec

> `readonly` **useRegexpExec**: `"error"` = `"error"`

`RegExp.exec` is slightly faster than `String.match`.

#### nursery.useRequiredScripts

> `readonly` **useRequiredScripts**: `"off"` = `"off"`

This rule should only be enabled in a specific project as every project uses different required scripts.

#### nursery.useSortedClasses

> `readonly` **useSortedClasses**: `"error"` = `"error"`

#### nursery.useSpread

> `readonly` **useSpread**: `"error"` = `"error"`

Spread syntax is more readable than using `Object.apply`.

#### nursery.useUniqueArgumentNames

> `readonly` **useUniqueArgumentNames**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useUniqueFieldDefinitionNames

> `readonly` **useUniqueFieldDefinitionNames**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useUniqueGraphqlOperationName

> `readonly` **useUniqueGraphqlOperationName**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useUniqueInputFieldNames

> `readonly` **useUniqueInputFieldNames**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useUniqueVariableNames

> `readonly` **useUniqueVariableNames**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.useVueConsistentDefinePropsDeclaration

> `readonly` **useVueConsistentDefinePropsDeclaration**: `"off"` = `"off"`

#### nursery.useVueConsistentVBindStyle

> `readonly` **useVueConsistentVBindStyle**: `"off"` = `"off"`

#### nursery.useVueConsistentVOnStyle

> `readonly` **useVueConsistentVOnStyle**: `"off"` = `"off"`

#### nursery.useVueDefineMacrosOrder

> `readonly` **useVueDefineMacrosOrder**: `"off"` = `"off"`

Vue-only rule.

#### nursery.useVueHyphenatedAttributes

> `readonly` **useVueHyphenatedAttributes**: `"off"` = `"off"`

#### nursery.useVueMultiWordComponentNames

> `readonly` **useVueMultiWordComponentNames**: `"off"` = `"off"`

Vue-only rule.

#### nursery.useVueValidTemplateRoot

> `readonly` **useVueValidTemplateRoot**: `"off"` = `"off"`

#### nursery.useVueValidVBind

> `readonly` **useVueValidVBind**: `"off"` = `"off"`

#### nursery.useVueValidVCloak

> `readonly` **useVueValidVCloak**: `"off"` = `"off"`

#### nursery.useVueValidVElse

> `readonly` **useVueValidVElse**: `"off"` = `"off"`

#### nursery.useVueValidVElseIf

> `readonly` **useVueValidVElseIf**: `"off"` = `"off"`

#### nursery.useVueValidVHtml

> `readonly` **useVueValidVHtml**: `"off"` = `"off"`

#### nursery.useVueValidVIf

> `readonly` **useVueValidVIf**: `"off"` = `"off"`

#### nursery.useVueValidVOn

> `readonly` **useVueValidVOn**: `"off"` = `"off"`

#### nursery.useVueValidVOnce

> `readonly` **useVueValidVOnce**: `"off"` = `"off"`

#### nursery.useVueValidVPre

> `readonly` **useVueValidVPre**: `"off"` = `"off"`

#### nursery.useVueValidVText

> `readonly` **useVueValidVText**: `"off"` = `"off"`

#### nursery.useVueVapor

> `readonly` **useVueVapor**: `"off"` = `"off"`

#### nursery.useVueVForKey

> `readonly` **useVueVForKey**: `"off"` = `"off"`

### performance

> `readonly` **performance**: `object`

#### performance.noAccumulatingSpread

> `readonly` **noAccumulatingSpread**: `"error"` = `"error"`

#### performance.noAwaitInLoops

> `readonly` **noAwaitInLoops**: `"warn"` = `"warn"`

#### performance.noBarrelFile

> `readonly` **noBarrelFile**: `"off"` = `"off"`

Should only be enabled per-project.

Recommended level would be `error`.

#### performance.noDelete

> `readonly` **noDelete**: `"error"` = `"error"`

#### performance.noDynamicNamespaceImportAccess

> `readonly` **noDynamicNamespaceImportAccess**: `"error"` = `"error"`

#### performance.noImgElement

> `readonly` **noImgElement**: `"off"` = `"off"`

NextJS-only rule.

#### performance.noNamespaceImport

> `readonly` **noNamespaceImport**: `"error"` = `"error"`

#### performance.noReExportAll

> `readonly` **noReExportAll**: `"error"` = `"error"`

#### performance.noUnwantedPolyfillio

> `readonly` **noUnwantedPolyfillio**: `"off"` = `"off"`

NextJS-only rule.

#### performance.recommended

> `readonly` **recommended**: `false` = `false`

#### performance.useGoogleFontPreconnect

> `readonly` **useGoogleFontPreconnect**: `"error"` = `"error"`

#### performance.useSolidForComponent

> `readonly` **useSolidForComponent**: `"off"` = `"off"`

Solid-only rule.

#### performance.useTopLevelRegex

> `readonly` **useTopLevelRegex**: `"error"` = `"error"`

### recommended

> `readonly` **recommended**: `false` = `false`

### security

> `readonly` **security**: `object`

#### security.noBlankTarget

> `readonly` **noBlankTarget**: `"error"` = `"error"`

#### security.noDangerouslySetInnerHtml

> `readonly` **noDangerouslySetInnerHtml**: `"error"` = `"error"`

#### security.noDangerouslySetInnerHtmlWithChildren

> `readonly` **noDangerouslySetInnerHtmlWithChildren**: `"error"` = `"error"`

#### security.noGlobalEval

> `readonly` **noGlobalEval**: `"error"` = `"error"`

#### security.noSecrets

> `readonly` **noSecrets**: `"off"` = `"off"`

Produces too many false-positives.

#### security.recommended

> `readonly` **recommended**: `false` = `false`

### style

> `readonly` **style**: `object`

#### style.noCommonJs

> `readonly` **noCommonJs**: `"off"` = `"off"`

Should only be enabled in ESM projects or projects using bundlers.

Recommended level would be `error`.

#### style.noDefaultExport

> `readonly` **noDefaultExport**: `"error"` = `"error"`

#### style.noDescendingSpecificity

> `readonly` **noDescendingSpecificity**: `"error"` = `"error"`

#### style.noDoneCallback

> `readonly` **noDoneCallback**: `"error"` = `"error"`

#### style.noEnum

> `readonly` **noEnum**: `"error"` = `"error"`

#### style.noExportedImports

> `readonly` **noExportedImports**: `"error"` = `"error"`

#### style.noHeadElement

> `readonly` **noHeadElement**: `"off"` = `"off"`

NextJS-only rule.

#### style.noImplicitBoolean

> `readonly` **noImplicitBoolean**: `"error"` = `"error"`

#### style.noInferrableTypes

> `readonly` **noInferrableTypes**: `"error"` = `"error"`

#### style.noMagicNumbers

> `readonly` **noMagicNumbers**: `"warn"` = `"warn"`

#### style.noNamespace

> `readonly` **noNamespace**: `"error"` = `"error"`

#### style.noNegationElse

> `readonly` **noNegationElse**: `"error"` = `"error"`

#### style.noNestedTernary

> `readonly` **noNestedTernary**: `"error"` = `"error"`

#### style.noNonNullAssertion

> `readonly` **noNonNullAssertion**: `"error"` = `"error"`

#### style.noParameterAssign

> `readonly` **noParameterAssign**: `"error"` = `"error"`

#### style.noParameterProperties

> `readonly` **noParameterProperties**: `"error"` = `"error"`

#### style.noProcessEnv

> `readonly` **noProcessEnv**: `"error"` = `"error"`

#### style.noRestrictedGlobals

> `readonly` **noRestrictedGlobals**: `"off"` = `"off"`

No point in banning any globals globally. Should be done per-project, if at all.

#### style.noRestrictedImports

> `readonly` **noRestrictedImports**: `"off"` = `"off"`

No point in banning any imports globally. Should be done per-project, if at all.

#### style.noRestrictedTypes

> `readonly` **noRestrictedTypes**: `"off"` = `"off"`

No point in banning any types globally. Should be done per-project, if at all.

#### style.noShoutyConstants

> `readonly` **noShoutyConstants**: `"off"` = `"off"`

Shouting is not a crime.

#### style.noSubstr

> `readonly` **noSubstr**: `"error"` = `"error"`

#### style.noUnusedTemplateLiteral

> `readonly` **noUnusedTemplateLiteral**: `"error"` = `"error"`

#### style.noUselessElse

> `readonly` **noUselessElse**: `"error"` = `"error"`

#### style.noValueAtRule

> `readonly` **noValueAtRule**: `"error"` = `"error"`

#### style.noYodaExpression

> `readonly` **noYodaExpression**: `"error"` = `"error"`

#### style.recommended

> `readonly` **recommended**: `false` = `false`

#### style.useArrayLiterals

> `readonly` **useArrayLiterals**: `"error"` = `"error"`

#### style.useAsConstAssertion

> `readonly` **useAsConstAssertion**: `"error"` = `"error"`

#### style.useAtIndex

> `readonly` **useAtIndex**: `"error"` = `"error"`

#### style.useBlockStatements

> `readonly` **useBlockStatements**: `"error"` = `"error"`

#### style.useCollapsedElseIf

> `readonly` **useCollapsedElseIf**: `"error"` = `"error"`

#### style.useCollapsedIf

> `readonly` **useCollapsedIf**: `"error"` = `"error"`

#### style.useComponentExportOnlyModules

> `readonly` **useComponentExportOnlyModules**: `"error"` = `"error"`

#### style.useConsistentArrayType

> `readonly` **useConsistentArrayType**: `object`

#### style.useConsistentArrayType.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentArrayType.options

> `readonly` **options**: `object`

#### style.useConsistentArrayType.options.syntax

> `readonly` **syntax**: `"shorthand"` = `"shorthand"`

#### style.useConsistentBuiltinInstantiation

> `readonly` **useConsistentBuiltinInstantiation**: `"error"` = `"error"`

#### style.useConsistentCurlyBraces

> `readonly` **useConsistentCurlyBraces**: `"error"` = `"error"`

#### style.useConsistentMemberAccessibility

> `readonly` **useConsistentMemberAccessibility**: `object`

#### style.useConsistentMemberAccessibility.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentMemberAccessibility.options

> `readonly` **options**: `object`

#### style.useConsistentMemberAccessibility.options.accessibility

> `readonly` **accessibility**: `"explicit"` = `"explicit"`

#### style.useConsistentObjectDefinitions

> `readonly` **useConsistentObjectDefinitions**: `object`

#### style.useConsistentObjectDefinitions.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentObjectDefinitions.options

> `readonly` **options**: `object`

#### style.useConsistentObjectDefinitions.options.syntax

> `readonly` **syntax**: `"explicit"` = `"explicit"`

#### style.useConsistentTypeDefinitions

> `readonly` **useConsistentTypeDefinitions**: `object`

`type` and `interface` are pretty much equivalent. However, to prevent accidental declaration merging of interfaces with the same name and to enable easy declaration of unions, mapped types or
conditional types, `type` is the recommended approach.

This rule should be disabled only for cases when needing to use `class ClassName implements Interface`.

For in-depth explanation see https://www.totaltypescript.com/type-vs-interface-which-should-you-use

#### style.useConsistentTypeDefinitions.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentTypeDefinitions.options

> `readonly` **options**: `object`

#### style.useConsistentTypeDefinitions.options.style

> `readonly` **style**: `"type"` = `"type"`

#### style.useConst

> `readonly` **useConst**: `"error"` = `"error"`

#### style.useDefaultParameterLast

> `readonly` **useDefaultParameterLast**: `"error"` = `"error"`

#### style.useDefaultSwitchClause

> `readonly` **useDefaultSwitchClause**: `"warn"` = `"warn"`

Only `warn` as to not clash with `nursery/useExhaustiveSwitchCases`.

#### style.useDeprecatedReason

> `readonly` **useDeprecatedReason**: `"off"` = `"off"`

GraphQL-only rule.

#### style.useEnumInitializers

> `readonly` **useEnumInitializers**: `"off"` = `"off"`

Enums are forbidden.

#### style.useExplicitLengthCheck

> `readonly` **useExplicitLengthCheck**: `"error"` = `"error"`

#### style.useExponentiationOperator

> `readonly` **useExponentiationOperator**: `"error"` = `"error"`

#### style.useExportsLast

> `readonly` **useExportsLast**: `"error"` = `"error"`

#### style.useExportType

> `readonly` **useExportType**: `"error"` = `"error"`

#### style.useFilenamingConvention

> `readonly` **useFilenamingConvention**: `"off"` = `"off"`

Should only be enabled per-project.

#### style.useForOf

> `readonly` **useForOf**: `"error"` = `"error"`

#### style.useFragmentSyntax

> `readonly` **useFragmentSyntax**: `"error"` = `"error"`

#### style.useGraphqlNamingConvention

> `readonly` **useGraphqlNamingConvention**: `"off"` = `"off"`

GraphQL-only rule.

#### style.useGroupedAccessorPairs

> `readonly` **useGroupedAccessorPairs**: `"error"` = `"error"`

#### style.useImportType

> `readonly` **useImportType**: `"error"` = `"error"`

#### style.useLiteralEnumMembers

> `readonly` **useLiteralEnumMembers**: `"off"` = `"off"`

Enums are forbidden.

#### style.useNamingConvention

> `readonly` **useNamingConvention**: `"warn"` = `"warn"`

#### style.useNodeAssertStrict

> `readonly` **useNodeAssertStrict**: `"off"` = `"off"`

Node-only rule.

#### style.useNodejsImportProtocol

> `readonly` **useNodejsImportProtocol**: `"off"` = `"off"`

Node-only rule.

#### style.useNumberNamespace

> `readonly` **useNumberNamespace**: `"error"` = `"error"`

#### style.useNumericSeparators

> `readonly` **useNumericSeparators**: `"error"` = `"error"`

#### style.useObjectSpread

> `readonly` **useObjectSpread**: `"error"` = `"error"`

#### style.useReactFunctionComponents

> `readonly` **useReactFunctionComponents**: `"error"` = `"error"`

#### style.useReadonlyClassProperties

> `readonly` **useReadonlyClassProperties**: `"warn"` = `"warn"`

#### style.useSelfClosingElements

> `readonly` **useSelfClosingElements**: `"error"` = `"error"`

#### style.useShorthandAssign

> `readonly` **useShorthandAssign**: `"error"` = `"error"`

#### style.useShorthandFunctionType

> `readonly` **useShorthandFunctionType**: `"error"` = `"error"`

#### style.useSingleVarDeclarator

> `readonly` **useSingleVarDeclarator**: `"error"` = `"error"`

#### style.useSymbolDescription

> `readonly` **useSymbolDescription**: `"error"` = `"error"`

#### style.useTemplate

> `readonly` **useTemplate**: `"error"` = `"error"`

#### style.useThrowNewError

> `readonly` **useThrowNewError**: `"error"` = `"error"`

#### style.useThrowOnlyError

> `readonly` **useThrowOnlyError**: `"error"` = `"error"`

#### style.useTrimStartEnd

> `readonly` **useTrimStartEnd**: `"error"` = `"error"`

#### style.useUnifiedTypeSignatures

> `readonly` **useUnifiedTypeSignatures**: `"warn"` = `"warn"`

### suspicious

> `readonly` **suspicious**: `object`

#### suspicious.noAlert

> `readonly` **noAlert**: `"error"` = `"error"`

#### suspicious.noApproximativeNumericConstant

> `readonly` **noApproximativeNumericConstant**: `"error"` = `"error"`

#### suspicious.noArrayIndexKey

> `readonly` **noArrayIndexKey**: `"error"` = `"error"`

#### suspicious.noAssignInExpressions

> `readonly` **noAssignInExpressions**: `"error"` = `"error"`

#### suspicious.noAsyncPromiseExecutor

> `readonly` **noAsyncPromiseExecutor**: `"error"` = `"error"`

#### suspicious.noBiomeFirstException

> `readonly` **noBiomeFirstException**: `"error"` = `"error"`

#### suspicious.noBitwiseOperators

> `readonly` **noBitwiseOperators**: `"error"` = `"error"`

#### suspicious.noCatchAssign

> `readonly` **noCatchAssign**: `"error"` = `"error"`

#### suspicious.noClassAssign

> `readonly` **noClassAssign**: `"error"` = `"error"`

#### suspicious.noCommentText

> `readonly` **noCommentText**: `"error"` = `"error"`

#### suspicious.noCompareNegZero

> `readonly` **noCompareNegZero**: `"error"` = `"error"`

#### suspicious.noConfusingLabels

> `readonly` **noConfusingLabels**: `"error"` = `"error"`

#### suspicious.noConfusingVoidType

> `readonly` **noConfusingVoidType**: `"error"` = `"error"`

#### suspicious.noConsole

> `readonly` **noConsole**: `"error"` = `"error"`

#### suspicious.noConstantBinaryExpressions

> `readonly` **noConstantBinaryExpressions**: `"error"` = `"error"`

#### suspicious.noConstEnum

> `readonly` **noConstEnum**: `"error"` = `"error"`

#### suspicious.noControlCharactersInRegex

> `readonly` **noControlCharactersInRegex**: `"error"` = `"error"`

#### suspicious.noDebugger

> `readonly` **noDebugger**: `"error"` = `"error"`

#### suspicious.noDocumentCookie

> `readonly` **noDocumentCookie**: `"error"` = `"error"`

#### suspicious.noDocumentImportInPage

> `readonly` **noDocumentImportInPage**: `"error"` = `"error"`

#### suspicious.noDoubleEquals

> `readonly` **noDoubleEquals**: `"error"` = `"error"`

#### suspicious.noDuplicateAtImportRules

> `readonly` **noDuplicateAtImportRules**: `"error"` = `"error"`

#### suspicious.noDuplicateCase

> `readonly` **noDuplicateCase**: `"error"` = `"error"`

#### suspicious.noDuplicateClassMembers

> `readonly` **noDuplicateClassMembers**: `"error"` = `"error"`

#### suspicious.noDuplicateCustomProperties

> `readonly` **noDuplicateCustomProperties**: `"error"` = `"error"`

#### suspicious.noDuplicateElseIf

> `readonly` **noDuplicateElseIf**: `"error"` = `"error"`

#### suspicious.noDuplicateFields

> `readonly` **noDuplicateFields**: `"off"` = `"off"`

GraphQL-only rule.

#### suspicious.noDuplicateFontNames

> `readonly` **noDuplicateFontNames**: `"error"` = `"error"`

#### suspicious.noDuplicateJsxProps

> `readonly` **noDuplicateJsxProps**: `"error"` = `"error"`

#### suspicious.noDuplicateObjectKeys

> `readonly` **noDuplicateObjectKeys**: `"error"` = `"error"`

#### suspicious.noDuplicateParameters

> `readonly` **noDuplicateParameters**: `"error"` = `"error"`

#### suspicious.noDuplicateProperties

> `readonly` **noDuplicateProperties**: `"error"` = `"error"`

#### suspicious.noDuplicateSelectorsKeyframeBlock

> `readonly` **noDuplicateSelectorsKeyframeBlock**: `"off"` = `"off"`

Frontend-only rule.

#### suspicious.noDuplicateTestHooks

> `readonly` **noDuplicateTestHooks**: `"error"` = `"error"`

#### suspicious.noEmptyBlock

> `readonly` **noEmptyBlock**: `"error"` = `"error"`

#### suspicious.noEmptyBlockStatements

> `readonly` **noEmptyBlockStatements**: `"error"` = `"error"`

#### suspicious.noEmptyInterface

> `readonly` **noEmptyInterface**: `"error"` = `"error"`

#### suspicious.noEvolvingTypes

> `readonly` **noEvolvingTypes**: `"error"` = `"error"`

#### suspicious.noExplicitAny

> `readonly` **noExplicitAny**: `"error"` = `"error"`

#### suspicious.noExportsInTest

> `readonly` **noExportsInTest**: `"error"` = `"error"`

#### suspicious.noExtraNonNullAssertion

> `readonly` **noExtraNonNullAssertion**: `"error"` = `"error"`

#### suspicious.noFallthroughSwitchClause

> `readonly` **noFallthroughSwitchClause**: `"error"` = `"error"`

#### suspicious.noFocusedTests

> `readonly` **noFocusedTests**: `"error"` = `"error"`

#### suspicious.noFunctionAssign

> `readonly` **noFunctionAssign**: `"error"` = `"error"`

#### suspicious.noGlobalAssign

> `readonly` **noGlobalAssign**: `"error"` = `"error"`

#### suspicious.noGlobalIsFinite

> `readonly` **noGlobalIsFinite**: `"error"` = `"error"`

#### suspicious.noGlobalIsNan

> `readonly` **noGlobalIsNan**: `"error"` = `"error"`

#### suspicious.noHeadImportInDocument

> `readonly` **noHeadImportInDocument**: `"off"` = `"off"`

NextJS-only rule.

#### suspicious.noImplicitAnyLet

> `readonly` **noImplicitAnyLet**: `"error"` = `"error"`

#### suspicious.noImportantInKeyframe

> `readonly` **noImportantInKeyframe**: `"error"` = `"error"`

#### suspicious.noImportAssign

> `readonly` **noImportAssign**: `"error"` = `"error"`

#### suspicious.noIrregularWhitespace

> `readonly` **noIrregularWhitespace**: `"error"` = `"error"`

#### suspicious.noLabelVar

> `readonly` **noLabelVar**: `"error"` = `"error"`

#### suspicious.noMisleadingCharacterClass

> `readonly` **noMisleadingCharacterClass**: `"error"` = `"error"`

#### suspicious.noMisleadingInstantiator

> `readonly` **noMisleadingInstantiator**: `"error"` = `"error"`

#### suspicious.noMisplacedAssertion

> `readonly` **noMisplacedAssertion**: `"error"` = `"error"`

#### suspicious.noMisrefactoredShorthandAssign

> `readonly` **noMisrefactoredShorthandAssign**: `"error"` = `"error"`

#### suspicious.noNonNullAssertedOptionalChain

> `readonly` **noNonNullAssertedOptionalChain**: `"error"` = `"error"`

#### suspicious.noOctalEscape

> `readonly` **noOctalEscape**: `"error"` = `"error"`

#### suspicious.noPrototypeBuiltins

> `readonly` **noPrototypeBuiltins**: `"error"` = `"error"`

#### suspicious.noQuickfixBiome

> `readonly` **noQuickfixBiome**: `"off"` = `"off"`

Disables "quickfix" actions from being defined in Biome configuration. Left up to consumers to enable/disable.

#### suspicious.noReactSpecificProps

> `readonly` **noReactSpecificProps**: `"off"` = `"off"`

Solid and qwik rule only.

#### suspicious.noRedeclare

> `readonly` **noRedeclare**: `"error"` = `"error"`

#### suspicious.noRedundantUseStrict

> `readonly` **noRedundantUseStrict**: `"error"` = `"error"`

#### suspicious.noSelfCompare

> `readonly` **noSelfCompare**: `"error"` = `"error"`

#### suspicious.noShadowRestrictedNames

> `readonly` **noShadowRestrictedNames**: `"error"` = `"error"`

#### suspicious.noShorthandPropertyOverrides

> `readonly` **noShorthandPropertyOverrides**: `"error"` = `"error"`

#### suspicious.noSkippedTests

> `readonly` **noSkippedTests**: `"error"` = `"error"`

#### suspicious.noSparseArray

> `readonly` **noSparseArray**: `"error"` = `"error"`

#### suspicious.noSuspiciousSemicolonInJsx

> `readonly` **noSuspiciousSemicolonInJsx**: `"error"` = `"error"`

#### suspicious.noTemplateCurlyInString

> `readonly` **noTemplateCurlyInString**: `"error"` = `"error"`

#### suspicious.noThenProperty

> `readonly` **noThenProperty**: `"error"` = `"error"`

#### suspicious.noTsIgnore

> `readonly` **noTsIgnore**: `"error"` = `"error"`

#### suspicious.noUnassignedVariables

> `readonly` **noUnassignedVariables**: `"error"` = `"error"`

#### suspicious.noUnknownAtRules

> `readonly` **noUnknownAtRules**: `"error"` = `"error"`

#### suspicious.noUnsafeDeclarationMerging

> `readonly` **noUnsafeDeclarationMerging**: `"error"` = `"error"`

#### suspicious.noUnsafeNegation

> `readonly` **noUnsafeNegation**: `"error"` = `"error"`

#### suspicious.noUselessEscapeInString

> `readonly` **noUselessEscapeInString**: `"error"` = `"error"`

#### suspicious.noUselessRegexBackrefs

> `readonly` **noUselessRegexBackrefs**: `"error"` = `"error"`

#### suspicious.noVar

> `readonly` **noVar**: `"error"` = `"error"`

#### suspicious.noWith

> `readonly` **noWith**: `"error"` = `"error"`

#### suspicious.recommended

> `readonly` **recommended**: `false` = `false`

#### suspicious.useAdjacentOverloadSignatures

> `readonly` **useAdjacentOverloadSignatures**: `"error"` = `"error"`

#### suspicious.useAwait

> `readonly` **useAwait**: `"error"` = `"error"`

#### suspicious.useBiomeIgnoreFolder

> `readonly` **useBiomeIgnoreFolder**: `"error"` = `"error"`

#### suspicious.useDefaultSwitchClauseLast

> `readonly` **useDefaultSwitchClauseLast**: `"error"` = `"error"`

#### suspicious.useErrorMessage

> `readonly` **useErrorMessage**: `"error"` = `"error"`

#### suspicious.useGetterReturn

> `readonly` **useGetterReturn**: `"error"` = `"error"`

#### suspicious.useGoogleFontDisplay

> `readonly` **useGoogleFontDisplay**: `"error"` = `"error"`

#### suspicious.useGuardForIn

> `readonly` **useGuardForIn**: `"warn"` = `"warn"`

#### suspicious.useIsArray

> `readonly` **useIsArray**: `"error"` = `"error"`

#### suspicious.useIterableCallbackReturn

> `readonly` **useIterableCallbackReturn**: `"error"` = `"error"`

#### suspicious.useNamespaceKeyword

> `readonly` **useNamespaceKeyword**: `"error"` = `"error"`

#### suspicious.useNumberToFixedDigitsArgument

> `readonly` **useNumberToFixedDigitsArgument**: `"error"` = `"error"`

#### suspicious.useStaticResponseMethods

> `readonly` **useStaticResponseMethods**: `"warn"` = `"warn"`

#### suspicious.useStrictMode

> `readonly` **useStrictMode**: `"error"` = `"error"`

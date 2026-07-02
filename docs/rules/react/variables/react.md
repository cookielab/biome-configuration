[**@cookielab.io/biome-config**](../../../README.md)

***

[@cookielab.io/biome-config](../../../modules.md) / [rules/react](../README.md) / react

# Variable: react

> `const` **react**: `object`

Defined in: [rules/react.ts:140](https://github.com/cookielab/biome-configuration/blob/main/src/rules/react.ts#L140)

## Type Declaration

### a11y

> `readonly` **a11y**: `object`

#### a11y.noAccessKey

> `readonly` **noAccessKey**: `"error"` = `"error"`

#### a11y.noAmbiguousAnchorText

> `readonly` **noAmbiguousAnchorText**: `"error"` = `"error"`

This rule promotes  more accessible interfaces.

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

#### a11y.preset

> `readonly` **preset**: `"none"` = `"none"`

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

#### complexity.noDivRegex

> `readonly` **noDivRegex**: `"error"` = `"error"`

Enforces a more readable regular expression.

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

#### complexity.noRedundantDefaultExport

> `readonly` **noRedundantDefaultExport**: `"error"` = `"error"`

Prevents re-exporting the same value as a named export and a default export as well.

#### complexity.noStaticOnlyClass

> `readonly` **noStaticOnlyClass**: `"error"` = `"error"`

#### complexity.noThisInStatic

> `readonly` **noThisInStatic**: `"off"` = `"off"`

#### complexity.noUselessCatch

> `readonly` **noUselessCatch**: `"error"` = `"error"`

#### complexity.noUselessCatchBinding

> `readonly` **noUselessCatchBinding**: `"error"` = `"error"`

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

#### complexity.noUselessReturn

> `readonly` **noUselessReturn**: `"error"` = `"error"`

This rule is meant to prevent using a plain `return;` at the end of a function.

Other usage, such as early returns, should not be affected.

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

#### complexity.noUselessUndefined

> `readonly` **noUselessUndefined**: `"off"` = `"off"`

Many cases, where this rule would apply, go against the explicit nature of this configuration.

The most common case is the explicit return of an undefined value, for example when a function may or may not return a value.
An `Option` or `Maybe` type would be more appropriate pattern for such usage, but not many TS projects use them.

#### complexity.noUselessUndefinedInitialization

> `readonly` **noUselessUndefinedInitialization**: `"error"` = `"error"`

#### complexity.noVoid

> `readonly` **noVoid**: `"off"` = `"off"`

Using `void` to intentionally ignore callback return values is a useful shorthand.

#### complexity.preset

> `readonly` **preset**: `"none"` = `"none"`

#### complexity.recommended

> `readonly` **recommended**: `false` = `false`

#### complexity.useArrayFind

> `readonly` **useArrayFind**: `"error"` = `"error"`

Enforces the usage of `Array.prototype.find` over `Array.prototype.filter` with index access.

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

#### complexity.useMaxParams

> `readonly` **useMaxParams**: `"error"` = `"error"`

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

#### correctness.noBeforeInteractiveScriptOutsideDocument

> `readonly` **noBeforeInteractiveScriptOutsideDocument**: `"off"` = `"off"`

NextJS-only rule.

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

#### correctness.noDuplicateArgumentNames

> `readonly` **noDuplicateArgumentNames**: `"off"` = `"off"`

GraphQL-only rule.

#### correctness.noDuplicateAttributes

> `readonly` **noDuplicateAttributes**: `"error"` = `"error"`

This rule should help with writing valid HTML.

#### correctness.noDuplicateEnumValueNames

> `readonly` **noDuplicateEnumValueNames**: `"error"` = `"error"`

This rule is enabled just in case. Enums are otherwise forbidden by the configuration.

#### correctness.noDuplicateInputFieldNames

> `readonly` **noDuplicateInputFieldNames**: `"off"` = `"off"`

GraphQL-only rule.

#### correctness.noDuplicateVariableNames

> `readonly` **noDuplicateVariableNames**: `"off"` = `"off"`

GraphQL-only rule.

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

#### correctness.noNextAsyncClientComponent

> `readonly` **noNextAsyncClientComponent**: `"off"` = `"off"`

NextJS-only rule.

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

#### correctness.noUnresolvedImports

> `readonly` **noUnresolvedImports**: `"error"` = `"error"`

Flags any imports that Biome cannot resolve.

#### correctness.noUnsafeFinally

> `readonly` **noUnsafeFinally**: `"error"` = `"error"`

#### correctness.noUnsafeOptionalChaining

> `readonly` **noUnsafeOptionalChaining**: `"error"` = `"error"`

#### correctness.noUnusedFunctionParameters

> `readonly` **noUnusedFunctionParameters**: `"error"` = `"error"`

#### correctness.noUnusedImports

> `readonly` **noUnusedImports**: `"error"` = `"error"`

#### correctness.noUnusedInstantiation

> `readonly` **noUnusedInstantiation**: `"error"` = `"error"`

Prevents instantiation of classes that never get used.

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

#### correctness.noVueDataObjectDeclaration

> `readonly` **noVueDataObjectDeclaration**: `"off"` = `"off"`

Vue-only rule.

#### correctness.noVueDuplicateKeys

> `readonly` **noVueDuplicateKeys**: `"off"` = `"off"`

Vue-only rule.

#### correctness.noVueReservedKeys

> `readonly` **noVueReservedKeys**: `"off"` = `"off"`

Vue-only rule.

#### correctness.noVueReservedProps

> `readonly` **noVueReservedProps**: `"off"` = `"off"`

Vue-only rule.

#### correctness.noVueSetupPropsReactivityLoss

> `readonly` **noVueSetupPropsReactivityLoss**: `"off"` = `"off"`

Vue-only rule.

#### correctness.noVueVIfWithVFor

> `readonly` **noVueVIfWithVFor**: `"off"` = `"off"`

Vue-only rule.

#### correctness.preset

> `readonly` **preset**: `"none"` = `"none"`

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

#### correctness.useInlineScriptId

> `readonly` **useInlineScriptId**: `"off"` = `"off"`

NextJS-only rule.

#### correctness.useIsNan

> `readonly` **useIsNan**: `"error"` = `"error"`

#### correctness.useJsonImportAttributes

> `readonly` **useJsonImportAttributes**: `"error"` = `"error"`

#### correctness.useJsxKeyInIterable

> `readonly` **useJsxKeyInIterable**: `"error"` = `"error"`

#### correctness.useLoneAnonymousOperation

> `readonly` **useLoneAnonymousOperation**: `"off"` = `"off"`

GraphQL-only rule.

#### correctness.useParseIntRadix

> `readonly` **useParseIntRadix**: `"error"` = `"error"`

#### correctness.useQwikClasslist

> `readonly` **useQwikClasslist**: `"off"` = `"off"`

Qwik-only rule.

#### correctness.useQwikMethodUsage

> `readonly` **useQwikMethodUsage**: `"off"` = `"off"`

Qwik-only rule.

#### correctness.useQwikValidLexicalScope

> `readonly` **useQwikValidLexicalScope**: `"off"` = `"off"`

Qwik-only rule.

#### correctness.useSingleJsDocAsterisk

> `readonly` **useSingleJsDocAsterisk**: `"warn"` = `"warn"`

#### correctness.useUniqueElementIds

> `readonly` **useUniqueElementIds**: `"error"` = `"error"`

#### correctness.useValidForDirection

> `readonly` **useValidForDirection**: `"error"` = `"error"`

#### correctness.useValidTypeof

> `readonly` **useValidTypeof**: `"error"` = `"error"`

#### correctness.useVueValidTemplateRoot

> `readonly` **useVueValidTemplateRoot**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVBind

> `readonly` **useVueValidVBind**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVCloak

> `readonly` **useVueValidVCloak**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVElse

> `readonly` **useVueValidVElse**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVElseIf

> `readonly` **useVueValidVElseIf**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVHtml

> `readonly` **useVueValidVHtml**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVIf

> `readonly` **useVueValidVIf**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVOn

> `readonly` **useVueValidVOn**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVOnce

> `readonly` **useVueValidVOnce**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVPre

> `readonly` **useVueValidVPre**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueValidVText

> `readonly` **useVueValidVText**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useVueVForKey

> `readonly` **useVueVForKey**: `"off"` = `"off"`

Vue-only rule.

#### correctness.useYield

> `readonly` **useYield**: `"error"` = `"error"`

### nursery

> `readonly` **nursery**: `object`

#### nursery.noBaseToString

> `readonly` **noBaseToString**: `"error"` = `"error"`

Helps prevent stringification to `[object Object]`.

#### nursery.noComponentHookFactories

> `readonly` **noComponentHookFactories**: `"error"` = `"error"`

Prevents unnecessary component recreation on each render.

#### nursery.noConditionalExpect

> `readonly` **noConditionalExpect**: `"error"` = `"error"`

Tests should be strictly linear without any branching.

#### nursery.noDrizzleDeleteWithoutWhere

> `readonly` **noDrizzleDeleteWithoutWhere**: `"off"` = `"off"`

Drizzle-only rule.

#### nursery.noDrizzleUpdateWithoutWhere

> `readonly` **noDrizzleUpdateWithoutWhere**: `"off"` = `"off"`

#### nursery.noDuplicateFieldDefinitionNames

> `readonly` **noDuplicateFieldDefinitionNames**: `"off"` = `"off"`

GraphQL-only rule.

#### nursery.noDuplicateSelectors

> `readonly` **noDuplicateSelectors**: `"error"` = `"error"`

Prevents selector duplication.

#### nursery.noEmptyObjectKeys

> `readonly` **noEmptyObjectKeys**: `"error"` = `"error"`

Empty object keys are usually just a typo.

#### nursery.noExcessiveNestedCallbacks

> `readonly` **noExcessiveNestedCallbacks**: `"error"` = `"error"`

Keeps the code from nesting too deep.

#### nursery.noExcessiveSelectorClasses

> `readonly` **noExcessiveSelectorClasses**: `"warn"` = `"warn"`

Excessive class selectors are not necessarily an error but they make the CSS harder to read.

#### nursery.noFloatingPromises

> `readonly` **noFloatingPromises**: `"error"` = `"error"`

#### nursery.noIdenticalTestTitle

> `readonly` **noIdenticalTestTitle**: `"error"` = `"error"`

Test titles should be unique in their respective groups.

#### nursery.noImpliedEval

> `readonly` **noImpliedEval**: `"error"` = `"error"`

Prevents eval()-like behavior of executing arbitrary strings as JavaScript code.

#### nursery.noInlineStyles

> `readonly` **noInlineStyles**: `"warn"` = `"warn"`

Inline styles do not generate any errors but are harder to maintain in general. CSS files or similar solutions should be preferred.

#### nursery.noJsxLeakedDollar

> `readonly` **noJsxLeakedDollar**: `"error"` = `"error"`

Using template strings syntax in plain component text is not indended in most cases.

#### nursery.noJsxNamespace

> `readonly` **noJsxNamespace**: `"error"` = `"error"`

XML-like syntax is not supported by React.

#### nursery.noLoopFunc

> `readonly` **noLoopFunc**: `"error"` = `"error"`

Prevents outer variable capture inside loop-defined functions.

#### nursery.noMisleadingReturnType

> `readonly` **noMisleadingReturnType**: `"error"` = `"error"`

Ensures that functions do not report the return type as wider than what is actually returned.

In case the widening is expected, using `return value as WiderType` is recommended. Casting makes the intent explicit.

#### nursery.noMisusedPromises

> `readonly` **noMisusedPromises**: `"error"` = `"error"`

#### nursery.noPlaywrightElementHandle

> `readonly` **noPlaywrightElementHandle**: `"error"` = `"error"`

Usage of locators is preferred as they include auto-wait.

#### nursery.noPlaywrightEval

> `readonly` **noPlaywrightEval**: `"error"` = `"error"`

Locators are preferred over `evaluate`.

#### nursery.noPlaywrightForceOption

> `readonly` **noPlaywrightForceOption**: `"error"` = `"error"`

Force may lead to unreliable tests.

#### nursery.noPlaywrightMissingAwait

> `readonly` **noPlaywrightMissingAwait**: `"error"` = `"error"`

Forces the async code of Playwright to be handled.

#### nursery.noPlaywrightNetworkidle

> `readonly` **noPlaywrightNetworkidle**: `"error"` = `"error"`

Using `networkidle` may lead to unreliable or flaky tests.

#### nursery.noPlaywrightPagePause

> `readonly` **noPlaywrightPagePause**: `"error"` = `"error"`

`page.pause()` is a debugging utility and should not be committed.

#### nursery.noPlaywrightUselessAwait

> `readonly` **noPlaywrightUselessAwait**: `"error"` = `"error"`

Not all Playwright functions return a Promise. This rule helps avoid unnecessary `await` on such functions.

#### nursery.noPlaywrightWaitForNavigation

> `readonly` **noPlaywrightWaitForNavigation**: `"error"` = `"error"`

`waitForNavigation` is deprecated in favor of `waitForURL` or `waitForLoadState`.

#### nursery.noPlaywrightWaitForSelector

> `readonly` **noPlaywrightWaitForSelector**: `"error"` = `"error"`

Locators are preferred as they are more reliable and auto-awaited.

#### nursery.noPlaywrightWaitForTimeout

> `readonly` **noPlaywrightWaitForTimeout**: `"error"` = `"error"`

`waitForLoadState`, `waitForURL` and `waitForFunction` are preferred and more reliable.

#### nursery.noReactNativeDeepImports

> `readonly` **noReactNativeDeepImports**: `"error"` = `"error"`

Disallows importing from deeply nested React Native directories.

#### nursery.noReactNativeLiteralColors

> `readonly` **noReactNativeLiteralColors**: `"error"` = `"error"`

Disallows hardcoding colors in React Native components for better reusability inside the application.

#### nursery.noReactNativeRawText

> `readonly` **noReactNativeRawText**: `"error"` = `"error"`

Text should always be wrapped in the React Native `Text` component.

#### nursery.noReactStringRefs

> `readonly` **noReactStringRefs**: `"error"` = `"error"`

Prevents the usage of the old string refs that are less maintainable than the explicit refs.

#### nursery.noRestrictedDependencies

> `readonly` **noRestrictedDependencies**: `"error"` = `"error"`

Prevents usage of superseeded dependencies as checked by [e18e](https://e18e.dev/).

#### nursery.noTopLevelLiterals

> `readonly` **noTopLevelLiterals**: `"error"` = `"error"`

Disallows top-level literals in JSON files. Only accepted data types are objects and arrays.

#### nursery.noUndeclaredClasses

> `readonly` **noUndeclaredClasses**: `"off"` = `"off"`

Disabled to prevent issues with false-positives.

#### nursery.noUnnecessaryTemplateExpression

> `readonly` **noUnnecessaryTemplateExpression**: `"error"` = `"error"`

Disallows template literals for which a plain string can be used instead.

#### nursery.noUnsafePlusOperands

> `readonly` **noUnsafePlusOperands**: `"error"` = `"error"`

Disallows the `+` operand on two values that may produce unexpected results.

#### nursery.noUntrustedLicenses

> `readonly` **noUntrustedLicenses**: `"info"` = `"info"`

Informational rule that reports when a dependency license may not be compatible with the project.

#### nursery.noUnusedClasses

> `readonly` **noUnusedClasses**: `"off"` = `"off"`

Disabled to prevent issues with false-positives.

#### nursery.noUselessTypeConversion

> `readonly` **noUselessTypeConversion**: `"error"` = `"error"`

Disallows unnecessary type conversions.

#### nursery.noVueImportCompilerMacros

> `readonly` **noVueImportCompilerMacros**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueRefAsOperand

> `readonly` **noVueRefAsOperand**: `"off"` = `"off"`

Vue-only rule.

#### nursery.noVueVOnNumberValues

> `readonly` **noVueVOnNumberValues**: `"off"` = `"off"`

Vue-only rule.

#### nursery.preset

> `readonly` **preset**: `"none"` = `"none"`

#### nursery.recommended

> `readonly` **recommended**: `false` = `false`

#### nursery.useArraySome

> `readonly` **useArraySome**: `"error"` = `"error"`

using `some` is cleaner and more explicit than checking the resulting length of a `.filter` call.

#### nursery.useAwaitThenable

> `readonly` **useAwaitThenable**: `"error"` = `"error"`

There is no need to await non-Promise values.

#### nursery.useBaseline

> `readonly` **useBaseline**: `object`

Reports when a CSS feature is not widely available. Intended to prevent usage of incompatible constructs.

#### nursery.useBaseline.level

> `readonly` **level**: `"warn"` = `"warn"`

#### nursery.useBaseline.options

> `readonly` **options**: `object`

#### nursery.useBaseline.options.available

> `readonly` **available**: `"widely"` = `"widely"`

#### nursery.useConsistentTestIt

> `readonly` **useConsistentTestIt**: `object`

Forces consistent usage of `test` over `it` in test definitions.

#### nursery.useConsistentTestIt.level

> `readonly` **level**: `"error"` = `"error"`

#### nursery.useConsistentTestIt.options

> `readonly` **options**: `object`

#### nursery.useConsistentTestIt.options.function

> `readonly` **function**: `"test"` = `"test"`

#### nursery.useDisposables

> `readonly` **useDisposables**: `"error"` = `"error"`

Detects when a disposable object is not disposed off with the `using` keyword.

#### nursery.useDomNodeTextContent

> `readonly` **useDomNodeTextContent**: `"error"` = `"error"`

`innerText` and `textContent` do not always return the same value, which may lead to unexpected issues.

#### nursery.useDomQuerySelector

> `readonly` **useDomQuerySelector**: `"error"` = `"error"`

Enforces `querySelector` usage over the old DOM APIs.

#### nursery.useExhaustiveSwitchCases

> `readonly` **useExhaustiveSwitchCases**: `"error"` = `"error"`

#### nursery.useExpect

> `readonly` **useExpect**: `"error"` = `"error"`

Each test should include at least one assertion.

#### nursery.useExplicitReturnType

> `readonly` **useExplicitReturnType**: `object`

Forces functions to report their return types.

#### nursery.useExplicitReturnType.level

> `readonly` **level**: `"error"` = `"error"`

#### nursery.useExplicitReturnType.options

> `readonly` **options**: `object`

#### nursery.useExplicitReturnType.options.allowExpressions

> `readonly` **allowExpressions**: `true` = `true`

#### nursery.useExplicitType

> `readonly` **useExplicitType**: `"off"` = `"off"`

The rule is currently missing the option to make the following usage valid:

##### Example

```typescript
const returnsString = (): string => "value";

const isDefinitelyString = returnsString(); // isDefinitelyString would have to have it's typed explicitly written out
```

#### nursery.useIframeSandbox

> `readonly` **useIframeSandbox**: `"error"` = `"error"`

Forces `iframe` elements to have a sandbox attribute.

#### nursery.useImportsFirst

> `readonly` **useImportsFirst**: `"error"` = `"error"`

Forces all imports to be at the top of the source code file.

#### nursery.useIncludes

> `readonly` **useIncludes**: `"error"` = `"error"`

Forces the usage of a more idiomatic `Array.prototype.includes` over `Array.prototype.indexOf`.

#### nursery.useMathMinMax

> `readonly` **useMathMinMax**: `"error"` = `"error"`

Forces the usage of `Math.min` or `Math.max` over ternaries.

#### nursery.useNamedCaptureGroup

> `readonly` **useNamedCaptureGroup**: `"warn"` = `"warn"`

Capture groups are more reliable and maintainable. However, not every regex must use them.

#### nursery.useNullishCoalescing

> `readonly` **useNullishCoalescing**: `"error"` = `"error"`

Nullish coalescing is always preferrable to a logic OR.

#### nursery.usePlaywrightValidDescribeCallback

> `readonly` **usePlaywrightValidDescribeCallback**: `"error"` = `"error"`

Describe callback should not have any parameters nor should it be async.

#### nursery.useQwikLoaderLocation

> `readonly` **useQwikLoaderLocation**: `"off"` = `"off"`

Qwik-only rule.

#### nursery.useReactAsyncServerFunction

> `readonly` **useReactAsyncServerFunction**: `"error"` = `"error"`

Forces any function with `use server` directive to be asynchronous.

#### nursery.useReactFunctionComponentDefinition

> `readonly` **useReactFunctionComponentDefinition**: `object`

Forces a consistent React component declaration.

#### nursery.useReactFunctionComponentDefinition.level

> `readonly` **level**: `"error"` = `"error"`

#### nursery.useReactFunctionComponentDefinition.options

> `readonly` **options**: `object`

#### nursery.useReactFunctionComponentDefinition.options.namedComponents

> `readonly` **namedComponents**: `"arrowFunction"` = `"arrowFunction"`

#### nursery.useReactNativePlatformComponents

> `readonly` **useReactNativePlatformComponents**: `"error"` = `"error"`

Ensures that platform-specific components are only used in platform-specific files.

#### nursery.useReduceTypeParameter

> `readonly` **useReduceTypeParameter**: `"error"` = `"error"`

Forces that any usage of `Array.prototype.reduce` is correctly typed via a generic argument rather than a type assertion.

#### nursery.useRegexpExec

> `readonly` **useRegexpExec**: `"error"` = `"error"`

`RegExp.exec` is slightly faster than `String.match`.

#### nursery.useRegexpTest

> `readonly` **useRegexpTest**: `"error"` = `"error"`

Promotes the usage of `Regex.prototype.test` over `String.prototype.match`.

#### nursery.useScopedStyles

> `readonly` **useScopedStyles**: `"off"` = `"off"`

Vue-only rule.

#### nursery.useSortedClasses

> `readonly` **useSortedClasses**: `"error"` = `"error"`

#### nursery.useStringStartsEndsWith

> `readonly` **useStringStartsEndsWith**: `"error"` = `"error"`

Forces the usage of `String.prototype.startsWith` over index-based assertions.

#### nursery.useSvelteRequireEachKey

> `readonly` **useSvelteRequireEachKey**: `"off"` = `"off"`

Svelte-only rule.

#### nursery.useTestHooksInOrder

> `readonly` **useTestHooksInOrder**: `"error"` = `"error"`

Forces test hook definition to follow the order of execution.

#### nursery.useTestHooksOnTop

> `readonly` **useTestHooksOnTop**: `"error"` = `"error"`

Forces the test hooks to be defined at the top of the scope.

#### nursery.useThisInClassMethods

> `readonly` **useThisInClassMethods**: `"error"` = `"error"`

Ensures that class methods actually utilize `this`. If `this` is not used, the methods can be declared static or moved outside of the class.

#### nursery.useUnicodeRegex

> `readonly` **useUnicodeRegex**: `"error"` = `"error"`

Using either the `u` or the newer `v` flags ensures that all unicode characters are correctly handled and supported.

#### nursery.useVarsOnTop

> `readonly` **useVarsOnTop**: `"error"` = `"error"`

Forces `var` declarations to be placed at the top of the scope to avoid hoisting issues.

`var` declarations should not be used. However, this rule is enabled just in case.

#### nursery.useVueConsistentDefinePropsDeclaration

> `readonly` **useVueConsistentDefinePropsDeclaration**: `"off"` = `"off"`

Vue-only rule.

#### nursery.useVueNextTickPromise

> `readonly` **useVueNextTickPromise**: `"off"` = `"off"`

Vue-only rule.

#### nursery.useVueValidVFor

> `readonly` **useVueValidVFor**: `"off"` = `"off"`

Vue-only rule.

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

#### performance.noJsxPropsBind

> `readonly` **noJsxPropsBind**: `"error"` = `"error"`

Using `bind` is treated by React as a new function on each render.

#### performance.noNamespaceImport

> `readonly` **noNamespaceImport**: `"error"` = `"error"`

#### performance.noReExportAll

> `readonly` **noReExportAll**: `"error"` = `"error"`

#### performance.noSyncScripts

> `readonly` **noSyncScripts**: `"off"` = `"off"`

NextJS-only rule.

#### performance.noUnwantedPolyfillio

> `readonly` **noUnwantedPolyfillio**: `"off"` = `"off"`

NextJS-only rule.

#### performance.preset

> `readonly` **preset**: `"none"` = `"none"`

#### performance.recommended

> `readonly` **recommended**: `false` = `false`

#### performance.useGoogleFontPreconnect

> `readonly` **useGoogleFontPreconnect**: `"error"` = `"error"`

#### performance.useSolidForComponent

> `readonly` **useSolidForComponent**: `"off"` = `"off"`

Solid-only rule.

#### performance.useTopLevelRegex

> `readonly` **useTopLevelRegex**: `"error"` = `"error"`

#### performance.useVueVapor

> `readonly` **useVueVapor**: `"off"` = `"off"`

Vue-only rule.

### preset

> `readonly` **preset**: `"none"` = `"none"`

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

#### security.noScriptUrl

> `readonly` **noScriptUrl**: `"error"` = `"error"`

This rule should help with preventing any XSS vulnerabilities.

#### security.noSecrets

> `readonly` **noSecrets**: `"off"` = `"off"`

Produces too many false-positives.

#### security.preset

> `readonly` **preset**: `"none"` = `"none"`

#### security.recommended

> `readonly` **recommended**: `false` = `false`

### style

> `readonly` **style**: `object`

#### style.noCommonJs

> `readonly` **noCommonJs**: `"off"` = `"off"`

Should only be enabled in ESM projects or projects using bundlers.

Recommended level would be `error`.

#### style.noContinue

> `readonly` **noContinue**: `"off"` = `"off"`

`continue` helps to avoid nesting inside loop bodies.

#### style.noDefaultExport

> `readonly` **noDefaultExport**: `"error"` = `"error"`

#### style.noDescendingSpecificity

> `readonly` **noDescendingSpecificity**: `"error"` = `"error"`

#### style.noDoneCallback

> `readonly` **noDoneCallback**: `"error"` = `"error"`

#### style.noEnum

> `readonly` **noEnum**: `"error"` = `"error"`

#### style.noExcessiveClassesPerFile

> `readonly` **noExcessiveClassesPerFile**: `object`

Should really be left up to individual projects. More than two can be fine, if defining things like Errors in a single place.

#### style.noExcessiveClassesPerFile.level

> `readonly` **level**: `"error"` = `"error"`

#### style.noExcessiveClassesPerFile.options

> `readonly` **options**: `object`

#### style.noExcessiveClassesPerFile.options.maxClasses

> `readonly` **maxClasses**: `2` = `2`

#### style.noExcessiveLinesPerFile

> `readonly` **noExcessiveLinesPerFile**: `"off"` = `"off"`

The rule is left as `off`. If required, it should be enabled on a project level.

#### style.noExportedImports

> `readonly` **noExportedImports**: `"error"` = `"error"`

#### style.noHeadElement

> `readonly` **noHeadElement**: `"off"` = `"off"`

NextJS-only rule.

#### style.noHexColors

> `readonly` **noHexColors**: `"off"` = `"off"`

This rule is disabled as HEX colors are pretty widely used.

#### style.noImplicitBoolean

> `readonly` **noImplicitBoolean**: `"error"` = `"error"`

#### style.noIncrementDecrement

> `readonly` **noIncrementDecrement**: `object`

This rule should be useful for the avoidance of incorrectly auto-inserted semicolons.
Although, the usage in for-loops makes sense and is thus allowed.

#### style.noIncrementDecrement.level

> `readonly` **level**: `"error"` = `"error"`

#### style.noIncrementDecrement.options

> `readonly` **options**: `object`

#### style.noIncrementDecrement.options.allowForLoopAfterthoughts

> `readonly` **allowForLoopAfterthoughts**: `true` = `true`

#### style.noInferrableTypes

> `readonly` **noInferrableTypes**: `"error"` = `"error"`

#### style.noJsxLiterals

> `readonly` **noJsxLiterals**: `"warn"` = `"warn"`

Should only be a recommendation as not every React project will be using translations.

#### style.noMagicNumbers

> `readonly` **noMagicNumbers**: `"warn"` = `"warn"`

#### style.noMultiAssign

> `readonly` **noMultiAssign**: `"error"` = `"error"`

Keeping the assignments more explicit. There are no performance gains, as the code is bundled & minified anyway.

#### style.noMultilineString

> `readonly` **noMultilineString**: `"error"` = `"error"`

Enforces that strings are either multiline via template string literals or with explicit line breaks.

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

#### style.noRootType

> `readonly` **noRootType**: `"off"` = `"off"`

GraphQL-only rule.

#### style.noShoutyConstants

> `readonly` **noShoutyConstants**: `"off"` = `"off"`

Shouting is not a crime.

#### style.noSubstr

> `readonly` **noSubstr**: `"error"` = `"error"`

#### style.noTernary

> `readonly` **noTernary**: `"off"` = `"off"`

Ternaries are a superior way of assigning to variables.
They only become hard to read once they become nested or use long conditions.

#### style.noUnusedTemplateLiteral

> `readonly` **noUnusedTemplateLiteral**: `"error"` = `"error"`

#### style.noUselessElse

> `readonly` **noUselessElse**: `"error"` = `"error"`

#### style.noValueAtRule

> `readonly` **noValueAtRule**: `"error"` = `"error"`

#### style.noVueOptionsApi

> `readonly` **noVueOptionsApi**: `"off"` = `"off"`

Vue-only rule.

#### style.noYodaExpression

> `readonly` **noYodaExpression**: `"error"` = `"error"`

#### style.preset

> `readonly` **preset**: `"none"` = `"none"`

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

#### style.useConsistentArrowReturn

> `readonly` **useConsistentArrowReturn**: `"error"` = `"error"`

#### style.useConsistentBuiltinInstantiation

> `readonly` **useConsistentBuiltinInstantiation**: `"error"` = `"error"`

#### style.useConsistentCurlyBraces

> `readonly` **useConsistentCurlyBraces**: `"error"` = `"error"`

#### style.useConsistentEnumValueType

> `readonly` **useConsistentEnumValueType**: `"error"` = `"error"`

This rule is enabled just in case. Enums are otherwise forbidden by the configuration.

#### style.useConsistentGraphqlDescriptions

> `readonly` **useConsistentGraphqlDescriptions**: `"off"` = `"off"`

GraphQL-only rule.

#### style.useConsistentMemberAccessibility

> `readonly` **useConsistentMemberAccessibility**: `object`

#### style.useConsistentMemberAccessibility.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentMemberAccessibility.options

> `readonly` **options**: `object`

#### style.useConsistentMemberAccessibility.options.accessibility

> `readonly` **accessibility**: `"explicit"` = `"explicit"`

#### style.useConsistentMethodSignatures

> `readonly` **useConsistentMethodSignatures**: `object`

This rule enforces a consistent method signature in interfaces and types.
The property style keeps the code definitions consistant between attributes and methods.

#### style.useConsistentMethodSignatures.level

> `readonly` **level**: `"error"` = `"error"`

#### style.useConsistentMethodSignatures.options

> `readonly` **options**: `object`

#### style.useConsistentMethodSignatures.options.style

> `readonly` **style**: `"property"` = `"property"`

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

#### style.useDestructuring

> `readonly` **useDestructuring**: `"off"` = `"off"`

Destructuring may be more readable in many cases. However, the distinction is not simply black-and-white and is left up to the code reviewer.
The level is left at `off` to at least let the user know that the option exists.

#### style.useEnumInitializers

> `readonly` **useEnumInitializers**: `"off"` = `"off"`

Enums are forbidden.

#### style.useErrorCause

> `readonly` **useErrorCause**: `"error"` = `"error"`

Promotes better error-handling practices.

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

#### style.useGlobalThis

> `readonly` **useGlobalThis**: `"error"` = `"error"`

This rule promotes the use of cross-platform compatible global accessors.
Biome allows for some `window` specific accesses that are not directly available on globalThis.

#### style.useGraphqlNamingConvention

> `readonly` **useGraphqlNamingConvention**: `"off"` = `"off"`

GraphQL-only rule.

#### style.useGroupedAccessorPairs

> `readonly` **useGroupedAccessorPairs**: `"error"` = `"error"`

#### style.useImportType

> `readonly` **useImportType**: `"error"` = `"error"`

#### style.useInputName

> `readonly` **useInputName**: `"off"` = `"off"`

GraphQL-only rule

#### style.useLiteralEnumMembers

> `readonly` **useLiteralEnumMembers**: `"off"` = `"off"`

Enums are forbidden.

#### style.useLoneExecutableDefinition

> `readonly` **useLoneExecutableDefinition**: `"off"` = `"off"`

GraphQL-only rule.

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

#### style.useSpreadOverApply

> `readonly` **useSpreadOverApply**: `"error"` = `"error"`

Enforces the spread syntax usage over a plain `apply`.

`apply` is still accepted in cases where there is a custom `this` value supplied.

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

#### style.useVueConsistentVBindStyle

> `readonly` **useVueConsistentVBindStyle**: `"off"` = `"off"`

Vue-only rule.

#### style.useVueConsistentVOnStyle

> `readonly` **useVueConsistentVOnStyle**: `"off"` = `"off"`

Vue-only rule.

#### style.useVueDefineMacrosOrder

> `readonly` **useVueDefineMacrosOrder**: `"off"` = `"off"`

Vue-only rule.

#### style.useVueHyphenatedAttributes

> `readonly` **useVueHyphenatedAttributes**: `"off"` = `"off"`

Vue-only rule.

#### style.useVueMultiWordComponentNames

> `readonly` **useVueMultiWordComponentNames**: `"off"` = `"off"`

Vue-only rule.

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

#### suspicious.noDeprecatedImports

> `readonly` **noDeprecatedImports**: `"warn"` = `"warn"`

Deprecated imports should be discouraged. However, with some dependencies, there are no alternatives. Thus keeping this at the `warn` level.

#### suspicious.noDeprecatedMediaType

> `readonly` **noDeprecatedMediaType**: `"error"` = `"error"`

This rule prevents the usage of deprecated media types in CSS.

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

#### suspicious.noDuplicateDependencies

> `readonly` **noDuplicateDependencies**: `"off"` = `"off"`

NodeJS-only rule.

#### suspicious.noDuplicatedSpreadProps

> `readonly` **noDuplicatedSpreadProps**: `"error"` = `"error"`

Prevents unnecessary computations as spreading props twice makes React go crazy.

#### suspicious.noDuplicateElseIf

> `readonly` **noDuplicateElseIf**: `"error"` = `"error"`

#### suspicious.noDuplicateEnumValues

> `readonly` **noDuplicateEnumValues**: `"error"` = `"error"`

This rule is enabled just in case. Enums are otherwise forbidden by the configuration.

#### suspicious.noDuplicateFields

> `readonly` **noDuplicateFields**: `"off"` = `"off"`

GraphQL-only rule.

#### suspicious.noDuplicateFontNames

> `readonly` **noDuplicateFontNames**: `"error"` = `"error"`

#### suspicious.noDuplicateGraphqlOperationName

> `readonly` **noDuplicateGraphqlOperationName**: `"off"` = `"off"`

GraphQL-only rule.

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

#### suspicious.noEmptySource

> `readonly` **noEmptySource**: `"off"` = `"off"`

GraphQL-only rule.

#### suspicious.noEqualsToNull

> `readonly` **noEqualsToNull**: `"off"` = `"off"`

Keeping this `off` as this approach is useful when working with libraries and projects that use `null` and `undefined` interchangeably.

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

#### suspicious.noForIn

> `readonly` **noForIn**: `"error"` = `"error"`

`for-in` loops are usually just a typo when trying to remember how `for-of` is written.
 As the Biome documentation mentions, `for-of`, plain `for` loop, or even `array.entries` are the better and more explicit options.

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

#### suspicious.noImportCycles

> `readonly` **noImportCycles**: `"error"` = `"error"`

Import cycles are bad for obvious reasons.

#### suspicious.noIrregularWhitespace

> `readonly` **noIrregularWhitespace**: `"error"` = `"error"`

#### suspicious.noLabelVar

> `readonly` **noLabelVar**: `"error"` = `"error"`

#### suspicious.noLeakedRender

> `readonly` **noLeakedRender**: `"error"` = `"error"`

Prevents unintended values from being rendered. For example the `false` case when using `&&`.

#### suspicious.noMisleadingCharacterClass

> `readonly` **noMisleadingCharacterClass**: `"error"` = `"error"`

#### suspicious.noMisleadingInstantiator

> `readonly` **noMisleadingInstantiator**: `"error"` = `"error"`

#### suspicious.noMisplacedAssertion

> `readonly` **noMisplacedAssertion**: `"error"` = `"error"`

#### suspicious.noMisrefactoredShorthandAssign

> `readonly` **noMisrefactoredShorthandAssign**: `"error"` = `"error"`

#### suspicious.noNestedPromises

> `readonly` **noNestedPromises**: `"error"` = `"error"`

`async await` is now generally available and should be the preferred approach to writing asynchronous code.

#### suspicious.noNonNullAssertedOptionalChain

> `readonly` **noNonNullAssertedOptionalChain**: `"error"` = `"error"`

#### suspicious.noOctalEscape

> `readonly` **noOctalEscape**: `"error"` = `"error"`

#### suspicious.noParametersOnlyUsedInRecursion

> `readonly` **noParametersOnlyUsedInRecursion**: `"error"` = `"error"`

Just making sure there are no unused parameters in recursive functions.

#### suspicious.noProto

> `readonly` **noProto**: `"error"` = `"error"`

This approach to accessing object's prototype is deprecated since 2009.

#### suspicious.noPrototypeBuiltins

> `readonly` **noPrototypeBuiltins**: `"error"` = `"error"`

#### suspicious.noQuickfixBiome

> `readonly` **noQuickfixBiome**: `"off"` = `"off"`

Disables "quickfix" actions from being defined in Biome configuration. Left up to consumers to enable/disable.

#### suspicious.noReactForwardRef

> `readonly` **noReactForwardRef**: `"error"` = `"error"`

Forbids the usage of the deprecated `forwardRef`.

#### suspicious.noReactSpecificProps

> `readonly` **noReactSpecificProps**: `"off"` = `"off"`

Solid and qwik rule only.

#### suspicious.noRedeclare

> `readonly` **noRedeclare**: `"error"` = `"error"`

#### suspicious.noRedundantUseStrict

> `readonly` **noRedundantUseStrict**: `"error"` = `"error"`

#### suspicious.noReturnAssign

> `readonly` **noReturnAssign**: `"error"` = `"error"`

There is no need to assign anything when returning.

#### suspicious.noSelfCompare

> `readonly` **noSelfCompare**: `"error"` = `"error"`

#### suspicious.noShadow

> `readonly` **noShadow**: `"error"` = `"error"`

Forbids name-shadowing.

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

#### suspicious.noUndeclaredEnvVars

> `readonly` **noUndeclaredEnvVars**: `"off"` = `"off"`

Turborepo-only rule.

#### suspicious.noUnknownAtRules

> `readonly` **noUnknownAtRules**: `"error"` = `"error"`

#### suspicious.noUnknownAttribute

> `readonly` **noUnknownAttribute**: `"error"` = `"error"`

Prevents the usage of unknown attributes.

#### suspicious.noUnnecessaryConditions

> `readonly` **noUnnecessaryConditions**: `"error"` = `"error"`

Prevents the usage of a most likely incorrect code used in a condition. Only flags conditions that always evaluate to the same value.

#### suspicious.noUnsafeDeclarationMerging

> `readonly` **noUnsafeDeclarationMerging**: `"error"` = `"error"`

#### suspicious.noUnsafeNegation

> `readonly` **noUnsafeNegation**: `"error"` = `"error"`

#### suspicious.noUnusedExpressions

> `readonly` **noUnusedExpressions**: `"error"` = `"error"`

Unused expressions can be safely remove and should not litter the codebase.

#### suspicious.noUselessEscapeInString

> `readonly` **noUselessEscapeInString**: `"error"` = `"error"`

#### suspicious.noUselessRegexBackrefs

> `readonly` **noUselessRegexBackrefs**: `"error"` = `"error"`

#### suspicious.noVar

> `readonly` **noVar**: `"error"` = `"error"`

#### suspicious.noVueArrowFuncInWatch

> `readonly` **noVueArrowFuncInWatch**: `"off"` = `"off"`

Vue-only rule.

#### suspicious.noWith

> `readonly` **noWith**: `"error"` = `"error"`

#### suspicious.preset

> `readonly` **preset**: `"none"` = `"none"`

#### suspicious.recommended

> `readonly` **recommended**: `false` = `false`

#### suspicious.useAdjacentOverloadSignatures

> `readonly` **useAdjacentOverloadSignatures**: `"error"` = `"error"`

#### suspicious.useArraySortCompare

> `readonly` **useArraySortCompare**: `"error"` = `"error"`

Enforces all sorting operations to be explicitly defined.

#### suspicious.useAwait

> `readonly` **useAwait**: `"error"` = `"error"`

#### suspicious.useBiomeIgnoreFolder

> `readonly` **useBiomeIgnoreFolder**: `"error"` = `"error"`

#### suspicious.useDefaultSwitchClauseLast

> `readonly` **useDefaultSwitchClauseLast**: `"error"` = `"error"`

#### suspicious.useDeprecatedDate

> `readonly` **useDeprecatedDate**: `"off"` = `"off"`

GraphQL-only rule.

##### Deprecated

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

#### suspicious.useRequiredScripts

> `readonly` **useRequiredScripts**: `"off"` = `"off"`

This rule should only be enabled in a specific project as every project uses different required scripts.

#### suspicious.useStaticResponseMethods

> `readonly` **useStaticResponseMethods**: `"warn"` = `"warn"`

#### suspicious.useStrictMode

> `readonly` **useStrictMode**: `"error"` = `"error"`

<!--
This template is for requesting NEW features or enabling currently disabled rules.
For changes to existing rule configurations, please use the Rule Change Request template.
All sections are required unless marked optional.
-->

## Feature Request

**Feature Type:**

<!-- Select one -->

- [ ] Enable a currently disabled Biome rule
- [ ] New configuration preset (e.g., a new specialized config like "vue.json")
- [ ] New build/tooling feature
- [ ] Documentation enhancement
- [ ] Other (please specify)

## Feature Description

**Summary:**

<!-- Provide a clear, concise description of the feature you're requesting -->

**Detailed Description:**

<!-- Elaborate on the feature, including specific requirements and expected behavior -->

## For Rule Enablement Requests

<!-- Complete this section only if requesting to enable a currently disabled rule -->

**Rule Name:**

<!-- e.g., useImportExtensions, noBarrelFile, useFilenamingConvention -->

**Biome Documentation Link:**

<!-- Link to the official Biome documentation for this rule -->
<!-- e.g., https://biomejs.dev/linter/rules/use-import-extensions/ -->

**Proposed Configuration:**

```typescript
// Show how the rule should be configured
// Include severity level (warn/error) and any options
```

**Target Configurations:**

<!-- Which configuration files should include this rule? -->

- [ ] Base (affects all configurations)
- [ ] Frontend (affects frontend, react, next)
- [ ] React (affects react, next)
- [ ] Next (affects only Next.js projects)
- [ ] GraphQL (standalone)
- [ ] Node (standalone)
- [ ] New configuration preset (specify below)

## Use Cases

**Primary Use Case:**

<!-- Describe the main scenario where this feature would be beneficial -->

**Additional Use Cases:**

<!-- List other scenarios where this would be helpful (optional) -->

**Who Would Benefit:**

<!-- Describe the types of projects or developers who would benefit -->

## Code Examples

**Example 1 - Problem this solves:**

```typescript
// Show code that demonstrates the problem this feature would solve
```

**Example 2 - Desired behavior:**

```typescript
// Show how code should look/behave with this feature enabled
```

## Implementation Considerations

**Biome Version Compatibility:**

<!-- Which version of Biome is required for this feature? -->

- [ ] Available in current stable Biome (1.9.x)
- [ ] Requires Biome 2.0 beta
- [ ] Requires future Biome version (specify)

**Configuration Conflicts:**

<!-- Are there any potential conflicts with existing rules? -->

**Performance Impact:**

<!-- Will this feature affect linting performance? -->

- [ ] No performance impact expected
- [ ] May increase linting time
- [ ] May require additional computational resources

## Alternatives

**Alternative Approaches:**

<!-- Have you considered other ways to achieve this goal? -->

**Why This Approach:**

<!-- Explain why this feature request is the best solution -->

**Workarounds:**

<!-- Are there current workarounds? Why are they insufficient? -->

## Additional Context

**Related Issues/PRs:**

<!-- Link any related issues, PRs, or discussions -->

**External References:**

<!-- Links to articles, other tools, or resources that support this request -->

**Migration Path:**

<!-- If this is a breaking change, how should users migrate? (optional) -->

## For New Configuration Presets

<!-- Complete only if requesting a new configuration preset like "vue.json" -->

**Preset Name:**

<!-- e.g., "vue", "svelte", "remix" -->

**Base Configuration:**

<!-- Which existing config should this extend from? -->

**Specific Rules:**

<!-- List specific rules that should be different from the base -->

**Target Framework/Library Version:**

<!-- e.g., Vue 3.x, Svelte 4.x -->

## Checklist

- [ ] I have searched for existing feature requests
- [ ] I have verified this feature doesn't already exist in the current configurations
- [ ] I have checked the Biome documentation for this feature
- [ ] I have provided clear use cases and examples
- [ ] I have considered the impact on existing users
- [ ] I understand that new features must align with the project's goals of strict, defensive coding practices

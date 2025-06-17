<!--
This template is for requesting changes to EXISTING rules in the Biome configuration.
For new rule requests, please use a different template.
All sections are required unless marked optional.
-->

## Rule Change Request

**Rule Name:**

<!-- e.g., noImplicitBoolean, useArrowFunction, noNodejsModules -->

**Rule Category:**

<!-- Select one -->

- [ ] a11y (Accessibility)
- [ ] complexity
- [ ] correctness
- [ ] nursery
- [ ] performance
- [ ] security
- [ ] style
- [ ] suspicious

**Configuration Affected:**

<!-- Select all that apply. Remember that changes cascade (e.g., changing in base affects all, changing in frontend affects react/next) -->

- [ ] Base (`@cookielab.io/biome-config/dist/base.json`)
- [ ] Frontend (`@cookielab.io/biome-config/dist/frontend.json`)
- [ ] React (`@cookielab.io/biome-config/dist/react.json`)
- [ ] Next (`@cookielab.io/biome-config/dist/next.json`)
- [ ] GraphQL (`@cookielab.io/biome-config/dist/graphql.json`)
- [ ] Node (`@cookielab.io/biome-config/dist/node.json`)

## Current Configuration

**Current Rule Setting:**

<!-- e.g., "error", "warn", "off", or with options like:
{
  level: "error",
  options: {
    syntax: "explicit"
  }
}
-->

**Current Rule Location:**

<!-- e.g., biome/src/rules/base.ts line 123 -->

## Requested Change

**New Rule Setting:**

<!-- What should the rule be changed to? e.g., "warn", "off", or with specific options -->

**Type of Change:**

- [ ] Change severity level (off/warn/error)
- [ ] Change rule options
- [ ] Both severity and options

## Justification

**Why is this change needed?**

<!-- Provide a clear explanation of why the current setting is problematic -->

**Impact Assessment:**

- [ ] This change will make the linting more strict
- [ ] This change will make the linting less strict
- [ ] This change only affects rule behavior, not strictness

**Breaking Change:**

- [ ] Yes, existing code may fail linting after this change
- [ ] No, this change is backward compatible

## Code Examples

**Example of code that demonstrates the issue with current setting:**

```typescript
// Provide code that shows why the current rule setting is problematic
```

**How the code would be handled with the proposed change:**

```typescript
// Show how the same code would be treated after the change
```

## Additional Context

**Use Cases:**

<!-- Describe specific scenarios where this change would be beneficial -->

**Alternatives Considered:**

<!-- Have you considered other approaches? Why is this the best solution? -->

**Related Biome Documentation:**

<!-- Link to relevant Biome documentation for this rule -->
<!-- e.g., https://biomejs.dev/linter/rules/use-arrow-function/ -->

## Checklist

- [ ] I have verified this rule exists in the current configuration
- [ ] I have checked that this change hasn't been requested before
- [ ] I have provided clear code examples demonstrating the need
- [ ] I have considered the impact on existing codebases
- [ ] I understand that changes to base configurations affect all extending configurations

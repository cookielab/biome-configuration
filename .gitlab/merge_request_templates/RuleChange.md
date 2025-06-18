<!--
This template is for merge requests that modify existing rule configurations.
For enabling new rules, please use the NewFeature template.
Please fill out all sections to help reviewers understand your changes.
-->

## 🔧 Rule Configuration Change

### Summary

<!-- Provide a brief description of the rule change -->

### Related Issue/Discussion

<!-- Link to any related issues, discussions, or requests -->

References #<!-- issue number -->

## 📝 Change Details

### Rule Information

**Rule Name:** <!-- e.g., noImplicitBoolean, useArrowFunction -->

**Rule Category:** <!-- e.g., style, correctness, complexity -->

**Documentation:** <!-- Link to Biome docs, e.g., https://biomejs.dev/linter/rules/use-arrow-function/ -->

### Configuration Changes

**From:**

```typescript
// Current configuration
```

**To:**

```typescript
// New configuration
```

### Change Type

- [ ] Severity change (off/warn/error)
- [ ] Options modification
- [ ] Both severity and options
- [ ] Rule removal

## 📋 Affected Configurations

<!-- Check all configurations modified by this change -->
<!-- Remember: changes cascade (base affects all, frontend affects react/next) -->

- [ ] Base (`@cookielab.io/biome-config/dist/base.json`)
- [ ] Frontend (`@cookielab.io/biome-config/dist/frontend.json`)
- [ ] React (`@cookielab.io/biome-config/dist/react.json`)
- [ ] Next (`@cookielab.io/biome-config/dist/next.json`)
- [ ] GraphQL (`@cookielab.io/biome-config/dist/graphql.json`)
- [ ] Node (`@cookielab.io/biome-config/dist/node.json`)

## 🎯 Rationale

### Why This Change?

<!-- Explain the motivation for this change -->

### Impact Analysis

**Positive Impact:**

<!-- What improvements does this bring? -->

**Potential Concerns:**

<!-- Any downsides or risks? -->

### Breaking Change Assessment

- [ ] Non-breaking (existing code remains valid)
- [ ] Potentially breaking (some code may need updates)
- [ ] Breaking (will require code changes)

<!-- If breaking, estimate the scope of required changes -->

## 📝 Code Examples

### Example 1: Current vs Proposed Behavior

**Current behavior (problematic):**

```typescript
// Show code that demonstrates why the current rule setting needs changing
```

**New behavior (improved):**

```typescript
// Show how the same code will be handled with the new configuration
```

### Example 2: Edge Cases

<!-- If applicable, show edge cases or special scenarios -->

```typescript
// Edge case example
```

## ✅ Testing

### Validation Performed

- [ ] Tested with sample projects
- [ ] Verified no unexpected side effects
- [ ] Checked compatibility with existing codebases
- [ ] Confirmed rule
      behaves as documented

### Test Projects Used

<!-- List any projects or code samples used for testing -->

1. <!-- Project/sample 1 -->
2. <!-- Project/sample 2 -->

### Migration Testing

<!-- How did you verify the migration path for existing users? -->

## 🔍 Code Review Focus

### Key Considerations

<!-- Help reviewers by highlighting important aspects -->

1. <!-- Consideration 1 -->
2. <!-- Consideration 2 -->

### Files Modified

<!-- List the key files changed -->

- `biome/src/rules/[config].ts` - <!-- specific line/section -->
- <!-- Other files -->

## 📚 Documentation

### Documentation Updates

- [ ] Updated rule configuration docs
- [ ] Updated migration guide
- [ ] Added examples to README
- [ ] Updated changelog
- [ ] No documentation changes needed

### User Communication

<!-- How should this change be communicated to users? -->

- [ ] Requires announcement in release notes
- [ ] Requires migration guide
- [ ] Can be mentioned as improvement
- [ ] No special communication needed

## ✔️ Checklist

### Author Checklist

- [ ] I have tested this change thoroughly
- [ ] I have considered the impact on all extending configurations
- [ ] I have verified this aligns with project's strict coding standards
- [ ] I have updated relevant documentation
- [ ] I have added appropriate examples
- [ ] I have checked for unintended side effects

### Reviewer Checklist

- [ ] Rule change is justified and well-explained
- [ ] Impact assessment is accurate
- [ ] Breaking changes are properly documented
- [ ] Configuration syntax is correct
- [ ] Change aligns with project philosophy

## 📊 Additional Notes

<!-- Any additional context, benchmarks, or information -->

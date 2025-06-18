<!--
This template is for merge requests that implement new features or enable currently disabled rules.
Please fill out all sections to help reviewers understand your implementation.
-->

## ✨ Feature Implementation

### Summary

<!-- Provide a brief description of the feature being implemented -->

### Related Issue/Request

<!-- Link to the feature request or issue this MR implements -->

Implements #<!-- issue number -->

## 📝 Implementation Details

### Feature Type

<!-- Select one -->

- [ ] Enable a currently disabled Biome rule
- [ ] New configuration preset (e.g., "vue.json", "svelte.json")
- [ ] New build/tooling feature
- [ ] Documentation enhancement
- [ ] Other: <!-- please specify -->

### What's New

<!-- Describe what this feature adds or changes -->

### Technical Approach

<!-- Explain your implementation approach and key decisions -->

## 📋 Configuration Changes

### For Rule Enablement

<!-- Complete this section only if enabling a currently disabled rule -->

**Rule Name:** <!-- e.g., useImportExtensions -->

**Configuration:**

```typescript
// Show the actual configuration being added
```

### Affected Configurations

<!-- Check all configurations modified by this feature -->

- [ ] Base (`@cookielab.io/biome-config/dist/base.json`)
- [ ] Frontend (`@cookielab.io/biome-config/dist/frontend.json`)
- [ ] React (`@cookielab.io/biome-config/dist/react.json`)
- [ ] Next (`@cookielab.io/biome-config/dist/next.json`)
- [ ] GraphQL (`@cookielab.io/biome-config/dist/graphql.json`)
- [ ] Node (`@cookielab.io/biome-config/dist/node.json`)
- [ ] New configuration: <!-- specify name -->

## 🎯 Usage Examples

### Example 1: Basic Usage

```typescript
// Show how to use this feature
```

### Example 2: Advanced Usage

```typescript
// Show more complex usage if applicable
```

## ✅ Testing

### Test Coverage

- [ ] Added unit tests
- [ ] Added integration tests
- [ ] Added example project
- [ ] Manual testing only (explain why below)

### Test Scenarios

<!-- List the scenarios you've tested -->

1. <!-- Scenario 1 -->
2. <!-- Scenario 2 -->
3. <!-- etc. -->

### Verification Steps

<!-- Steps for reviewers to verify the feature works -->

1. <!-- First step -->
2. <!-- Second step -->
3. <!-- etc. -->

## 🔄 Migration & Compatibility

### Breaking Changes

- [ ] No breaking changes
- [ ] Breaking changes (describe below)

<!-- If breaking changes, describe migration path -->

### Biome Version Requirements

- [ ] Compatible with current Biome stable (1.9.x)
- [ ] Requires Biome 2.0 beta
- [ ] Requires specific Biome version: <!-- specify -->

### Backward Compatibility

<!-- Explain how this affects existing users -->

## 🔍 Code Review Focus

### Key Files

<!-- List the most important files for reviewers -->

- `path/to/file1.ts` - <!-- brief description -->
- `path/to/file2.ts` - <!-- brief description -->

### Design Decisions

<!-- Highlight important design decisions that need review -->

1. <!-- Decision 1 -->
2. <!-- Decision 2 -->

### Performance Considerations

- [ ] No performance impact
- [ ] May increase linting time (estimated: <!-- time -->)
- [ ] Improves performance
- [ ] Performance impact unknown

## 📚 Documentation

### Documentation Updates

- [ ] Updated README
- [ ] Updated configuration documentation
- [ ] Added usage examples
- [ ] Updated changelog
- [ ] No documentation needed

### User-Facing Changes

<!-- Describe what users need to know -->

## ✔️ Checklist

### Author Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have added tests for the new functionality
- [ ] All tests pass locally
- [ ] I have updated relevant documentation
- [ ] I have considered edge cases and error handling
- [ ] I have checked for any security implications

### Reviewer Checklist

- [ ] Implementation matches the feature request
- [ ] Code is impact is acceptable

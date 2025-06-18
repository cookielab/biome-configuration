<!--
This template is for merge requests that fix bugs.
Please fill out all sections to help reviewers understand your changes.
-->

## 🐛 Bug Fix

### Summary

<!-- Provide a brief description of the bug being fixed -->

### Related Issue

<!-- Link to the issue this MR fixes -->

Fixes #<!-- issue number -->

## 📝 Changes Made

### Description

<!-- Describe the changes you've made to fix the bug -->

### Root Cause

<!-- Explain what was causing the bug -->

### Solution Approach

<!-- Explain your approach to fixing the bug -->

## 📋 Affected Configurations

<!-- Check all configurations affected by this fix -->

- [ ] Base (`@cookielab.io/biome-config/dist/base.json`)
- [ ] Frontend (`@cookielab.io/biome-config/dist/frontend.json`)
- [ ] React (`@cookielab.io/biome-config/dist/react.json`)
- [ ] Next (`@cookielab.io/biome-config/dist/next.json`)
- [ ] GraphQL (`@cookielab.io/biome-config/dist/graphql.json`)
- [ ] Node (`@cookielab.io/biome-config/dist/node.json`)

## ✅ Testing

### Test Coverage

<!-- Describe the tests you've added or modified -->

- [ ] Added unit tests
- [ ] Added integration tests
- [ ] Updated existing tests
- [ ] Manual testing only (explain why below)

### Testing Steps

<!-- Steps to verify the fix works -->

1. <!-- First step -->
2. <!-- Second step -->
3. <!-- etc. -->

### Before/After Behavior

**Before (Bug):**

```typescript
// Show example of buggy behavior
```

**After (Fixed):**

```typescript
// Show example of fixed behavior
```

## 🔍 Code Review Focus

<!-- Help reviewers by pointing out areas that need special attention -->

### Key Changes

<!-- List the most important files/changes to review -->

-
-
-

### Potential Risks

<!-- Identify any risks or areas of concern -->

- [ ] Breaking change (requires major version bump)
- [ ] May affect existing configurations
- [ ] Performance implications
- [ ] None identified

## 📚 Documentation

- [ ] Updated relevant documentation
- [ ] Added/updated code comments
- [ ] No documentation changes needed

## ✔️ Checklist

### Author Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have added tests that prove my fix is effective
- [ ] New and existing tests pass locally
- [ ] I have updated the changelog (if applicable)
- [ ] I have checked for any breaking changes

### Reviewer Checklist

- [ ] Code changes are clear and well-structured
- [ ] Tests adequately cover the bug fix
- [ ] No unintended side effects identified
- [ ] Documentation is updated appropriately

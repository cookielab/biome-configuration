# GitHub Templates

Simple templates for issues and pull requests to keep contributions focused and clear.

## Issue Templates

- **Bug Report** - Report something that's broken
- **Feature Request** - Request new features or enable disabled rules
- **Rule Change Request** - Request changes to existing rule configurations

## Pull Request Templates

- **Default** - General purpose template (`pull_request_template.md`)
- **Bug Fix** - For fixing bugs (`PULL_REQUEST_TEMPLATE/bug_fix.md`)
- **New Feature** - For adding features or enabling rules (`PULL_REQUEST_TEMPLATE/new_feature.md`)
- **Rule Change** - For modifying existing rules (`PULL_REQUEST_TEMPLATE/rule_change.md`)

## Usage

### Issues
Click "New Issue" and select the appropriate template.

### Pull Requests
The default template loads automatically. For specific templates:
- Add `?template=bug_fix.md` to the PR URL
- Or manually copy from `PULL_REQUEST_TEMPLATE/`

## Configuration Hierarchy

Remember that changes cascade:
```
base.json
├── frontend.json
│   ├── react.json
│   │   └── next.json
├── graphql.json
└── node.json
```

Changes to parent configs affect all children.

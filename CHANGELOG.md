# @cookielab.io/biome-config

## 0.6.0

### Rule Changes

- ## Change
  - `"useLiteralKeys": "off"` disabled in `base.complexity` due to clashes with a strict Typescript config. When accessing `Record<string, unknown>`, index-access is preferred.
  - `"noSecrets": "off"` disabled in `base.nursery` due to too many false-positives
  - `"noUnresolvedImports": "off"` disabled in `base.nursery` due to too many false-positives

### Assist Changes

- ## Change
  - `"useSortedAttributes": "off"` disabled as manual sorting is preferred.
  - `"useSortedKeys": "off"` disabled as manual sorting is preferred.
  - `"useSortedProperties": "off"` disabled as manual sorting is preferred.

## 0.5.0

### General Changes

- Update Biome to `2.1.2`

### Rule Changes

- ## New
  - `"noVueReservedProps": "off"` added to `base.nursery`

## 0.4.0

### General Changes

- Update Biome to `2.0.11`

### Rule Changes

- ## New:
  - `"noMagicNumbers": "warn"` added to `base.nursery`
  - `"noMisusedPromises": "error"` added to `base.nursery`

## 0.3.1

### General Changes

- Rename `LICENSE.md` to `LICENSE`

## 0.3.0

### General Changes

- Update Biome to `2.0.6`
- Loosen up the peer-dependency of Biome from strictly the same version to `>=`

### Rule Changes

- ## New:
  - `"noExcessiveLinesPerFunction": "off"` added to `base.nursery`
  - `"noImplicitConversion": "error"` added to `base.nursery`
  - `noUnassignedVariables": "error"` added to `base.nursery`
  - `"useUnifiedTypeSignature": "warn"` added to `base.nursery`
  - `"noAlert": "error"` added to `frontend.suspicious`

## 0.2.0

### Major Changes

- Update Biome to `2.0.4`
- Add `useReadonlyClassProperties` rule to `base`

## 0.1.0

### Major Changes

- Remove the NodeJS version requirement from `package.json`

## 0.0.8

### Documentation Changes

- Remove the beta notice from the README

## 0.0.7

### Major Changes

- Upgrade from Biome Beta to release version of 2.0.0

# @cookielab.io/biome-config

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

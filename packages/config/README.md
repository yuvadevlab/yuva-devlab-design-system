# ⚙️ @yuva-devlab/config

Shared configuration packages used across the monorepo.

Includes:

- **@yuva-devlab/typescript-config**
- **@yuva-devlab/eslint-config**
- **@yuva-devlab/prettier-config**

---

## 🧩 Why this exists

To centralize workspace-wide configurations:

- Enforce the same TypeScript rules everywhere
- Enforce the same ESLint rules everywhere
- Avoid duplicated configs
- Improve repo maintainability

---

## 📦 Packages

### TypeScript Config

Located at:

`packages/config/typescript-config`

Usage:

```json
{
  "extends": "@yuva-devlab/typescript-config/base.json"
}
```

## ESLint Config

Located at:

`packages/config/eslint-config`

Usage:

```json
{
  "extends": "@yuva-devlab/eslint-config"
}
```

## Prettier Config

Located at:

`packages/config/prettier-config`

Usage:

```json
{
  "prettier": "@yuva-devlab/prettier-config"
}
```

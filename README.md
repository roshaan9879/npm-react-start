# ⚛️ npm-react-start

A minimal starter template for creating React libraries with TypeScript. Build components, hooks, utilities, and more.

## ✨ Features

- ⚛️ **React** - Build reusable React code (components, hooks, utilities) with JSX
- 🔷 **TypeScript** - Full type safety with automatic declaration generation
- ⚡ **tsdown** - Fast bundling powered by Rolldown
- 🧪 **Bun Test** - Fast built-in test runner with Happy DOM
- 🧩 **React Testing Library** - Testing for components and hooks with user-centric queries
- 🎨 **Ultracite** - Zero-config linting and formatting with Oxlint + Oxfmt
- 📦 **ESM** - Ships as ES modules with TypeScript declarations
- 🚀 **GitHub Actions** - CI/CD pipeline with automated testing and npm publishing
- 🐶 **Husky** - Pre-commit hooks for code quality enforcement
- 📝 **Commitlint** - Conventional commit message validation

## 🚀 Getting Started

1. Clone or use this template:

```bash
git clone https://github.com/dobroslavradosavljevic/npm-react-start.git my-react-library
cd my-react-library
```

2. Update `package.json` with your package name, description, and author info.

3. Install dependencies:

```bash
bun install
```

4. Start developing in `src/index.tsx`.

## 📋 Requirements

- **Bun** 1.3.6+ (for development and testing)
- **Node.js** 22+ (enforced via `engines` field; 24+ used in CI/CD for publishing)

## 📦 Peer Dependencies

This starter is configured for React libraries. Consumers of your package must have React installed:

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

React is listed as a **peer dependency** so consumers use their own React version. It is also in **devDependencies** so tests and development work locally.

## 📜 Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `bun run build`     | Build the package                   |
| `bun run dev`       | Build in watch mode                 |
| `bun run test`      | Run tests                           |
| `bun run lint`      | Check for linting issues            |
| `bun run format`    | Fix linting and formatting issues   |
| `bun run typecheck` | Run TypeScript type checking        |
| `bun run bump`      | Bump version and generate changelog |

## 📁 Project Structure

```txt
├── src/
│   └── index.tsx         # Package entry point (components, hooks, utilities)
├── tests/
│   ├── index.test.tsx    # Tests (React Testing Library)
│   └── setup.ts          # Test setup (Happy DOM)
├── dist/                 # Build output (generated)
├── .github/
│   └── workflows/
│       ├── ci.yml        # CI pipeline (lint, test, build)
│       └── release.yml   # Automated npm publishing
├── .husky/
│   ├── pre-commit        # Runs lint-staged before commits
│   └── commit-msg        # Validates commit messages
├── tsdown.config.ts      # Build configuration
├── tsconfig.json         # TypeScript configuration
├── commitlint.config.ts  # Commit message rules
├── bunfig.toml          # Bun test configuration
├── .oxlintrc.json       # Oxlint configuration
├── .oxfmtrc.jsonc       # Oxfmt configuration
├── CONTRIBUTING.md      # Contribution guidelines
└── package.json
```

## 🐶 Git Hooks

This template uses Husky for Git hooks:

- **pre-commit**: Runs `lint-staged` to lint and format staged files
- **commit-msg**: Validates commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)

### Commit Message Format

```
type(scope): description

# Examples:
feat: add new feature
fix: resolve bug in parser
docs: update README
chore: update dependencies
```

**Rules**: Header and body max length is 200 characters (configured in `commitlint.config.ts`).

## 🔄 CI/CD

### Continuous Integration

On every push to `main` and pull request, the CI workflow runs:

- ✅ Lint check
- ✅ Type check
- ✅ Tests
- ✅ Build

Uses **Bun 1.3.8** for all operations.

### Automated Releases

When you push a version tag (`v*`), the release workflow:

1. Runs the CI workflow (lint, typecheck, build, test)
2. Publishes to npm with provenance (using Node.js 24)
3. Creates a GitHub release with auto-generated notes

### Setup for Publishing (Trusted Publishing)

This template uses [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) with OIDC - no tokens required.

1. Go to [npmjs.com](https://www.npmjs.com) and navigate to your package settings
2. Under **Publishing access**, click **Add trusted publisher**
3. Configure GitHub Actions as the trusted publisher:
   - **Repository owner**: your GitHub username or org
   - **Repository name**: your repo name
   - **Workflow file**: `release.yml`
   - **Environment** (optional): leave blank

That's it - no secrets or tokens to manage. The workflow uses short-lived OIDC credentials that are automatically generated for each run.

## 🚢 Publishing

1. Bump the version (creates a tag):

```bash
bun run bump
```

2. Push the tag to trigger the release workflow:

```bash
git push --tags
```

Or publish manually:

```bash
npm publish --provenance --access public
```

Note: The release workflow uses `npm publish` (not `bun publish`) for npm Trusted Publishing compatibility.

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this project.

## 📄 License

MIT

# How to Publish to npm

This guide covers how to publish a new version of `react-snow-overlay` to npm.

## Prerequisites

1. **Ensure you're logged in to npm:**
   ```bash
   npm whoami
   ```
   
   If not logged in, run:
   ```bash
   npm login
   ```
   Follow the browser prompt to authenticate.

2. **Have your 2FA authenticator ready** - npm requires a one-time password for publishing.

## Publishing Steps

### 1. Update the Version

Choose the appropriate version bump based on the changes:

```bash
# For bug fixes (1.0.14 → 1.0.15)
npm version patch

# For new features (1.0.14 → 1.1.0)
npm version minor

# For breaking changes (1.0.14 → 2.0.0)
npm version major
```

**Or manually edit** the `version` field in `/package.json` (root level, not the one in `packages/react-snow-overlay/`).

### 2. Build the Package

The build happens automatically before publishing (via `prepublishOnly` hook), but you can test it manually:

```bash
pnpm build
```

This will:
- Build the package with Turbo
- Copy the dist files from `packages/react-snow-overlay/dist/` to `./dist/`

### 3. Verify What Will Be Published (Optional)

Run a dry-run to see exactly what files will be included:

```bash
npm pack --dry-run
```

You should see only these files:
- LICENSE
- README.md
- dist/index.d.ts
- dist/index.es.js
- dist/index.umd.js
- package.json

**Note:** The `packages/docs` folder should NOT be in the output.

### 4. Publish to npm

```bash
npm publish --otp=YOUR_2FA_CODE
```

Replace `YOUR_2FA_CODE` with the 6-digit code from your authenticator app.

If you forget the `--otp` flag, npm will prompt you and you can run it again with the code.

### 5. Verify the Publication

Check that the package is live:

```bash
npm view react-snow-overlay
```

Or visit: https://www.npmjs.com/package/react-snow-overlay

## Quick Reference

**Complete workflow in one go:**

```bash
# 1. Bump version
npm version patch

# 2. Publish (build happens automatically)
npm publish --otp=YOUR_2FA_CODE
```

## Troubleshooting

### "Cannot publish over previously published version"

You're trying to publish a version that already exists. Bump the version number and try again.

### "This operation requires a one-time password"

Add the `--otp` flag with your 2FA code:
```bash
npm publish --otp=123456
```

### "Git working directory not clean"

If `npm version` fails due to uncommitted changes, either:
- Commit your changes first, or
- Manually edit the version in `package.json`

### "Not logged in" / "401 Unauthorized"

Run `npm login` to authenticate.

### Module not found after publishing

This was fixed in v1.0.14. The issue was incorrect file paths in `package.json`. The root `package.json` must have:
- `"main": "dist/index.umd.js"`
- `"module": "dist/index.es.js"`
- `"types": "dist/index.d.ts"`

**NOT** `packages/react-snow-overlay/dist/...`

## Package Configuration Notes

- The **root `package.json`** is what gets published (not `packages/react-snow-overlay/package.json`)
- The `files` field ensures only the `dist/` folder is published
- `.npmignore` additionally excludes `packages/docs`
- The `prepublishOnly` script automatically builds before publishing
- The build script copies files from `packages/react-snow-overlay/dist/` to root `dist/`

## After Publishing

Don't forget to:
1. Commit and push the version bump to git
2. Create a git tag for the release (optional)
3. Update any projects using the package:
   ```bash
   npm install react-snow-overlay@latest
   ```


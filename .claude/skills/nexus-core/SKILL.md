```markdown
# nexus-core Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `nexus-core` TypeScript codebase. It covers file organization, import/export styles, commit message conventions, and testing patterns. By following these guidelines, contributors can ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- **Style:** kebab-case
- **Example:**  
  ```
  user-service.ts
  data-access-layer.ts
  ```

### Import Style
- **Relative imports** are used throughout the codebase.
- **Example:**
  ```typescript
  import { fetchUser } from './user-service';
  ```

### Export Style
- **Named exports** are preferred over default exports.
- **Example:**
  ```typescript
  // user-service.ts
  export function fetchUser(id: string) { ... }
  ```

### Commit Messages
- **Conventional commit** format is used.
- **Prefix:** `build`
- **Example:**
  ```
  build: update dependencies for security patches
  ```

## Workflows

### Build Workflow
**Trigger:** When you need to update dependencies, configure the build, or prepare for deployment  
**Command:** `/build`

1. Make necessary changes to dependencies or build configuration files.
2. Commit your changes using the conventional commit format with the `build` prefix:
   ```
   build: update dependency xyz to v1.2.3
   ```
3. Run the build process (if applicable):
   ```
   npm run build
   ```
4. Verify that the build completes successfully and all tests pass.

## Testing Patterns

- **Test Files:** Named with the pattern `*.test.*` (e.g., `user-service.test.ts`)
- **Testing Framework:** Not explicitly detected; use the project's standard test runner (commonly Jest or similar for TypeScript).
- **Example:**
  ```typescript
  // user-service.test.ts
  import { fetchUser } from './user-service';

  test('fetchUser returns correct user', () => {
    const user = fetchUser('123');
    expect(user.id).toBe('123');
  });
  ```

## Commands
| Command   | Purpose                                            |
|-----------|----------------------------------------------------|
| /build    | Run the build workflow for dependency or config changes |
```

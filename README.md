# Jerrypop

This repository contains the source code for [jerrypop.com](https://jerrypop.com).

## Scripts

### `pnpm dev`

Runs the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm test`

Launch the unit test runner in interactive watch mode.

### `pnpm build`

Build the application for production.

### `pnpm start`

Run the application in production mode based on the latest execution of `pnpm build`.

### `pnpm lint`

Execute static analysis for the application source code.

### `pnpm type-check`

Execute static analysis for TypeScript compilation errors.

### `pnpm e2e`

Execute all end-to-end tests against the application being served locally. [Options](https://docs.cypress.io/guides/guides/command-line#cypress-run) can be specified via command line arguments.

```bash
# Execute the tests specified in `cypress/e2e/application.cy.ts`
pnpm e2e --spec "cypress/e2e/application.cy.ts"
```

### `pnpm e2e:open`

Open the end-to-end testing application, allowing selective execution of specific tests and modules against the application being served locally. This technique exposes more information that can be useful for debugging.

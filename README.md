# Jerrypop

This repository contains the source code for [jerrypop.com](https://jerrypop.com). This project was bootstrapped with [Create React App](https://createreactapp.dev/).

## Scripts

### `pnpm start`

Runs the application in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will automatically reload if you make edits.

### `pnpm test`

Launches the test runner in the interactive watch mode.

### `pnpm build`

Builds the application for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `pnpm lint`

Execute static analysis for the application source code, displaying any issues in the terminal.

### `pnpm e2e`

Execute all end-to-end tests against the application being served locally via `pnpm start`. [Options](https://docs.cypress.io/guides/guides/command-line#cypress-run) can be specified via command line arguments, like so:

```bash
# Execute the tests specified in `cypress/e2e/application.cy.js`
pnpm e2e --spec "cypress/e2e/application.cy.js"
```

### `pnpm e2e:open`

Open the end-to-end testing application, allowing selective execution of specific tests and modules against the application being served locally via `pnpm start`. This technique exposes more information that can be useful for debugging.

## Miscellaneous commands

### Clear stale branches locally

1. Switch to main convergence branch via `git checkout main`
1. Delete stale remote branches via `git fetch && git remote prune origin`
1. Delete stale local branches via `git branch --merged | egrep -v main | xargs git branch -d`

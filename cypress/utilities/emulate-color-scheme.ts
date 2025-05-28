// https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setEmulatedMedia

export function emulateMediaColorScheme(scheme: 'light' | 'dark') {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Emulation.setEmulatedMedia',
      params: {
        media: 'page',
        features: [
          {
            name: 'prefers-color-scheme',
            value: scheme,
          },
        ],
      },
    }),
  );
}

export function resetMediaColorScheme() {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Emulation.setEmulatedMedia',
      params: {
        media: '',
        features: [],
      },
    }),
  );
}

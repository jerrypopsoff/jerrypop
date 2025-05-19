export const DARK_MODE_OPTIONS = {
  onBeforeLoad(win: Cypress.AUTWindow) {
    cy.stub(win, 'matchMedia')
      .withArgs('(prefers-color-scheme: dark)')
      .returns({
        addListener: () => {},
        matches: true,
      });
  },
};

export const LIGHT_MODE_OPTIONS = {
  onBeforeLoad(win: Cypress.AUTWindow) {
    cy.stub(win, 'matchMedia')
      .withArgs('(prefers-color-scheme: dark)')
      .returns({
        addListener: () => {},
        matches: false,
      });
  },
};

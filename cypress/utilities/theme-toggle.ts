import { THEMES } from '../../src/constants/theme';

export function verifyThemeToggle(toggleButtonSelector: string) {
  // Allow initial background-color CSS to load.
  cy.wait(300);

  // Ensure theme rotation wraps properly back to original theme.
  const rotationCount = THEMES.length + 1;
  for (let i = 0; i < rotationCount; ++i) {
    cy.get('section')
      .first()
      .invoke('css', 'background-color')
      // eslint-disable-next-line no-loop-func
      .then((previousBackgroundColor) => {
        cy.get(toggleButtonSelector).click();
        cy.get('body').should(
          'not.have.css',
          'background-color',
          previousBackgroundColor,
        );
      });
  }
}

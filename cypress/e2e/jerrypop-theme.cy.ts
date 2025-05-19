import { RoutePath } from '../types/route-path';
import { THEMES } from '../../src/constants/theme';
import { DARK_MODE_OPTIONS, LIGHT_MODE_OPTIONS } from '../constants/dark-mode';

describe('Jerrypop theme tests', () => {
  it('initializes the default theme in light mode', () => {
    cy.visit(RoutePath.Home, LIGHT_MODE_OPTIONS);

    cy.root().should(
      'have.attr',
      'style',
      '--main-theme-dark: rgb(0, 114, 218); --main-theme-medium: rgb(255, 64, 158); --theme-text-on-dark: rgb(255, 255, 255); --theme-text-on-medium: rgb(255, 255, 255); color-scheme: light;',
    );
  });

  it('initializes the default theme in dark mode', () => {
    cy.visit(RoutePath.Home, DARK_MODE_OPTIONS);

    cy.root().should(
      'have.attr',
      'style',
      '--main-theme-dark: rgb(0, 114, 218); --main-theme-medium: rgb(255, 64, 158); --theme-text-on-dark: rgb(255, 255, 255); --theme-text-on-medium: rgb(255, 255, 255); color-scheme: dark;',
    );
  });

  it('allows theme rotation in light mode', () => {
    cy.visit(RoutePath.Home, LIGHT_MODE_OPTIONS);

    /**
     * Allow client-side application to mount, which enables the click handler
     * for the theme rotation button.
     */
    cy.wait(200);

    // Ensure theme rotation wraps properly back to original theme.
    const rotationCount = THEMES.length + 1;
    for (let i = 0; i < rotationCount; ++i) {
      const theme = THEMES[i % THEMES.length];

      // Verify repeating wordmark has correct fill color.
      cy.get('footer svg')
        .eq(0)
        .should('exist')
        .within(() => {
          cy.get('g').should('have.attr', 'fill', theme.mainThemeMedium);
        });

      // Verify footer has correct background color.
      cy.get('footer > div')
        .first()
        .should('have.css', 'background-color', theme.mainThemeDark);

      // Rotate to next theme.
      cy.get('button[aria-label="Change website theme colors"]').click();
    }
  });

  it('allows theme rotation in dark mode', () => {
    cy.visit(RoutePath.Home, DARK_MODE_OPTIONS);

    /**
     * Allow client-side application to mount, which enables the click handler
     * for the theme rotation button.
     */
    cy.wait(200);

    // Ensure theme rotation wraps properly back to original theme.
    const rotationCount = THEMES.length + 1;
    for (let i = 0; i < rotationCount; ++i) {
      const theme = THEMES[i % THEMES.length];

      // Verify repeating wordmark has correct fill color.
      cy.get('footer svg')
        .eq(0)
        .should('exist')
        .within(() => {
          cy.get('g').should('have.attr', 'fill', theme.mainThemeMedium);
        });

      // Verify footer has correct background color.
      cy.get('footer > div')
        .first()
        .should('have.css', 'background-color', 'rgb(27, 54, 95)');

      // Rotate to next theme.
      cy.get('button[aria-label="Change website theme colors"]').click();
    }
  });
});

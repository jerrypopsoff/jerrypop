import { RoutePath } from '../types/route-path';
import { THEMES } from '../../src/constants/theme';
import {
  emulateMediaColorScheme,
  resetMediaColorScheme,
} from '../utilities/emulate-color-scheme';

describe('Jerrypop theme tests', () => {
  afterEach(() => {
    resetMediaColorScheme();
  });

  it('initializes the default theme in light mode', () => {
    emulateMediaColorScheme('light');
    cy.visit(RoutePath.Home);

    cy.root().should('have.css', '--main-theme-dark', 'rgb(0, 114, 218)');
    cy.root().should('have.css', '--main-theme-medium', 'rgb(255, 64, 158)');
    cy.root().should(
      'have.css',
      '--theme-text-on-medium',
      'rgb(255, 255, 255)',
    );

    cy.get('img:not([src*=".svg"])').should('have.css', 'filter', 'none');
  });

  it('initializes the default theme in dark mode', () => {
    emulateMediaColorScheme('dark');
    cy.visit(RoutePath.Home);

    cy.root().should('have.css', '--main-theme-dark', 'rgb(0, 114, 218)');
    cy.root().should('have.css', '--main-theme-medium', 'rgb(255, 64, 158)');
    cy.root().should(
      'have.css',
      '--theme-text-on-medium',
      'rgb(255, 255, 255)',
    );

    cy.get('img:not([src*=".svg"])').should(
      'have.css',
      'filter',
      'grayscale(0.15)',
    );
  });

  it('allows theme rotation in light mode', () => {
    emulateMediaColorScheme('light');
    cy.visit(RoutePath.Home);

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
    emulateMediaColorScheme('dark');
    cy.visit(RoutePath.Home);

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

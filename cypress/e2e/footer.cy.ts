import { RoutePath } from '../types/route-path';
import { THEMES } from '../../src/constants/theme';
import { DARK_MODE_OPTIONS, LIGHT_MODE_OPTIONS } from '../constants/dark-mode';
import { THEME_NAVY } from '../../src/constants/color';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDarkMode } from '../../src/hooks/use-dark-mode';

describe('footer tests', () => {
  it('displays the appropriate footer content', () => {
    cy.visit(RoutePath.Home);

    cy.get('footer p').should(
      'have.text',
      `© ${new Date().getFullYear()} Jerrypop, LLC`,
    );

    cy.get('footer')
      .find('a')
      .eq(0)
      .should('have.attr', 'href', 'https://www.facebook.com/craftpopcorn/');
    cy.get('footer')
      .find('a')
      .eq(1)
      .should('have.attr', 'href', 'https://www.instagram.com/craftpopcorn/');
    cy.get('footer')
      .find('a')
      .eq(2)
      .should('have.attr', 'href', 'https://www.youtube.com/@craftpopcorn');
    cy.get('footer')
      .find('a')
      .eq(3)
      .should('have.attr', 'href', 'mailto:info@jerrypop.com');
  });

  it('allows users to rotate theme colors in light mode', () => {
    cy.visit(RoutePath.Home, LIGHT_MODE_OPTIONS);

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

  it('allows users to rotate theme colors in dark mode', () => {
    cy.visit(RoutePath.Home, DARK_MODE_OPTIONS);

    /**
     * Allow client-side application to mount, which applies dark mode styles.
     * See {@link useDarkMode} for more details.
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
        .should('have.css', 'background-color', THEME_NAVY);

      // Rotate to next theme.
      cy.get('button[aria-label="Change website theme colors"]').click();
    }
  });
});

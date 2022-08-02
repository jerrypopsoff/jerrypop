import { RoutePath } from '../types/route-path';
import { THEMES } from '../../src/constants/theme';

describe('footer tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Home);
  });

  it('displays the appropriate footer content', () => {
    cy.get('footer p').should(
      'have.text',
      `© ${new Date().getFullYear()} Jerrypop, LLC`,
    );
    cy.get('button[aria-label="Toggle color scheme"]').should('have.length', 1);
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
      .should(
        'have.attr',
        'href',
        'https://www.youtube.com/channel/UC_3oErdLxGZgeTf8nrwsD3A',
      );
  });

  it('toggles the theme of the website', () => {
    // Allow initial CSS to load.
    cy.wait(500);

    // Ensure theme rotation wraps properly back to original theme.
    const rotationCount = THEMES.length + 1;
    for (let i = 0; i < rotationCount; ++i) {
      cy.get('body')
        .invoke('css', 'background-color')
        // eslint-disable-next-line no-loop-func
        .then((initialBackgroundColor) => {
          cy.get('button[aria-label="Toggle color scheme"]').click();
          cy.get('body').should(
            'not.have.css',
            'background-color',
            initialBackgroundColor,
          );
        });
    }
  });
});

import { RoutePath } from '../types/route-path';

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
});

import { RoutePath } from '../types/route-path';

describe('footer tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Home);
  });

  it('displays the appropriate footer content', () => {
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
      .should(
        'have.attr',
        'href',
        'https://www.youtube.com/channel/UC_3oErdLxGZgeTf8nrwsD3A',
      );
    cy.get('footer')
      .find('a')
      .eq(3)
      .should('have.attr', 'href', 'mailto:info@jerrypop.com');
  });
});

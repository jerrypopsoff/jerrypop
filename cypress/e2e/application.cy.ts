import { RoutePath } from '../types/route-path';

describe('general application tests', () => {
  it('displays the Jerrypop logo, heading, and footer on every page', () => {
    Object.values(RoutePath).forEach((path) => {
      cy.visit(path);

      cy.get('img[alt="Jerrypop logo"]').should('have.length', 1);
      cy.get('h1').should('have.length', 1);
      cy.get('footer').should('have.length', 1);
    });
  });
});

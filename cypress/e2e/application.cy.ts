import { RoutePath } from '../types/route-path';

describe('general application tests', () => {
  it('displays a page heading and footer on every page', () => {
    Object.values(RoutePath).forEach((path) => {
      cy.visit(path, { failOnStatusCode: path !== RoutePath.NotFound });

      cy.get('h1').should('have.length.least', 1);
      cy.get('footer').should('have.length', 1);
    });
  });
});

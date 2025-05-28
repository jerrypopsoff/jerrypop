import { RoutePath } from '../types/route-path';

describe('application tests', () => {
  it('displays root layout elements on every page', () => {
    Object.values(RoutePath).forEach((path) => {
      cy.visit(path, { failOnStatusCode: path !== RoutePath.NotFound });

      cy.get('nav').should('have.length', 1);
      cy.get('h1').should('have.length.least', 1);
      cy.get('footer').should('have.length', 1);
    });
  });
});

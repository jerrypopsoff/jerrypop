import { RoutePath } from '../types/route-path';

describe('not found page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.NotFound, { failOnStatusCode: false });
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Page Not Found · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Ope!');
  });
});

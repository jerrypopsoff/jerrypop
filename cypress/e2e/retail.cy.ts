import { RoutePath } from '../types/route-path';

describe('retail page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Retail);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Retail · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Retail');
  });
});

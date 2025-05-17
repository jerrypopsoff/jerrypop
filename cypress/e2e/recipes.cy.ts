import { RoutePath } from '../types/route-path';

describe('recipes page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Recipes);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Recipes · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Recipes');
  });
});

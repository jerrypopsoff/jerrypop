import { RoutePath } from '../types/route-path';

describe('ingredients page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Ingredients);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Ingredients · Jerrypop');
  });
});

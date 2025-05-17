import { RoutePath } from '../types/route-path';

describe('products page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Products);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Products · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Products');
  });
});

import { RoutePath } from '../types/route-path';

describe('about page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.About);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'About · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'About');
  });
});

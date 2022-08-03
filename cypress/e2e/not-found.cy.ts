import { RoutePath } from '../types/route-path';

describe('not found page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.NotFound);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Page Not Found · Jerrypop');
  });
});

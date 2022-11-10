import { RoutePath } from '../types/route-path';

describe('retailers page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Retailers);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Retailers · Jerrypop');
  });
});

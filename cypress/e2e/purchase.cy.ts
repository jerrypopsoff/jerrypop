import { RoutePath } from '../types/route-path';

describe('purchase page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Purchase);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Purchase · Jerrypop');
  });
});

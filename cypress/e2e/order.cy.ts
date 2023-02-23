import { RoutePath } from '../types/route-path';

describe('order page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Order);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Order · Jerrypop');
  });
});

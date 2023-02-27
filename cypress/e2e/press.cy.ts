import { RoutePath } from '../types/route-path';

describe('press page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Press);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Press · Jerrypop');
  });
});

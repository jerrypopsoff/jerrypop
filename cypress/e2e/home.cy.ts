import { RoutePath } from '../types/route-path';

describe('home page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Home);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Jerrypop');
  });

  it('displays the correct section headings', () => {
    cy.get('h1').should('have.length', 3);
    cy.get('h1').eq(0).should('have.text', 'Catering');
    cy.get('h1').eq(1).should('have.text', 'Pop-ups');
    cy.get('h1').eq(2).should('have.text', 'Press');
  });
});

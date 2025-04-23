import { RoutePath } from '../types/route-path';

describe('retail page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Retail);
  });

  // Todo: re-enable after migrating to Next.js app router.
  // it('displays the correct page title', () => {
  //   cy.get('title').should('have.text', 'Retail · Jerrypop');
  // });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Retail');
  });
});

import { RoutePath } from '../types/route-path';

describe('not found page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.NotFound);
  });

  // Todo: re-enable after migrating to Next.js app router.
  // it('displays the correct page title', () => {
  //   cy.get('title').should('have.text', 'Page Not Found · Jerrypop');
  // });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Ope!');
  });
});

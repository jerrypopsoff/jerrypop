import { RoutePath } from '../types/route-path';

describe('about page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.About);
  });

  // Todo: re-enable after migrating to Next.js app router.
  // it('displays the correct page title', () => {
  //   cy.get('title').should('have.text', 'About · Jerrypop');
  // });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'About');
  });
});

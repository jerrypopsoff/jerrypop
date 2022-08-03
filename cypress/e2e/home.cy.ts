import { RoutePath } from '../types/route-path';
import { verifyThemeToggle } from '../utilities/theme-toggle';

describe('home page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Home);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Jerrypop');
  });

  it('displays informational text', () => {
    cy.get('#root').should('include.text', 'Poppin’ off with Jerry');
    cy.get('#root').should(
      'include.text',
      'Locally handcrafted popcorn from San Francisco, California.',
    );
  });

  it('toggles the website theme on logo click', () => {
    verifyThemeToggle('img[alt="Jerrypop logo"]');
  });
});

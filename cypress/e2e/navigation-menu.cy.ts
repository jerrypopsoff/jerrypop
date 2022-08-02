import { RoutePath } from '../types/route-path';
import { clickNavigationLink } from '../utilities/navigation-menu';

describe('navigation menu tests', () => {
  it('never presents a link to the current page', () => {
    Object.values(RoutePath).forEach((path) => {
      cy.visit(path);
      cy.get('nav a').should(
        'have.length',
        path === RoutePath.NotFound ? 3 : 2,
      );
      cy.get(`a[href="${path}"]`).should('have.length', 0);
    });
  });

  it('allows navigation to every valid page', () => {
    cy.visit(RoutePath.NotFound);
    cy.url().should('include', RoutePath.NotFound);

    clickNavigationLink(RoutePath.Home);
    cy.url().should('include', RoutePath.Home);

    clickNavigationLink(RoutePath.Purchase);
    cy.url().should('include', RoutePath.Purchase);

    clickNavigationLink(RoutePath.Recipes);
    cy.url().should('include', RoutePath.Recipes);
  });
});

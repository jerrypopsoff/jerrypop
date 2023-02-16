import { RoutePath } from '../types/route-path';
import { clickNavigationLink } from '../utilities/navigation-menu';
import { NAVIGATION_MENU_ITEMS } from '../../src/constants/navigation';

describe('navigation menu tests', () => {
  it('never presents a link to the current page', () => {
    NAVIGATION_MENU_ITEMS.forEach((item) => {
      cy.visit(item.to);
      cy.get('nav a').should('have.length', 3);
      cy.get(`a[href="${item.to}"]`).should('not.exist');
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

    clickNavigationLink(RoutePath.About);
    cy.url().should('include', RoutePath.About);
  });
});

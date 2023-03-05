import { RoutePath } from '../types/route-path';
import { clickNavigationLink } from '../utilities/navigation-menu';
import { NAVIGATION_MENU_ITEMS } from '../../src/constants/navigation';

describe('navigation menu tests', () => {
  it('always presents a link to the current page', () => {
    NAVIGATION_MENU_ITEMS.filter((item) => !item.isExternal).forEach((item) => {
      cy.visit(item.to);
      cy.get('nav a').should('have.length', 14);
      cy.get(`a[href="${item.to}"]`).should('exist');
    });
  });

  it('allows navigation to every valid page', () => {
    cy.visit(RoutePath.NotFound);
    cy.url().should('include', RoutePath.NotFound);

    clickNavigationLink(RoutePath.Home);
    cy.url().should('include', RoutePath.Home);

    clickNavigationLink(RoutePath.Products);
    cy.url().should('include', RoutePath.Products);

    clickNavigationLink(RoutePath.Order);
    cy.url().should('include', RoutePath.Order);

    clickNavigationLink(RoutePath.About);
    cy.url().should('include', RoutePath.About);
  });

  it('allows direct navigation to hidden pages', () => {
    cy.visit(RoutePath.Recipes);
    cy.url().should('include', RoutePath.Recipes);
    cy.get(`nav a[href="${RoutePath.Recipes}"]`).should('not.exist');
  });

  it('exposes a link to the merch store', () => {
    cy.visit(RoutePath.Home);
    cy.get(`a[href="https://www.bonfire.com/store/jerrypop"]`).should('exist');
  });
});

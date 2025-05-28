import { RoutePath } from '../types/route-path';
import { NAVIGATION_MENU_ITEMS } from '../../src/constants/navigation';

describe('navigation menu tests', () => {
  describe('mobile', () => {
    beforeEach(() => {
      cy.viewport(639, 800);
    });

    it('only presents the mobile navigation menu', () => {
      cy.visit(RoutePath.Home);
      cy.get('[data-testid="mobile-nav"]').should('be.visible');
      cy.get('[data-testid="desktop-nav"]').should('not.be.visible');
    });

    it('presents brand wordmark as a link home', () => {
      cy.visit(RoutePath.Home);
      cy.get(
        '[data-testid="mobile-nav"] a[href="/"] > img[alt="Jerrypop brand wordmark"]',
      ).should('be.visible');
    });

    it('opens and closes the navigation menu', () => {
      cy.visit(RoutePath.Home);

      cy.get('[data-testid="mobile-nav"] ul li a').should('not.be.visible');
      cy.get('button[aria-label="Close navigation menu"]').should(
        'not.be.visible',
      );

      // Open the menu.
      cy.get('button[aria-label="Open navigation menu"]').click();

      cy.get('button[aria-label="Open navigation menu"]').should('not.exist');
      cy.get('[data-testid="mobile-nav"] ul li a').should('be.visible');
      cy.get('button[aria-label="Close navigation menu"]').should(
        'have.length',
        2,
      );
      cy.get('button[aria-label="Close navigation menu"]').should('be.visible');

      // Close the menu.
      cy.get('button[aria-label="Close navigation menu"]').first().click();

      // Wait for transition to complete.
      cy.wait(200);

      cy.get('[data-testid="mobile-nav"] ul li a').should('not.be.visible');
      cy.get('button[aria-label="Close navigation menu"]').should(
        'not.be.visible',
      );

      // Reopen the menu to test the other close button.
      cy.get('button[aria-label="Open navigation menu"]').click();

      // Close the menu.
      cy.get('button[aria-label="Close navigation menu"]')
        .first()
        .next()
        .click();

      cy.get('[data-testid="mobile-nav"] ul li a').should('not.be.visible');
      cy.get('button[aria-label="Close navigation menu"]').should(
        'not.be.visible',
      );
    });

    it('always presents a link to the current page', () => {
      NAVIGATION_MENU_ITEMS.filter((item) => !item.isExternal).forEach(
        (item) => {
          cy.visit(item.href);
          cy.get('[data-testid="mobile-nav"] ul li a').should('have.length', 5);
          cy.get(
            `[data-testid="mobile-nav"] ul li a[href="${item.href}"]`,
          ).should('not.be.visible');

          cy.get('button[aria-label="Open navigation menu"]').click();

          cy.get(
            `[data-testid="mobile-nav"] ul li a[href="${item.href}"]`,
          ).should('be.visible');
        },
      );
    });

    it('allows navigation to every valid page', () => {
      cy.visit(RoutePath.NotFound, { failOnStatusCode: false });
      cy.url().should('include', RoutePath.NotFound);

      cy.get('button[aria-label="Open navigation menu"]').click();
      cy.get(
        `[data-testid="mobile-nav"] ul li a[href="${RoutePath.Home}"]`,
      ).click();
      cy.url().should('include', RoutePath.Home);

      cy.get('button[aria-label="Open navigation menu"]').click();
      cy.get(
        `[data-testid="mobile-nav"] ul li a[href="${RoutePath.Products}"]`,
      ).click();
      cy.url().should('include', RoutePath.Products);

      cy.get('button[aria-label="Open navigation menu"]').click();
      cy.get(
        `[data-testid="mobile-nav"] ul li a[href="${RoutePath.Catering}"]`,
      ).click();
      cy.url().should('include', RoutePath.Catering);

      cy.get('button[aria-label="Open navigation menu"]').click();
      cy.get(
        `[data-testid="mobile-nav"] ul li a[href="${RoutePath.About}"]`,
      ).click();
      cy.url().should('include', RoutePath.About);
    });

    it('exposes a link to the merch store', () => {
      cy.visit(RoutePath.Home);
      cy.get('button[aria-label="Open navigation menu"]').click();
      cy.get(
        `[data-testid="mobile-nav"] a[href="https://www.bonfire.com/store/jerrypop"]`,
      ).should('be.visible');
    });
  });

  describe('desktop', () => {
    beforeEach(() => {
      cy.viewport(640, 800);
    });

    it('only presents the desktop navigation menu', () => {
      cy.visit(RoutePath.Home);
      cy.get('[data-testid="mobile-nav"]').should('not.be.visible');
      cy.get('[data-testid="desktop-nav"]').should('be.visible');
    });

    it('presents brand wordmark as a link home', () => {
      cy.visit(RoutePath.Home);
      cy.get(
        '[data-testid="desktop-nav"] a[href="/"] > img[alt="Jerrypop brand wordmark"]',
      ).should('be.visible');
    });

    it('always presents a link to the current page', () => {
      NAVIGATION_MENU_ITEMS.filter((item) => !item.isExternal).forEach(
        (item) => {
          cy.visit(item.href);
          cy.get('[data-testid="desktop-nav"] ul li a').should(
            'have.length',
            5,
          );
          cy.get(
            `[data-testid="desktop-nav"] ul li a[href="${item.href}"]`,
          ).should('be.visible');
        },
      );
    });

    it('allows navigation to every valid page', () => {
      cy.visit(RoutePath.NotFound, { failOnStatusCode: false });
      cy.url().should('include', RoutePath.NotFound);

      cy.get(
        `[data-testid="desktop-nav"] ul li a[href="${RoutePath.Home}"]`,
      ).click();
      cy.url().should('include', RoutePath.Home);

      cy.get(
        `[data-testid="desktop-nav"] ul li a[href="${RoutePath.Products}"]`,
      ).click();
      cy.url().should('include', RoutePath.Products);

      cy.get(
        `[data-testid="desktop-nav"] ul li a[href="${RoutePath.Catering}"]`,
      ).click();
      cy.url().should('include', RoutePath.Catering);

      cy.get(
        `[data-testid="desktop-nav"] ul li a[href="${RoutePath.About}"]`,
      ).click();
      cy.url().should('include', RoutePath.About);
    });

    it('exposes a link to the merch store', () => {
      cy.visit(RoutePath.Home);
      cy.get(
        `[data-testid="desktop-nav"] a[href="https://www.bonfire.com/store/jerrypop"]`,
      ).should('be.visible');
    });
  });
});

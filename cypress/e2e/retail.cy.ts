import { RoutePath } from '../types/route-path';
import { RETAIL_ORDER_FORM_SRC } from '../../src/constants/form';

describe('retail page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Retail);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Retail · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Retail');
  });

  it('displays the order form', () => {
    /**
     * Allow client-side application to mount, which enables the click handler
     * for the order button.
     */
    cy.wait(200);

    cy.get('dialog').should('not.exist');
    cy.get('iframe').should('not.exist');

    cy.get('button').contains('Order').click();

    cy.get('dialog').should('exist');
    cy.get('iframe').should('exist');
    cy.get('iframe').should('have.attr', 'src', RETAIL_ORDER_FORM_SRC);
    cy.get('iframe').should('have.attr', 'title', 'Jerrypop Retail Order Form');

    cy.get('button[aria-label="Close dialog"]').click();

    cy.get('dialog').should('not.exist');
    cy.get('iframe').should('not.exist');
  });
});

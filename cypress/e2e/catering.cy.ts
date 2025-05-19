import { RoutePath } from '../types/route-path';
import { CATERING_ORDER_FORM_SRC } from '../../src/constants/form';

describe('catering page tests', () => {
  beforeEach(() => {
    cy.visit(RoutePath.Catering);
  });

  it('displays the correct page title', () => {
    cy.get('title').should('have.text', 'Catering · Jerrypop');
  });

  it('displays the correct page heading', () => {
    cy.get('h1').should('have.text', 'Catering');
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
    cy.get('iframe').should('have.attr', 'src', CATERING_ORDER_FORM_SRC);
    cy.get('iframe').should(
      'have.attr',
      'title',
      'Jerrypop Catering Order Form',
    );

    cy.get('button[aria-label="Close dialog"]').click();

    cy.get('dialog').should('not.exist');
    cy.get('iframe').should('not.exist');
  });
});

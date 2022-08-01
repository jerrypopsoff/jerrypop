describe('general application tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the Jerrypop logo', () => {
    cy.get('img[alt="Jerrypop logo"]').should('have.length', 1);
  });
});

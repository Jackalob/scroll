describe('infinite scroll', () => {
  it('fetches items on scroll', () => {
    cy.visit('/');

    cy.get('.cy-scroll-loader').scrollTo('bottom');
    cy.get('.cy-loading').should('be.visible');
    cy.get('.cy-loading').should('not.be.visible');

    cy.get('.cy-scroll-loader').scrollTo('bottom');
    cy.get('.cy-loading').should('be.visible');
    cy.get('.cy-loading').should('not.be.visible');
  });
});

export {};

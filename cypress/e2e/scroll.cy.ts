describe('infinite scroll', () => {
  it('fetches photos on scroll', () => {
    cy.visit('/');

    cy.get('.cy-scroll-loader').scrollTo('bottom');
    cy.get('.cy-loading').should('be.visible');
    cy.get('.cy-loading').should('not.be.visible');

    cy.get('.cy-scroll-loader').scrollTo('bottom');
    cy.get('.cy-loading').should('be.visible');
    cy.get('.cy-loading').should('not.be.visible');
  });

  it('fetches photos from api', () => {
    cy.intercept('GET', '/api/list*', (req) => {
      req.reply({ delay: 1000 });
    }).as('photos');

    cy.visit('/');

    cy.get('.cy-scroll-item').should('not.exist');

    cy.wait('@photos');
    cy.get('.cy-scroll-item').should('have.length', 2);
  });
});

export {};

describe('Login teszt', () => {
  it('Login teszt', () => {
    cy.visit('http://localhost:5173');
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Login').click();
    cy.get('#username').type('user22');
    cy.get('#password').type('Titok_12');
    cy.get('button.btn').click();
    cy.get('a').should('contains.text','Védett info');
  })
})
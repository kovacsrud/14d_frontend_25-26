describe('Főoldal teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('h1').should('have.text','User login');
    cy.get('button').should('have.text','Login');
    cy.get('a').should('contains.text','Main');
    cy.get('a.btn').should('have.text','Main');
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Login');
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Register');

  })
})
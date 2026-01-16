describe('Főoldal elemeinek tesztelése', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173');
  })

  it('Cím megjelenik', () => {
     cy.get('h1').should('have.text','User login');
  });
  it('A gomb szövege Login', () => {
     cy.get('button').should('have.text','Login');
  });

  it('A menüben van Main szöveg', () => {
      cy.get('a').should('contains.text','Main');
  });

  it('A menü első linkjének szöveg Main', () => {
      cy.get('a.btn').should('have.text','Main');
  });

  it('A menü második linkjének szöveg Login', () => {
      cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Login');
  });

  it('A menü harmadik linkjének szöveg Register', () => {
      cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Register');
  });

   



})
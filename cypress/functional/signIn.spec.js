describe('Sign In page tests', () => {
  beforeEach( () => {cy.visit(Cypress.env('realWorldApp'))})
    
  it('Login into account with correct data', () => {
    cy.get('#username').type('Katharina_Bernier');
    cy.get('#password').type('s3cret');
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=sidenav-user-full-name]').contains('Edgar J');
  }),

  it('Login into account with incorrect password', () => {
    cy.get('#username').type('Katharina_Bernier');
    cy.get('#password').type('scret');
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=signin-error]').then($div => {
      if ($div.is(':visible')){}
    })
  }),

  it('Login into account with incorrect username', () => {
    cy.get('#username').type('Katharina_Bernie');
    cy.get('#password').type('s3cret');
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=signin-error]').then($div => {
      if ($div.is(':visible')){}
    })
  })

  })
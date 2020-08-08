/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('.type() | character', () => {
    cy.get('.top__search-characters__form__input')
      .type('Walter Walter')
  })

  it('.show() | element return api', () => {
    cy.get('body').then((body) => {
      cy.get('.characters__item')
    });
  }) 

})

describe('existencia da exibição do logotipo(Wikipédia)', () => {
  it('garantindo que o logotipo principal da Wikipedia está visível', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.get('a.mw-logo').should('be.visible')
  })

})
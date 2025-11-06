describe('Teste inicial', () => {
  it('acessando a Wikipédia e verificando o título', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.title().should('include', 'Wikipédia')
  })
})
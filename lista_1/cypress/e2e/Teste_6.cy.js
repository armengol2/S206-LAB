describe('Verificando o teste de falha(Wikipédia)', () => {
  it('Verificando um título errado na página da Wikipedia', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.title().should('include', 'Página Inicial Errada')
  })
})
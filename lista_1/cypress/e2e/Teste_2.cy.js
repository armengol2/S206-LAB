describe('existência do campo de busca(Wikipédia)', () => {
  it('encontrando o campo de busca visível', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.get('input#searchInput').should('exist')
  })
})
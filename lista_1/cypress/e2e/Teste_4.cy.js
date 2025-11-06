describe('existe o link para a versão em inglês(Wikipédia)', () => {
  it('encontrando o idioma "English" entre os idiomas', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.get('a[lang="en"]').should('exist')
  })
})
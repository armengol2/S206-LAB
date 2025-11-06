describe('Verifica o rodapé(Wikipédia)', () => {
  it('verificando se o rodapé contém o link da licença', () => {
    cy.visit('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')
    cy.get('footer').should('exist')
    cy.get('footer').should('contain', 'CC BY-SA')
  })
})
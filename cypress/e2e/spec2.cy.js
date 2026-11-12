describe('Login', () => {
  it.only('Login de sucesso', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia-t')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2425')
    cy.get('#loginbtn').click()
    cy.url().should('eq', 'https://cursos.studios2f.com.br/my/')
    cy.contains('h1','Painel').should('be.visible')

    
  })
  it('Login com falha', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2425')
    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').contains('Suas informações de login podem estar incorretas. Tente novamente.')
  })
})
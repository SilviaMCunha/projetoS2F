/// <reference types="Cypress" />

describe('Login', () => {
  it('Validar Login com sucesso', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia-t')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2425')
    cy.get('#loginbtn').click()
    cy.url().should('eq', 'https://cursos.studios2f.com.br/my/')
    cy.contains('h1','Painel').should('be.visible')
    })
    it('Validar Login incorreto', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2425')
    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').contains('Suas informações de login podem estar incorretas. Tente novamente.')
    })
    it('Validar falha no login por senha incorreta', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia-t')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2')
    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').contains('Suas informações de login podem estar incorretas. Tente novamente.')
    })

    it('Validar falha no login por campo de senha vazio', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type(' ')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type('M@ster2425')
    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').contains('Suas informações de login podem estar incorretas. Tente novamente.')
    })
    it('Validar falha no login por campo de login vazio', () => {
    cy.visit('https://cursos.studios2f.com.br/login/index.php')
    cy.get('.login-form-username > [name="username"]').type('silvia-t')
    cy.get('.toggle-sensitive-wrapper > [name="password"]').type(' ')
    cy.get('#loginbtn').click()
    cy.get('#loginerrormessage').contains('Suas informações de login podem estar incorretas. Tente novamente.')
    })

    it('Validar a redefinição de senha', () => {
    cy.visit('https://cursos.studios2f.com.br/login/forgot_password.php')
    cy.get('[name="username"]').type('silvia-t')
    cy.get('[name="submit"]').click()
    cy.get('.login-container').contains('Se o nome de usuário ou o e-mail estiverem corretos, um e-mail deve ter sido enviado a você.')    
    })

    });
describe('Login', function() {
  // Visita a página inicial antes de cada teste
  beforeEach(function(){
    cy.visit('https://www.saucedemo.com/v1/')
  })

  // Teste de login com credenciais válidas
  it('logar com login valido e senha valida', function() {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })

  // Teste de login com credenciais válidas para usuário problemático
  it('logar com login valido e senha valida - usuário problemático', function() {
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })

  // Teste de login com credenciais válidas para usuário com problema de desempenho
  it('logar com login valido e senha valida - usuário com problema de desempenho', function() {
    cy.get('#user-name').type('performance_glitch_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })

  // Teste de login com senha inválida
  it('logar com login valido e senha invalida', function() {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senhaInvalida', { log: false })
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  // Teste de login com usuário inválido e senha válida
  it('logar com login invalido e senha valida', function() {
    cy.get('#user-name').type('loginInvalido')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  // Teste de login com usuário e senha inválidos
  it('logar com login invalido e senha invalida', function() {
    cy.get('#user-name').type('loginInvalido')
    cy.get('#password').type('senhaInvalid', { log: false })
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  // Teste de login sem preencher usuário e senha
  it('logar sem preencher login e sem senha', function() {
    cy.get('#user-name').type(' ')
    cy.get('#password').type(' ', { log: false })
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  // Teste de login com usuário bloqueado
  it('logar com usuario bloqueado', function() {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})

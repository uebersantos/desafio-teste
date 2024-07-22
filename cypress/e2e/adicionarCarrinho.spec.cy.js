describe('Adicionar produtos', function() {
  beforeEach(function() {
    // Visita a página inicial antes de cada teste
    cy.visit('https://www.saucedemo.com/v1/')
  })

  it('adicionar um item ao carrinho', function() {
    // Realiza login com usuário e senha
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    
    // Verifica se a URL mudou para a página de inventário
    cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
    
    // Adiciona o primeiro item ao carrinho e verifica se o contador do carrinho é atualizado
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.shopping_cart_badge').contains('1')
    
    // Acessa o carrinho e verifica se o item adicionado está presente
    cy.get('#shopping_cart_container').click()
    cy.get('.cart_quantity').contains('1')
    cy.contains('Sauce Labs Backpack').should('exist')
    cy.contains('29.99').should('exist')
  })

  it('adicionar dois itens ao carrinho', function() {
    // Realiza login com usuário e senha
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    
    // Verifica se a URL mudou para a página de inventário
    cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
    
    // Adiciona o primeiro item ao carrinho e verifica se o contador do carrinho é atualizado
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.shopping_cart_badge').contains('1')
    
    // Acessa o carrinho e verifica se o item adicionado está presente
    cy.get('#shopping_cart_container').click()
    cy.get('.cart_quantity').contains('1')
    
    // Continua comprando e adiciona um segundo item ao carrinho
    cy.contains('Continue Shopping').click()
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.shopping_cart_badge').contains('2')
    
    // Acessa o carrinho e verifica se os itens adicionados estão presentes
    cy.get('#shopping_cart_container').click()
    cy.contains('Sauce Labs Backpack').should('exist')
    cy.contains('29.99').should('exist')
    cy.contains('Sauce Labs Bike Light').should('exist')
    cy.contains('9.99').should('exist')
  })
})

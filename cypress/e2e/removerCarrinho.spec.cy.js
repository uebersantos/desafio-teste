describe('Remover do Carrinho', function() {
  // Visita a página inicial antes de cada teste
  beforeEach(function() {
    cy.visit('https://www.saucedemo.com/v1/')
  })

  it('remover item do carrinho', function() {
    // Preenche o campo de nome de usuário e senha, e clica no botão de login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce', { log: false })
    cy.get('#login-button').click()
    
    // Verifica se a URL mudou para a página de inventário
    cy.url().should('equals', 'https://www.saucedemo.com/v1/inventory.html')
    
    // Adiciona o primeiro item ao carrinho
    cy.get('.btn_primary.btn_inventory').eq(0).click()
    cy.get('.shopping_cart_badge').contains('1')
    
    // Abre o carrinho de compras
    cy.get('#shopping_cart_container').click()
    cy.get('.cart_quantity').contains('1')
    
    // Verifica se o item adicionado está no carrinho
    cy.contains('Sauce Labs Backpack').should('exist')
    cy.contains('29.99').should('exist')
    
    // Remove o item do carrinho e verifica se foi removido
    cy.contains('REMOVE').click()
    cy.contains('Sauce Labs Backpack').should('not.exist')
  })
})

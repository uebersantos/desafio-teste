describe('Visualizar produtos', function() {
  beforeEach(function(){
    // Visita a página inicial antes de cada teste
    cy.visit('https://www.saucedemo.com/v1/')
  })

  it('visualização dos nomes de todos os produtos', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Lista dos produtos esperados
      const items = [
          'Sauce Labs Backpack',
          'Sauce Labs Bike Light',
          'Sauce Labs Bolt T-Shirt',
          'Sauce Labs Fleece Jacket',
          'Sauce Labs Onesie',
          'Test.allTheThings() T-Shirt (Red)'
      ]

      // Verifica se todos os produtos estão visíveis
      items.forEach(item => {
          cy.contains('.inventory_item_name', item).should('be.visible')
      })
  })

  it('visualização do produto Sauce Labs Backpack', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_4_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/sauce-backpack-1200x1500.jpg')
      .and('be.visible')
      cy.contains("29.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Sauce Labs Backpack').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/sauce-backpack-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Sauce Labs Backpack").should('be.visible')
      cy.contains("29.99").should('be.visible')
  })

  it('visualização do produto Sauce Labs Bike Light', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_0_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/bike-light-1200x1500.jpg')
      .and('be.visible')
      cy.contains("9.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Sauce Labs Bike Light').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/bike-light-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Sauce Labs Bike Light").should('be.visible')
      cy.contains("9.99").should('be.visible')
  })

  it('visualização do produto Sauce Labs Bolt T-Shirt', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_1_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpg')
      .and('be.visible')
      cy.contains("15.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Sauce Labs Bolt T-Shirt').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Sauce Labs Bolt T-Shirt").should('be.visible')
      cy.contains("15.99").should('be.visible')
  })

  it('visualização do produto Sauce Labs Fleece Jacket', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_5_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/sauce-pullover-1200x1500.jpg')
      .and('be.visible')
      cy.contains("49.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Sauce Labs Fleece Jacket').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/sauce-pullover-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Sauce Labs Fleece Jacket").should('be.visible')
      cy.contains("49.99").should('be.visible')
  })

  it('visualização do produto Sauce Labs Onesie', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_2_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/red-onesie-1200x1500.jpg')
      .and('be.visible')
      cy.contains("7.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Sauce Labs Onesie').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/red-onesie-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Sauce Labs Onesie").should('be.visible')
      cy.contains("7.99").should('be.visible')
  })

  it('visualização do produto Test.allTheThings() T-Shirt (Red)', function() {
      // Realiza login
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce', { log: false })
      cy.get('#login-button').click()

      // Verifica a URL após o login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

      // Verifica a imagem e o preço do produto
      cy.get('#item_3_img_link .inventory_item_img')
      .should('have.attr', 'src', './img/red-tatt-1200x1500.jpg')
      .and('be.visible')
      cy.contains("15.99").should('be.visible')

      // Clica no produto e verifica os detalhes
      cy.contains('Test.allTheThings() T-Shirt (Red)').click()
      cy.get('.inventory_details_container .inventory_details_img')
      .should('have.attr', 'src', './img/red-tatt-1200x1500.jpg')
      .and('be.visible')
      cy.contains("Test.allTheThings() T-Shirt (Red)").should('be.visible')
      cy.contains("15.99").should('be.visible')
  })
})

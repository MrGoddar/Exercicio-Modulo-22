/// <reference types="cypress" />

describe('Funcionalidade Checkout', () => {
    
    it('Deve adicionar produto ao carrinho com sucesso usando AppActions', () => {
    const dadosCheckout = {
        id: '3117',
        slug: 'Aero Daily Fitness Tee', // Exemplo de slug do produto que você viu antes
        nome: 'Matheus'
    }

    cy.finalizarCheckout(dadosCheckout)

    cy.url().should('include', '/carrinho')
    cy.get('.cart-empty').should('not.exist')
});
})
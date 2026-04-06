/// <reference types="cypress" />

describe('Funcionalidade Carrinho - Módulo 23', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2')
        cy.visit('/produtos/')
    });

    it('Deve validar a chamada de API ao adicionar um item no carrinho', () => {
        cy.intercept('POST', '**/wc-ajax=add_to_cart*').as('addCart')

        cy.visit(`/carrinho/?add-to-cart=1824`)

        cy.wait('@addCart').its('response.statusCode').should('eq', 200)
    });

    it('Deve validar a API ao atualizar a quantidade de um item', () => {
        cy.visit(`/carrinho/?add-to-cart=1824`)
        
        cy.intercept('POST', '**/wc-ajax=get_refreshed_fragments*').as('updateCart')

        cy.get('.quantity input').clear().type('2')
        cy.get('.button[name="update_cart"]').click()

        cy.wait('@updateCart').its('response.statusCode').should('eq', 200)
    });

    it('Deve validar a chamada de API ao remover um item do carrinho', () => {
        cy.visit(`/carrinho/?add-to-cart=1824`)

        cy.intercept('GET', '**/?remove_item=*').as('removeItem')

        cy.get('.remove').click()

        cy.wait('@removeItem').its('response.statusCode').should('be.oneOf', [200, 302])
        
        cy.get('.cart-empty').should('be.visible')
    });
});
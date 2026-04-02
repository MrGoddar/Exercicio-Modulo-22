/// <reference types="cypress" />
import cadastroPage from '../support/page-objects/cadastro.page.js'
const { faker } = require('@faker-js/faker');
describe('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cadastroPage.visitar()
    });

    it('Deve completar o cadastro com sucesso', () => {
        // Usando a lógica do Page Object
        cadastroPage.preencherCadastro(
            faker.internet.email(), 
            'teste@123'
        )
        
        // Validação (exemplo)
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    });
});
/// <reference types="cypress" />
import cadastroPage from '../support/page-objects/cadastro.page.js'
const { faker } = require('@faker-js/faker');
describe('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cadastroPage.visitar()
    });

    it('Deve completar o cadastro com sucesso', () => {
        cadastroPage.preencherCadastro(
            faker.internet.email(), 
            'teste@123'
        )
        
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    });
});
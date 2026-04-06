/// <reference types="cypress" />
import cadastroPage from '../support/page-objects/cadastro.page.js'
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Cadastro - Módulo 23', () => {

    beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2') // Remova o  daqui
    cadastroPage.visitar()
    cy.wait(3000)
});

    it('Deve completar o cadastro com sucesso utilizando dados dinâmicos', () => {
        const emailDinamico = faker.internet.email()
        const senhaDinamica = 'Teste@123!'

        cadastroPage.preencherCadastro(emailDinamico, senhaDinamica)

        cy.get('.woocommerce-MyAccount-content', { timeout: 10000 }).should('be.visible')
    });
});
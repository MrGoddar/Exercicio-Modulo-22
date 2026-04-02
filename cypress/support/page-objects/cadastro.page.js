class CadastroPage {
    // Aqui definimos os seletores e as ações
    visitar() {
        cy.visit('minha-conta') // Altere para a URL correta do ecommerce da EBAC
    }

    preencherCadastro(email, senha) {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('input[name="register"]').click()
    }
}

export default new CadastroPage()
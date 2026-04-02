class CadastroPage {
    
    visitar() {
        cy.visit('minha-conta') 
    }

    preencherCadastro(email, senha) {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('input[name="register"]').click()
    }
}

export default new CadastroPage()
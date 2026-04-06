class CadastroPage {

    visitar() {
        // Visita a página inicial ou a conta diretamente
        cy.visit('minha-conta')
    }

    preencherCadastro(email, senha) {
        // 1. Clica no ícone de 'Profile' no menu inferior (necessário na v2)
        // O should('be.visible') garante que o Cypress espere o carregamento da SPA
        cy.get('a[href*="profile"]').should('be.visible').click()

        // 2. Aguarda a transição de tela para o formulário aparecer
        cy.wait(1000)

        // 3. Preenche os campos usando seletores compatíveis com a v2
        // Usamos .first() pois às vezes o tema v2 duplica campos para mobile/desktop
        cy.get('input[type="email"]').first().should('be.visible').type(email)
        cy.get('input[type="password"]').first().type(senha)

        // 4. Clica no botão de Registro
        // Na v2, o botão pode ser identificado pelo texto ou tipo submit
        cy.get('button').contains('Register').click()
    }

    // Método auxiliar para validar se o cadastro funcionou na v2
    validarCadastroSucesso() {
        // Na v2, buscamos um elemento que confirme o login, como o botão de logout ou o painel
        cy.get('.woocommerce-MyAccount-content', { timeout: 10000 }).should('be.visible')
    }
}

export default new CadastroPage()
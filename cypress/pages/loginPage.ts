export class LoginPage {
    
    private loginModal = '#logInModal'
    private loginButtonLabel = 'Log in'
    private usernameInput = '#loginusername'
    private passwordInput = '#loginpassword'

    typeUsername(username: string) {
        const username_input = cy.get(this.usernameInput) 

        if (username) {
            username_input.clear().type(username)
        }
        else {
            username_input.clear()
        }
    }
    
    typePassword(password: string) {
        const password_input = cy.get(this.passwordInput)

        if (password) {
            password_input.clear().type(password)
        }
        else {
            password_input.clear()
        }
    }

    clickLoginButton() {
        cy.get(this.loginModal)
            .should('be.visible')
            .contains('button', this.loginButtonLabel)
            .click()
    }

    login(username: string, password: string) {
        this.typeUsername(username)
        this.typePassword(password)        
        this.clickLoginButton()
    }
}

export class SignUpPage {

    private signUpModal = '#signInModal'
    private usernameInput = '#sign-username'
    private passwordInput = '#sign-password'
    private signUpButtonLabel = "Sign up"
    
    typeUsername(username: string) {
        cy.get(this.usernameInput).clear().type(username)
    }
    
    typePassword(password: string) {
        cy.get(this.passwordInput).clear().type(password)
    }

    clickSignUpButton() {
        cy.get(this.signUpModal).contains('button', this.signUpButtonLabel).click()
    }

    signUp(username: string, password: string) {
        this.typeUsername(username)
        this.typePassword(password)        
        this.clickSignUpButton()
    }

    getSignUpModal() {
        return cy.get(this.signUpModal)
    }
}

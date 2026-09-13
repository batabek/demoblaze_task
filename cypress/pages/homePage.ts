export class HomePage {

    private laptopsCategory = 'Laptops'
    private loginLinkSelector = '#login2'
    private signUpLinkSelector = '#signin2'
    private cartLinkSelector = '#cartur'
    private loggedInUserSelector = '#nameofuser'

    goToLogin() {
        cy.get('#navbarExample').find(this.loginLinkSelector).click()
    }

    goToSignUp() {
        cy.get('#navbarExample').find(this.signUpLinkSelector).click()
    }

    goToCart()  {
        cy.get('#navbarExample').find(this.cartLinkSelector).click()
    }

    goToLaptopsCategory() {
        cy.contains(this.laptopsCategory).click()
    }

    getLoggedInUser() {
        return cy.get(this.loggedInUserSelector)
    }
}

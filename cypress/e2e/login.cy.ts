import { HomePage }  from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"

describe('Login', () => {
    
    let homePage: HomePage
    let loginPage: LoginPage
    
    beforeEach( () => {
        cy.visit('/')
        cy.url().should('contain', 'demoblaze.com')
        
        homePage = new HomePage() 
        loginPage = new LoginPage()
    })

    it('should login successfully with valid credentials', () => {
        homePage.goToLogin()

        // obtain login credentials from env
        cy.env(['username', 'password']).then(({ username, password }) => {
            loginPage.login(username, password)        
            homePage.getLoggedInUser().should('contain.text', `Welcome ${username}`)
        })           
        
    })

    it('should give an error when login with an invalid username', () => {
        homePage.goToLogin()

        // register a handler for verifying the error message
        cy.once('window:alert', (message) => {
            expect(message).to.contain('User does not exist.')
        })
        
        cy.env(['password']).then(({ password }) => {
            loginPage.login('invalid!?*', password)
        })        
    })

    it('should give an error when login with an invalid password', () => {
        homePage.goToLogin()
        
        // register a handler for verifying the error message
        cy.once('window:alert', (message) => {
            expect(message).to.contain('Wrong password.')
        })
        
        cy.env(['username']).then(({ username }) => {
            loginPage.login(username, 'invalid123')
        })        
    })

    it('should give an error when login with empty credentials', () => {
        
        // register a handler for verifying the error message
        cy.once('window:alert', (message) => {
            expect(message).to.contain('Please fill out Username and Password.')
        })
        
        homePage.goToLogin()
        loginPage.login('', '')        
    })
})
import { HomePage } from "../pages/homePage"
import { SignUpPage } from "../pages/signupPage"
import { faker } from '@faker-js/faker/locale/en'

describe('Signup', () => {
    
    let homePage: HomePage
    let signUpPage: SignUpPage
    
    beforeEach( () => {
        cy.visit('/')
        cy.url().should('contain', 'demoblaze.com')
        
        homePage = new HomePage() 
        signUpPage = new SignUpPage()        
    })

    it('should sign up for a new user successfully', () => {
        homePage.goToSignUp()
        signUpPage.getSignUpModal().should('be.visible')

        const user = faker.internet.username()
        const passwd = faker.internet.password({length : 8})

        cy.on('window:alert', (message) => {
            expect(message).to.contain('Sign up successful.')
        })

        signUpPage.signUp(user, passwd)
    })    
})
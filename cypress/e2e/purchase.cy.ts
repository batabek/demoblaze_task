import { CartPage } from "../pages/cartPage"
import { HomePage } from "../pages/homePage"
import { LoginPage } from "../pages/loginPage"
import { ProductListPage } from "../pages/productListPage"
import { ProductDetailsPage } from "../pages/productDetailsPage"
import { OrderModalPage } from "../pages/orderModalPage"

import { faker } from '@faker-js/faker/locale/en'

describe('Purchase a Laptop', () => {
    
    // POs
    let homePage: HomePage
    let loginPage: LoginPage
    let productListPage: ProductListPage
    let cartPage: CartPage
    let productDetailsPage: ProductDetailsPage
    let orderModalPage: OrderModalPage
    const productName = 'MacBook Pro'
       
    beforeEach(()=>{

        cy.visit('/')
        cy.url().should('contain', 'demoblaze.com')
        
        homePage = new HomePage() 
        loginPage = new LoginPage()
        productListPage = new ProductListPage()
        cartPage = new CartPage()
        productDetailsPage = new ProductDetailsPage()
        orderModalPage = new OrderModalPage()        
    })

    it('should allow a user to purchase a laptop', () => {
        // Login
        cy.env(['username', 'password']).then(({ username, password }) => {
            homePage.goToLogin()
            loginPage.login(username, password)        
            homePage.getLoggedInUser().should('contain.text', `Welcome ${username}`)
        })
        
        // Navigate to laptops and select a laptop
        homePage.goToLaptopsCategory()
        productListPage.selectProduct(productName)

        // Add to cart and verify the confirmation
        cy.once('window:alert', (message) => {
            expect(message).to.equal('Product added.')
        })
        productDetailsPage.addToCart()

        // verify the cart
        homePage.goToCart()
        cartPage.getAddedProducts()
            .and('contain.text', productName)
        cartPage.clickPlaceOrder()

        // generate the order data
        const expiryDate = faker.date.future({years: 5})
        const month = String(expiryDate.getMonth() + 1).padStart(2, '0')
        const year = String(expiryDate.getFullYear())

        const order = {
            name: `${faker.person.firstName()} ${faker.person.lastName()}`,
            country: faker.location.country(),
            city: faker.location.city(),
            card: faker.finance.creditCardNumber(),
            month,
            year
        }

        orderModalPage.fillForm(order)        
        orderModalPage.clickPurchase()
        // verify order confirmation
        orderModalPage.getOrderConfirmation().should('contain.text', 'Thank you for your purchase!')
    })    
})
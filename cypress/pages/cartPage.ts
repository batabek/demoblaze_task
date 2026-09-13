export class CartPage {

    private placeOrderButtonLabel = 'Place Order'
    private totalAmount = '#totalp'
    private cartItems = '#tbodyid tr'

    getTotalOrderAmount() {
        return cy.get(this.totalAmount)
    }

    getAddedProducts() {
        return cy.get(this.cartItems)
        .find('td:nth-child(2)')
    }

    clickPlaceOrder() {
        cy.contains('button', this.placeOrderButtonLabel).click()
    }

}
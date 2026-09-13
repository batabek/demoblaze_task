export class ProductDetailsPage {
    
    private productDetailCard = '[class*="product-content"]'
    private productName = '.name'
    private addToCartButtonLabel = "Add to cart"
    
    addToCart() {
        cy.get(this.productDetailCard).contains('a', this.addToCartButtonLabel).click()
    }

    getProductName() {
        return cy.get(this.productDetailCard).find(this.productName)
    }
}
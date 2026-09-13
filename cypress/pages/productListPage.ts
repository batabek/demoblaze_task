export class ProductListPage {
    private productTitle = '#tbodyid .card-title'

    selectProduct(productName: string) {
        cy.contains(this.productTitle, productName)
            .should('be.visible')
            .click()
    }
}
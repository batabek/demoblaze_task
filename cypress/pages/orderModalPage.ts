export type OrderForm = {
    name: string
    country: string
    city: string
    card: string
    month: string
    year: string
}

export class OrderModalPage {
    private orderModal = '#orderModal'
    private nameInput = '#name'
    private countryInput = '#country'
    private cityInput = '#city'
    private cardInput = '#card'
    private monthInput = '#month'
    private yearInput = '#year'
    private purchaseButtonLabel = 'Purchase'
    private confirmationText = '.sweet-alert h2'

    getOrderModal() {
        return cy.get(this.orderModal)
    }

    enterName(name: string) {
        cy.get(this.orderModal).find(this.nameInput).clear().type(name)
    }

    enterCountry(country: string) {
        cy.get(this.orderModal).find(this.countryInput).clear().type(country)
    }

    enterCity(city: string) {
        cy.get(this.orderModal).find(this.cityInput).clear().type(city)
    }

    enterCard(card: string) {
        cy.get(this.orderModal).find(this.cardInput).clear().type(card)
    }

    enterMonth(month: string) {
        cy.get(this.orderModal).find(this.monthInput).clear().type(month)
    }

    enterYear(year: string) {
        cy.get(this.orderModal).find(this.yearInput).clear().type(year)
    }

    fillForm(order: OrderForm) {
        this.enterName(order.name)
        this.enterCountry(order.country)
        this.enterCity(order.city)
        this.enterCard(order.card)
        this.enterMonth(order.month)
        this.enterYear(order.year)
    }

    clickPurchase() {
        cy.get(this.orderModal).contains('button', this.purchaseButtonLabel).click()
    }

    getOrderConfirmation() {
        return cy.get(this.confirmationText)
    }
}
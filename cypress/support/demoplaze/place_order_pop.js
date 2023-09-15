export class PlaceOrderPop {
    name_txtBox = '#name'
    country_txtBox = '#country'
    city_txtBox = '#city'
    creditCar_txtBox = '#card'
    month_txtBox = '#month'
    year_txtBox = '#year'
    purchase_button = '.modal-footer [onclick="purchaseOrder()"]'
    //Confirmation popup.
    ok_button = '.sa-confirm-button-container'

    //PlaceOrder popup.
    fillUpPlaceOrder(form) {
        cy.get(this.name_txtBox).type(form.name)
        cy.get(this.country_txtBox).type(form.country)
        cy.get(this.city_txtBox).type(form.city)
        cy.get(this.creditCar_txtBox).should('be.visible').type(form.card)
        cy.get(this.month_txtBox).type(form.month)
        cy.get(this.year_txtBox).type(form.year)
    }

    clickPurchaseButton() {
        cy.get(this.purchase_button).should('be.visible').click({ force: true })
    }

    //Confirmation popup.
    clickOkButton() {
        cy.get(this.ok_button).should('be.visible').click()
    }

    verifyCardNumber(carNumber) {
        var fullCarNumber = 'Card Number: ' + carNumber
        cy.get('.text-muted')
            .should('be.visible')
            .and('contain', fullCarNumber)
    }
}
export class PlaceOrderPop {
    name_txtBox = '#name'
    country_txtBox = '#country'
    city_txtBox = '#city'
    creditCar_txtBox = '#card'
    month_txtBox = '#month'
    year_txtBox = '#year'
    purchase_button = '.modal-footer [onclick="purchaseOrder()"]'
//
    ok_button = '.sa-confirm-button-container'

    fillUpPlaceOrder(form) {
        cy.get(this.name_txtBox).type(form.name)
        cy.get(this.country_txtBox).type(form.country)
        cy.get(this.city_txtBox).type(form.city)
        cy.get(this.creditCar_txtBox).type(form.card)
        cy.get(this.month_txtBox).type(form.month)
        cy.get(this.year_txtBox).type(form.year)
    }

    clickPurchaseButton() {
        cy.get(this.purchase_button).should('be.visible').click({force:true})
    }

    clickOkButton() {
        cy.get(this.ok_button).should('be.visible').click()
    }
}
export class ProductDetaill {
    addCar_button = '.btn-success'

    clickAddCarButton(){
        cy.get(this.addCar_button).click()
    }

    clickProductAddAlert() {
        cy.on('window:confirm', (str) => {
            return true;
        })
    }
}
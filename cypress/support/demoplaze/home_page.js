export class HomePage {
    logIn_text = '#login2'
    car_text = '#cartur'
    logOut_text = '#logout2'

    clickLoginButton() {
        cy.get(this.logIn_text).click({force:true})
    }

    clickCarButton() {
        cy.get(this.car_text).click()
    }

    clickLogOutButton() {
        cy.get(this.logOut_text).click({force:true})
    }
}

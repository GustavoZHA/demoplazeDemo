export class HomePage {
    logIn_button = '#login2'

    clickLoginButton() {
        cy.get(this.logIn_button).click()
    }
}

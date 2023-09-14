export class LoginPop {
    username_textbox = '#loginusername'
    password_textbox = '#loginpassword'
    login_button = '.modal-content .modal-footer button[onclick="logIn()"]'
    username = '#nameofuser'

    enterUsername(username) {
        cy.get(this.username_textbox).invoke('val', username)
    }
    enterPassword(password) {
        cy.get(this.password_textbox).invoke('val', password)
    }

    clickLoginButton() {
        cy.get(this.login_button).click({force:true}).should('be.visible')
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
        cy.get(this.username, {timeout:5000}).should('contain','Welcome')
    }
}
export class LoginPop {
    username_textbox = '#loginusername'
    password_textbox = '#loginpassword'
    login_button = '.modal-footer button[onclick="logIn()"]'

    enterUsername(username) {
        cy.get(this.username_textbox).invoke('val', username)
    }
    enterPassword(password) {
        cy.get(this.password_textbox).invoke('val', password)
    }

    clickLoginButton() {
        cy.get(this.login_button).click({force:true})
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
    }
}
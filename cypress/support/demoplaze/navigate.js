export class Navigate {
    loginPage () {
        cy.visit('https://www.demoblaze.com/index.html')
    }

    carPage() {
        cy.visit('https://www.demoblaze.com/cart.html')
    }
}
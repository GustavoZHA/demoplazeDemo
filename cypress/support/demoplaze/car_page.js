/// <reference types="cypress" />
import { removeItem } from "../utils/utils";

export class CarPage {
    x_icon = '.table-responsive a[onclick]'
    placeOrden_button = '.btn-success'
    record_table = '#tbodyid .success'

    clickXIcon() {
        cy.get(this.x_icon, { timeout: 10000 }).should('be.visible').click()
    }

    clickPlaceOrdenButton() {
        cy.get(this.placeOrden_button).should('be.visible').click()
    }


    verifyProduct(productTitle) {
        var recordDetails = [];
        cy.get(this.record_table + ' td:nth-child(2)').each(($el, index, $list) => {
            recordDetails[index] = ($el.text());
        })
            .then(() => {
                var i;
                for (i = 0; i < productTitle.length; i++) {
                    recordDetails = removeItem(recordDetails, productTitle[i])
                }
                expect(recordDetails.length == 0).to.be.true
            })
    }

    deleteProduct(productName) {
        var indexToClick;
        cy.get(this.record_table + ' td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text().includes(productName)) {
                cy.get(this.record_table + ' td a').eq(index).click()
            }
        })
    }

    verifyProductIsDeleted(productTitle) {
        var recordDetails = [];
        var productExits = false;

        cy.get('#tbodyid tr')
            .should(Cypress._.noop)
            .its('length')
            .then((n) => {
                if (n == 0) {
                    expect(productExits).to.be.false
                } else {
                    cy.get(this.record_table + ' td:nth-child(2)').each(($el, index, $list) => {
                        recordDetails[index] = ($el.text());
                    })
                        .then(() => {
                            var i;
                            for (i = 0; i < recordDetails.length; i++) {
                                if (recordDetails[i] == productTitle) productExits = true;
                            }
                            expect(productExits).to.be.false
                        })
                }
            })
    }
}
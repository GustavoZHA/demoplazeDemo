/// <reference types="cypress" />
import { removeItem } from "../utils/utils";
import { getTitleProduct } from "../utils/utils";

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
        cy.log(productTitle.length)
        cy.get(this.record_table + ' td:nth-child(2)').each(($el, index, $list) => {
            recordDetails[index] = ($el.text());
            cy.log(recordDetails[index])
        })
        .then(() => {  
            var i;
            for (i = 0; i < productTitle.length; i++) {
           
            recordDetails = removeItem(recordDetails, productTitle[i])
                
            }
            expect(recordDetails.length== 0).to.be.true
        })
    }
}
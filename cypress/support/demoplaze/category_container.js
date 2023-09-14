export class CategoryContainer {
    category_product = '.list-group #itemc';
    product_tittle = '#tbodyid .card-block .card-title a'

    categoryList = new Map([
        ['Laptops', 'notebook'],
        ['Phones', 'phone'],
        ['Monitors', 'monitor']
    ]);

    verifiesCategory(searchCategory) {
        var userDetails = [];
        cy.get(this.category_product).each(($el, index, $list) => {
            userDetails[index] = $el.text();
            $el.is(':visible')
        }).then(() => {
            expect(userDetails.includes(searchCategory)).to.be.true
        })
    }

    clickCategory(category) {      
        var categ = this.categoryList.get(category)
        var category_a_product = '.list-group #itemc[onclick="byCat(\'' + categ + '\')"]'
        cy.get(category_a_product).click({force:true})
    }

    clickProduct(nameProduct) {
        var product = [];
        cy.get(this.product_tittle).each(($el, index, $list) => {
            product[index] = $el.text();
            if ($el.text() == nameProduct) cy.get($el).click()
        })
    }
}

/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
import { CategoryContainer } from "../support/demoplaze/category_container";
import { ProductDetaill } from "../support/demoplaze/product_detaill_page";
import { deleteNumber } from "../support/utils/utils";
import { CarPage } from "../support/demoplaze/car_page";
import { PlaceOrderPop } from "../support/demoplaze/place_order_pop";
const usercomun = require('../fixtures/place_orden.json')
const user = require('../fixtures/user.json')

var navigate = new Navigate()
var loginPop = new LoginPop()
var homePage = new HomePage()
var categoryContainer = new CategoryContainer()
var placeOrderPop = new PlaceOrderPop()
var productDetaill = new ProductDetaill()
var carPage = new CarPage()

describe('Carrito de Compras', () => {
    beforeEach(() => {
        //Login page
        navigate.loginPage()
        homePage.clickLoginButton()
        loginPop.login(user.username, user.password)
    });

    afterEach(() => {
        //Do order to delete all records in cart
        navigate.carPage()
        carPage.clickPlaceOrdenButton()
        placeOrderPop.fillUpPlaceOrder(usercomun)
        placeOrderPop.clickPurchaseButton()
        placeOrderPop.clickOkButton()
    })

    it('Select a product for every product', () => {
        var produtToAdd = new Map([
          ['Laptops', 'Sony vaio i5'],
          ['Phones', 'Samsung galaxy s6'],
          ['Monitors', 'Apple monitor 24']
        ]);
    
        produtToAdd.forEach(function(value,key){
          categoryContainer.clickCategory(key)
          categoryContainer.clickProduct(value)
          productDetaill.clickAddCarButton()
          productDetaill.clickProductAddAlert()
          navigate.loginPage()
        })
      }) 

    it('Select a products and verify is displayed in car', () => {
        var produtToAdd = new Map([
            ['Laptops', 'Sony vaio i5'],
            ['Phones', 'Samsung galaxy s6'],
            ['Monitors', 'Apple monitor 24'],
            ['Phones 01', 'Samsung galaxy s6']
        ]);

        produtToAdd.forEach(function (value, key) {
            categoryContainer.clickCategory(deleteNumber(key))
            categoryContainer.clickProduct(value)
            productDetaill.clickAddCarButton()
            productDetaill.clickProductAddAlert()
            navigate.loginPage()
        })

        navigate.carPage()
        carPage.verifyProduct(Array.from(produtToAdd.values()))
    })
})
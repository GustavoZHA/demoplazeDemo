/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
import { CategoryContainer } from "../support/demoplaze/category_container";
import { ProductDetaill } from "../support/demoplaze/product_detaill_page";
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

describe('Visualización de Número de Tarjeta', () => {
    before(() => {
        //Login page
        navigate.loginPage()
        homePage.clickLoginButton()
        loginPop.login(user.username, user.password)

        //Add the product
        categoryContainer.clickCategory('Laptops')
        categoryContainer.clickProduct('Sony vaio i5')
        productDetaill.clickAddCarButton()
        productDetaill.clickProductAddAlert()
        navigate.loginPage()
    });

    it('Verify the car number in confimation pop', () => {
        navigate.carPage()
        carPage.clickPlaceOrdenButton()
        placeOrderPop.fillUpPlaceOrder(usercomun)
        placeOrderPop.clickPurchaseButton()
        placeOrderPop.verifyCardNumber(usercomun.card)
        placeOrderPop.clickOkButton()
      }) 
})
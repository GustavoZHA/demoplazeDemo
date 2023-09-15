/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
import { CategoryContainer } from "../support/demoplaze/category_container";
import { ProductDetaill } from "../support/demoplaze/product_detaill_page";
import { CarPage } from "../support/demoplaze/car_page";
const user = require('../fixtures/user.json')

var navigate = new Navigate()
var loginPop = new LoginPop()
var homePage = new HomePage()
var categoryContainer = new CategoryContainer()
var productDetaill = new ProductDetaill()
var carPage = new CarPage()

describe('Carrito de Compras', () => {
    beforeEach(() => {
        //Login page
        navigate.loginPage()
        homePage.clickLoginButton()
        loginPop.login(user.username, user.password)
    });

    it.only('Add and delete a product', () => {
        //Adds product
        var produtToAdd = new Map([
          ['Laptops', 'Sony vaio i5'],
        ]);
    
        produtToAdd.forEach(function(value,key){
          categoryContainer.clickCategory(key)
          categoryContainer.clickProduct(value)
          productDetaill.clickAddCarButton()
          productDetaill.clickProductAddAlert()
          navigate.loginPage()
        })
        navigate.carPage()
        carPage.verifyProduct(Array.from(produtToAdd.values()))

        //Delete product
        cy.log("Delete products")
        produtToAdd.forEach(function(value,key){
        navigate.carPage()
        carPage.deleteProduct(value)
        navigate.carPage()
        carPage.verifyProductIsDeleted(value)
        })
      }) 

})
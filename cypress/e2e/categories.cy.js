/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
import { CategoryContainer } from "../support/demoplaze/category_container";
import { ProductDetaill } from "../support/demoplaze/product_detaill_page";

var navigate = new Navigate()
var loginPop = new LoginPop()
var homePage = new HomePage()
var categoryContainer = new CategoryContainer()
var productDetaill = new ProductDetaill()

describe('template spec', () => {
  let user;

  before(() => {
    // load credentials
    cy.fixture('user').then(function (data) {
      user = data;
    })
  });

  beforeEach(() => {
    //Login page
    navigate.loginPage()
    homePage.clickLoginButton()
    loginPop.login(user.username, user.password)
  });

  it('Select a product for every category', () => {
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
})
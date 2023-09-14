/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
import { CategoryContainer } from "../support/demoplaze/category_container";
const user = require('../fixtures/user.json')

var navigate = new Navigate()
var loginPop = new LoginPop()
var homePage = new HomePage()
var categoryContainer = new CategoryContainer()

describe('Agregar varias categorías', () => {

  beforeEach(() => {
    //Login page
    navigate.loginPage()
    homePage.clickLoginButton()
    loginPop.login(user.username, user.password)
    clean = false;
  });

  afterEach(() => {
    homePage.clickLogOutButton()
  })

  it('Verifies the list product is displayed correctly', () => {
    var categoryProduct = ["Phones","Monitors","Laptops"]
    categoryProduct.forEach(function(category){
      categoryContainer.verifiesCategory(category)
    });
  })
})
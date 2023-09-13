/// <reference types="cypress" />

import { Navigate } from "../support/demoplaze/navigate";
import { LoginPop } from "../support/demoplaze/login_pop";
import { HomePage } from "../support/demoplaze/home_page";
 
var navigate = new Navigate()
var loginPop = new LoginPop()
var homePage = new HomePage()

describe('template spec', () => {
  let user;

  before(() => {
    // load credentials
    cy.fixture('user').then(function(data) {
      //this.data = data;
      globalThis.user = data;
  })
  });

  it('passes', () => {

    navigate.loginPage()
    homePage.clickLoginButton()
    loginPop.login(user.username, user.password)    
  })

  
})
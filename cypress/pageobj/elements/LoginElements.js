/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class LoginPageElements{
    
    emailField()
    {
        return cy.get(loc.loginPage.txtEmail)
    }

    passwordField()
    {
        return cy.get(loc.loginPage.txtPassword)
    }

    btnLogin()
    {
        return cy.get(loc.loginPage.btnSubmit)
    }

    errorToast()
    {
        return cy.get(loc.loginPage.toast)
    }
    
}
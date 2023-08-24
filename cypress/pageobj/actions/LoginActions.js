/// <reference types="cypress" />

import LoginPageElements from "../elements/LoginElements";

export default class LoginAction{
    constructor(){
        globalThis.lpelements = new LoginPageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    withValidCredential(email,password){
        lpelements.emailField().type(email)
        lpelements.passwordField().type(password)
        lpelements.btnLogin().click()
    }
}
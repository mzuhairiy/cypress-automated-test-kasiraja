/// <reference types="cypress" />

import HomePageElements from "../elements/HomeElements";
import LoginPageElements from "../elements/LoginElements";

export default class LoginAction{
    constructor(){
        globalThis.lpelements = new LoginPageElements()
        globalThis.hpelements = new HomePageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    withValidCredential(email,password){
        lpelements.emailField().type(email)
        lpelements.passwordField().type(password)
        lpelements.btnLogin().click()
    }

    withInvalidCredential(email,password){
        lpelements.emailField().type(email)
        lpelements.passwordField().type(password)
        lpelements.btnLogin().click()
    }

    validateTokoName(){
        hpelements.dashboard().should("contain", "tokozoo").and("be.visible");
    }

    validateErrorToast(){
        lpelements.errorToast().should("contain", "Kredensial yang Anda berikan salah").and("be.visible");
    }
}
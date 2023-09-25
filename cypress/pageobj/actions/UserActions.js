/// <reference types="cypress" />

import UserPageElements from "../elements/UserElements";
import HomePageElements from "../elements/HomeElements";
import LoginPageElements from "../elements/LoginElements";

export default class UserActions{
    constructor(){
        globalThis.userelements = new UserPageElements()
        globalThis.lpelements = new LoginPageElements()
        globalThis.hpelements = new HomePageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    withValidData(nama,email,password){
        hpelements.userBtn().click()
        userelements.btnTambah().click()
        userelements.txtNamaField().type(nama)
        userelements.txtEmailField().type(email)
        userelements.txtPasswordField().type(password)
        userelements.saveBtn().click()
    }

    validateSuccessToast(){
        userelements.successToast().should("contain", "item ditambahkan").and("be.visible");
    }
}
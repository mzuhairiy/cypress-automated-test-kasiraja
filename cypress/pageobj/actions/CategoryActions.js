/// <reference types="cypress" />

import CategoryPageElements from "../elements/CategoryElement";
import HomePageElements from "../elements/HomeElements";
import LoginPageElements from "../elements/LoginElements";

export default class CategoryAction{
    constructor(){
        globalThis.catelements = new CategoryPageElements()
        globalThis.lpelements = new LoginPageElements()
        globalThis.hpelements = new HomePageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    withValidData(nama,deskripsi){
        hpelements.categoryBtn().click()
        catelements.btnTambah().click()
        catelements.txtNamaField().type(nama)
        catelements.txtDescField().type(deskripsi)
        catelements.saveBtn().click()
    }

    validateSuccessToast(){
        catelements.successToast().should("contain", "item ditambahkan").and('be.visible');
    }

    validateFailedToast(){
        catelements.failedToast().should("contain", '"name" is not allowed to be empty').and('be.visible');
    }

}
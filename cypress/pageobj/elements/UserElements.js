/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class UserPageElements{
    btnTambah()
    {
        return cy.get(loc.userPage.btnTambah)
    }

    txtNamaField()
    {
        return cy.get(loc.userPage.namaField)
    }

    txtEmailField()
    {
        return cy.get(loc.userPage.emailField)
    }

    txtPasswordField()
    {
        return cy.get(loc.userPage.passwordField)
    }

    saveBtn()
    {
        return cy.get(loc.userPage.svBtn)
    }

    successToast()
    {
        return cy.get(loc.userPage.successToast)
    }

    failedToast()
    {
        return cy.get(loc.userPage.failedToast)
    }

}
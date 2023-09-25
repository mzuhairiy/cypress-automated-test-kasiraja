/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class CustomerPageElements{
    btnTambah()
    {
        return cy.get(loc.customerPage.btnTambah)
    }

    txtNamaField()
    {
        return cy.get(loc.customerPage.namaField)
    }

    txtEmailField()
    {
        return cy.get(loc.customerPage.alamatField)
    }

    ketField()
    {
        return cy.get(loc.customerPage.ketField)
    }

    saveBtn()
    {
        return cy.get(loc.customerPage.svBtn)
    }

    successToast()
    {
        return cy.get(loc.customerPage.successToast)
    }

    failedToast()
    {
        return cy.get(loc.customerPage.failedToast)
    }

}
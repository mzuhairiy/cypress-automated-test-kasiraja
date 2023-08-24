/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class CategoryPageElements{
    btnTambah()
    {
        return cy.get(loc.categoryPage.btnTambah)
    }

    txtNamaField()
    {
        return cy.get(loc.categoryPage.namaField)
    }

    txtDescField()
    {
        return cy.get(loc.categoryPage.deskripsiField)
    }

    saveBtn()
    {
        return cy.get(loc.categoryPage.svBtn)
    }

    validateNavigationMenu()
    {
        return cy.get(loc.categoryPage.navmenu)
    }

    validateNavigationMenu2()
    {
        return cy.get(loc.categoryPage.navmenu)
    }

    successToast()
    {
        return cy.get(loc.categoryPage.successToast)
    }

    failedToast()
    {
        return cy.get(loc.categoryPage.failedToast)
    }

}
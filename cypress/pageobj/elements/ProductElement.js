/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class ProductPageElements{
    btnCategory()
    {
        return cy.get(loc.productPage.btnCategory)
    }

    btnTambah()
    {
        return cy.get(loc.productPage.btnTambah)
    }
    
    kodeField()
    {
        return cy.get(loc.productPage.kode)
    }

    namaField()
    {
        return cy.get(loc.productPage.nama)
    }

    descField()
    {
        return cy.get(loc.productPage.deskripsi)
    }

    hargaBeli()
    {
        return cy.get(loc.productPage.harga_beli)
    }

    hargaJual()
    {
        return cy.get(loc.productPage.harga_jual)
    }

    stokField()
    {
        return cy.get(loc.productPage.stok)
    }

    kategoriDropdown()
    {
        return cy.get(loc.productPage.kategori)
    }

    prvPage()
    {
        return cy.get(loc.productPage.prvPage)
    }

    nxtPage()
    {
        return cy.get(loc.productPage.nxtPage)
    }

    kategoriElektronik()
    {
        return cy.get(loc.productPage.kategoriElektronik)
    }

    saveBtn()
    {
        return cy.get(loc.productPage.svBtn)
    }

    successToast()
    {
        return cy.get(loc.productPage.successToast)
    }

    failedToast()
    {
        return cy.get(loc.productPage.failedToast)
    }
}
/// <reference types="cypress" />

import HomePageElements from "../elements/HomeElements";
import LoginPageElements from "../elements/LoginElements";
import ProductPageElements from "../elements/ProductElement";

export default class ProductAction{
    constructor(){
        globalThis.lpelements = new LoginPageElements()
        globalThis.hpelements = new HomePageElements()
        globalThis.ppelements = new ProductPageElements()
    }

    
    withValidData(kode,nama,desc,hargabeli,hargajual,stok)
    {
        hpelements.productBtn().click()
        ppelements.btnTambah().click()
        ppelements.kodeField().type(kode)
        ppelements.namaField().type(nama)
        ppelements.descField().type(desc)
        ppelements.hargaBeli().type(hargabeli)
        ppelements.hargaJual().type(hargajual)
        ppelements.stokField().type(stok)
        ppelements.kategoriDropdown().click()
        ppelements.nxtPage().click()
        ppelements.kategoriElektronik().click()
        ppelements.saveBtn().click()
    }

    withInvalidData(kode,nama,desc,hargabeli,hargajual,stok)
    {
        hpelements.productBtn().click()
        ppelements.btnTambah().click()
        ppelements.kodeField().type(kode)
        ppelements.namaField()
        ppelements.descField().type(desc)
        ppelements.hargaBeli().type(hargabeli)
        ppelements.hargaJual().type(hargajual)
        ppelements.stokField().type(stok)
        ppelements.kategoriDropdown().click()
        ppelements.nxtPage().click()
        ppelements.kategoriElektronik().click()
        ppelements.saveBtn().click()
    }

    validateSuccesToast()
    {
        ppelements.successToast().should("contain", "item ditambahkan").and("be.visible");
    }

    validateFailedToast()
    {
        ppelements.failedToast().should('contain', '"name" is not allowed to be empty').and("be.visible");
    }
}
/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";
import ProductAction from "../pageobj/actions/ProductActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("Product feature", () => {
    const login = new LoginAction;
    const hp = new HomePageElements;
    const pp = new ProductAction

    beforeEach(()=>{
        cy.fixture('productdata').then(function(data){
            this.data = data
            // cy.log('This', this.data)
        })
        cy.fixture('authkasiraja').then(function(data){
            this.data1 = data
            // cy.log('This', this.data)
        login.navigateToURL()
        login.withValidCredential(this.data1.email,this.data1.password)
        login.validateTokoName()
        hp.categoryBtn()
        })
    })

    it('should successfully create a product', function () {
        pp.withValidData(this.data.kode,this.data.nama,this.data.deskripsi,this.data.harga_beli,this.data.harga_jual,this.data.stok)
        pp.validateSuccesToast()
    })

    it('should fail to create a product due to empty name', function () {
        pp.withInvalidData(this.data.kode,this.data.nama,this.data.deskripsi,this.data.harga_beli,this.data.harga_jual,this.data.stok)
        pp.validateFailedToast()
    })

})
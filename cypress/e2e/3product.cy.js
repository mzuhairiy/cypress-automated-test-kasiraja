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
        login.navigateToURL()
        login.withValidCredential("toko@toki.com","1234567")
        login.validateTokoName()
        hp.categoryBtn()
    })

    it('should successfully create a product', function () {
        pp.withValidData(this.data.kode,this.data.nama,this.data.deskripsi,this.data.harga_beli,this.data.harga_jual,this.data.stok)
        pp.validateSuccesToast()
    })

    it.only('should fail to create a product due to empty name', function () {
        pp.withInvalidData(this.data.kode,this.data.nama,this.data.deskripsi,this.data.harga_beli,this.data.harga_jual,this.data.stok)
        pp.validateFailedToast()
    })

})
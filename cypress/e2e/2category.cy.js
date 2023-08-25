/// <reference types="cypress" />

import CategoryAction from "../pageobj/actions/CategoryActions";
import LoginAction from "../pageobj/actions/LoginActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("Kategori feature", () => {
    const login = new LoginAction;
    const hp = new HomePageElements;
    const cp = new CategoryAction;
    
    beforeEach(()=>{
        cy.fixture('authkasiraja').then(function(data){
            this.data = data
            cy.log('THIS :', this.data)
        login.navigateToURL()
        login.withValidCredential(this.data.email,this.data.password)
        login.validateTokoName()
        hp.categoryBtn()
        })
    })

    it('should successfully create a category', () => {
        cp.withValidData("Minuman","Kopi Liong")
        cp.validateSuccessToast()
    })

    it('should fail to create a category due to invalid data', () => {
        cp.withInvalidData("","Kopi Liong")
        cp.validateFailedToast()
    })


})
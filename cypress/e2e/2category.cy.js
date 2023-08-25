/// <reference types="cypress" />

import CategoryAction from "../pageobj/actions/CategoryActions";
import LoginAction from "../pageobj/actions/LoginActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("Kategori feature", () => {
    const login = new LoginAction;
    const hp = new HomePageElements;
    const cp = new CategoryAction;
    
    beforeEach(()=>{
        cp.navigateToURL()
        login.withValidCredential("toko@toki.com","1234567")
        login.validateTokoName()
        hp.categoryBtn()
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
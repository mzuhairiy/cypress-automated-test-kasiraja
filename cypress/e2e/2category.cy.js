/// <reference types="cypress" />

import CategoryAction from "../pageobj/actions/CategoryActions";
import LoginAction from "../pageobj/actions/LoginActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("Kategori", () => {
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


})
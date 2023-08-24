/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("Login", () => {
    const login = new LoginAction;
    const hp = new HomePageElements;

    beforeEach(()=>{
        login.navigateToURL()
    })

    it('should login successfully', () => {
        login.withValidCredential("toko@toki.com","1234567")
        login.validateTokoName()
    })

    it('should fail to login due invalid credential', () => {
        login.withInvalidCredential("toko@tokoan.com","salahpassw0rd")
        login.validateErrorToast()
    })
})
/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";

describe("Login", () => {
    const login = new LoginAction;

    beforeEach(()=>{
        login.navigateToURL()
    })

    it('should login successfully', () => {
        login.withValidCredential("toko@toki.com","1234567")
    })
})
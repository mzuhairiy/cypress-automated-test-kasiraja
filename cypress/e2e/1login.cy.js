/// <reference types="cypress" />

import LoginAction from "../pageobj/actions/LoginActions";

describe("Login feature", () => {
    const login = new LoginAction;

    beforeEach(()=>{
        cy.fixture('authkasiraja').then(function(data){
            this.data = data
            cy.log('THIS :', this.data)
        })
        login.navigateToURL()
    })

    it('should login successfully', function () {
        login.withValidCredential(this.data.email,this.data.password)
        login.validateTokoName()
    })

    it('should fail to login due invalid credential', () => {
        login.withInvalidCredential("toko@tokoan.com","salahpassw0rd")
        login.validateErrorToast()
    })
})
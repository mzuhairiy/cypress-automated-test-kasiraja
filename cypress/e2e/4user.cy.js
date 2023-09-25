/// <reference types="cypress" />

import UserActions from "../pageobj/actions/UserActions";
import LoginAction from "../pageobj/actions/LoginActions";
import HomePageElements from "../pageobj/elements/HomeElements";

describe("User feature", () => {
    const login = new LoginAction;
    const hp = new HomePageElements;
    const us = new UserActions;
    
    beforeEach(()=>{
        cy.fixture('userdata').then(function(data){
            this.data = data
        })
        cy.fixture('authkasiraja').then(function(data){
            this.data1 = data
            // cy.log('THIS :', this.data1)
        login.navigateToURL()
        login.withValidCredential(this.data1.email,this.data1.password)
        login.validateTokoName()
        hp.userBtn()
        })
    })

    it('should successfully create a new user', function() {
        us.withValidData(this.data.nama, this.data.email, this.data.password)
        us.validateSuccessToast()
    })
})
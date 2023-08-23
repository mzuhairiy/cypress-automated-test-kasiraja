/// <reference types="cypress" />

const { LoginPage } = require("../pageobj/LoginPage");

describe("Login", () => {
    it('should login successfully', () => {
        cy.visit("https://kasirdemo.belajarqa.com/");
        const ln = new LoginPage();
        ln.setUsername("toko@toki.com")
        ln.setPassword("1234567")
        ln.clickSubmit();
        ln.getHomepage();
    })
})
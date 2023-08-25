/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class HomePageElements{
    mainPage()
    {
        return cy.get(loc.homepage.dashboard)
    }

    categoryBtn()
    {
        return cy.get(loc.homepage.categoryBtn)
    }

    productBtn()
    {
        return cy.get(loc.homepage.productBtn)
    }
}
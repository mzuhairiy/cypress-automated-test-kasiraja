/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class HomePageElements{
    dashboard()
    {
        return cy.get(loc.homepage.mainpage)
    }

    categoryBtn()
    {
        return cy.get(loc.homepage.categoryBtn)
    }
}
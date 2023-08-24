/// <reference types="cypress" />

const loc = require("../../../locators.json")

export default class HomePageElements{
    dashboard()
    {
        return cy.get(".chakra-container.css-9rmdie")
    }
}
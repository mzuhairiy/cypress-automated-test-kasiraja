class LoginPage {
    txtEmail="#email";
    txtPassword="#password";
    btnSubmit="button[type='submit']";
    homePage=".chakra-container.css-9rmdie";

    setUsername(username)
    {
        cy.get(this.txtEmail).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    getHomepage()
    {
        cy.get(this.homePage);
    }
}

module.exports = { LoginPage };
class AccessTypePage{
    assertPageTitle(){
        cy.get('h1').contains("How do you want to get an access code?")
    }
    choose(){
        cy.get("label").contains("Text message").click()
        cy.get('button[class="govuk-button"]').last().click()
        cy.get('#otp_code').type("11222")
        cy.get('button[class="govuk-button"]').last().click()
    }
}

export default new AccessTypePage()
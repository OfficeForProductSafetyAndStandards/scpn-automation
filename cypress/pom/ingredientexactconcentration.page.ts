class IngredientExactConcentrationPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Add the ingredients")
    }

    enterIngredientDetails(name: string, concentration: string) {
        cy.get("#component_ingredients_attributes_0_inci_name").type(name)
        cy.get("#component_ingredients_attributes_0_exact_concentration").type(concentration)
        cy.get('.govuk-button').last().click()
    }

}

export default new IngredientExactConcentrationPage;
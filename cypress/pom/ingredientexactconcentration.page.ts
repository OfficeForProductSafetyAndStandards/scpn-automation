import {submitButton, verifyPageTitle} from "../support/common-helpers";

class IngredientExactConcentrationPage {

    assertPageTitle() {
        verifyPageTitle("Add the ingredients")
    }

    enterIngredientDetails(name: string, concentration: string) {
        cy.get("#component_ingredients_attributes_0_inci_name").type(name)
        cy.get("#component_ingredients_attributes_0_exact_concentration").type(concentration)
        submitButton()
    }
    enterIngredientDetailswithCAS(name: string, concentration: string, CAS: string, notified:string) {
        cy.get("#component_ingredients_attributes_0_inci_name").type(name)
        cy.get("#component_ingredients_attributes_0_exact_concentration").type(concentration)
        cy.get("#component_ingredients_attributes_0_cas_number").type(CAS)
        if(notified == "yes") {
            cy.get('label').contains("The NPIS must be notified about this ingredient").click()
        }
        //#component_ingredients_attributes_0_cas_number
        submitButton()
    }

}

export default new IngredientExactConcentrationPage;
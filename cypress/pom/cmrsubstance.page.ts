class CMRSubstancePage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Add category 1A or 1B CMRs")
    }

    enterSubstanceDetails(name: string, cas: string, ec: string) {
        cy.get("#component_cmrs_attributes_0_name").type(name)
        cy.get("#component_cmrs_attributes_0_cas_number").type(cas)
        cy.get("#component_cmrs_attributes_0_ec_number").type(ec)
        cy.get('.govuk-button').last().click()
    }

}

export default new CMRSubstancePage;
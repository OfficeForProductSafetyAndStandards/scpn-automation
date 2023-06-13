class InternalReferencePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Internal reference")
    }
  
    chooseReference() {
      cy.get(".govuk-radios__item label").contains("No").click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new InternalReferencePage;
class InternalReferencePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Internal reference")
    }

    choose(answer: string) {
      cy.get(".govuk-label").contains(answer).click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new InternalReferencePage;
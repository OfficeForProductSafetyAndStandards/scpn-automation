class ContainsNanomaterialsPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Nanomaterials")
    }
  
    chooseNanomaterialsPresent() {
      cy.get(".govuk-radios__item label").contains("No").click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new ContainsNanomaterialsPage;
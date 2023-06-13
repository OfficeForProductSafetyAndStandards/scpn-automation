class SingleOrMultiComponentPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Multi-item kits")
    }
  
    chooseComponentPresent() {
      cy.get(".govuk-radios__item label").contains("No, this is a single product").click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new SingleOrMultiComponentPage;


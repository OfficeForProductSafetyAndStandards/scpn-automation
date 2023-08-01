class SingleOrMultiComponentPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Multi-item kits")
    }

    choose(answer: string) {
      if (answer === "Yes"){
        cy.get(".govuk-label").contains(answer).click()
        cy.get("#components_count").clear().type("2")
      } else {
        cy.get(".govuk-label").contains(answer).click()
      }
      cy.get('button[class="govuk-button"]').last().click()
    }

  }
  
export default new SingleOrMultiComponentPage;


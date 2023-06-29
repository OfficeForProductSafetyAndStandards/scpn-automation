class SingleOrMultiComponentPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Multi-item kits")
    }

    choose(answer: string) {
      cy.get(".govuk-label").contains(answer).click()
    }

    submit() {
      cy.get('button[class="govuk-button"]').last().click()
    }

  }
  
export default new SingleOrMultiComponentPage;


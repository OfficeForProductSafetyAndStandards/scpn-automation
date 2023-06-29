class ChildrenUnderThreePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "children under 3 years old")
    }
  
    choose(answer: string) {
      cy.get(".govuk-label").contains(answer).click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new ChildrenUnderThreePage;
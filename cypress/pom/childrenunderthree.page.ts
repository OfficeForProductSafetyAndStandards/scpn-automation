class ChildrenUnderThreePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "children under 3 years old")
    }
  
    chooseAge() {
      cy.get(".govuk-radios__item label").contains("No").click()
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new ChildrenUnderThreePage;
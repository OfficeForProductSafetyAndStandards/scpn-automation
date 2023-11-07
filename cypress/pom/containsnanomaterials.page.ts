class ContainsNanomaterialsPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Nanomaterials")
    }
  
    choose(answer: string) {
      if (answer==="Yes"){
        cy.get(".govuk-label").contains(answer).click()
        cy.get("#nanomaterials_count").clear().type("1")
      } else {
        cy.get(".govuk-label").contains(answer).click()
      }
      cy.get('button[class="govuk-button"]').last().click()
    }
    chooseMulti(value: string){
      cy.get(".govuk-label").contains("Yes").click()
      cy.get("#nanomaterials_count").clear().type(value)
      cy.get('button[class="govuk-button"]').last().click()
    }
  
  }
  
export default new ContainsNanomaterialsPage;
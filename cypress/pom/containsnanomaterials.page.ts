import {select, submit, verifyPageTitle} from "../support/common-helpers";

class ContainsNanomaterialsPage {

    assertPageTitle() {
        verifyPageTitle("Nanomaterials")
    }
  
    choose(answer: string) {
      if (answer==="Yes"){
        select(answer)
        cy.get("#nanomaterials_count").clear().type("1")
      } else {
          select(answer)
      }
      submit()
    }
    chooseMulti(value: string){
      cy.get(".govuk-label").contains("Yes").click()
      cy.get("#nanomaterials_count").clear().type(value)
      submit()
    }
  
  }
  
export default new ContainsNanomaterialsPage;
import {submitButton, verifyPageTitle} from "../support/common-helpers";

class ContainsSpecialApplicator {

    assertPageTitle() {
        verifyPageTitle("What is the product contained in")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submitButton()
     }
}
  
export default new ContainsSpecialApplicator;
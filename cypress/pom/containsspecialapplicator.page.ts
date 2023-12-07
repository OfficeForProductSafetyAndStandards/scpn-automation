import {submit, verifyPageTitle} from "../support/common-helpers";

class ContainsSpecialApplicator {

    assertPageTitle() {
        verifyPageTitle("What is the product contained in")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submit()
     }
}
  
export default new ContainsSpecialApplicator;
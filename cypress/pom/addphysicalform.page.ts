import {submit, verifyPageTitle} from "../support/common-helpers";

class AddPhysicalFormPage {

    assertPageTitle() {
        verifyPageTitle("What is the physical form of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submit()
      }
}
  
export default new AddPhysicalFormPage;
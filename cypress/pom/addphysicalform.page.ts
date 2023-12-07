import {submitButton, verifyPageTitle} from "../support/common-helpers";

class AddPhysicalFormPage {

    assertPageTitle() {
        verifyPageTitle("What is the physical form of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submitButton()
      }
}
  
export default new AddPhysicalFormPage;
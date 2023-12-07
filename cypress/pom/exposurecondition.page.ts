import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class ExposureConditionPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "intended to be rinsed off or left on?")
        verifyPageTitle("intended to be rinsed off or left on?")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }
  
}
  
export default new ExposureConditionPage;
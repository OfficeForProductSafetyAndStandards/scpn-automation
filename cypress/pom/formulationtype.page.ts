import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class FormulationTypePage {

    assertPageTitle() {
        verifyPageTitle("How will you provide")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }
  
}
  
export default new FormulationTypePage;
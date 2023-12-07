import {select, submit, verifyPageTitle} from "../support/common-helpers";

class FormulationTypePage {

    assertPageTitle() {
        verifyPageTitle("How will you provide")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
     }
  
}
  
export default new FormulationTypePage;
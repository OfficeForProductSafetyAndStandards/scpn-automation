import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class NumberOfShadesPage {

    assertPageTitle() {
        verifyPageTitle("available in different shades")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
      }
  
}
  
export default new NumberOfShadesPage;
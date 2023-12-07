import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class NumberOfShadesPage {

    assertPageTitle() {
        verifyPageTitle("Carcinogenic, mutagenic or reprotoxic substances")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
    }

}
  
export default new NumberOfShadesPage;
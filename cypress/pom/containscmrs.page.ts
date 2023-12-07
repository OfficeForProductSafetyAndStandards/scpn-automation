import {select, submit, verifyPageTitle} from "../support/common-helpers";

class NumberOfShadesPage {

    assertPageTitle() {
        verifyPageTitle("Carcinogenic, mutagenic or reprotoxic substances")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
    }

}
  
export default new NumberOfShadesPage;
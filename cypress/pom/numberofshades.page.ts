import {select, submit, verifyPageTitle} from "../support/common-helpers";

class NumberOfShadesPage {

    assertPageTitle() {
        verifyPageTitle("available in different shades")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
      }
  
}
  
export default new NumberOfShadesPage;
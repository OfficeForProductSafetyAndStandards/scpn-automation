import {select, submit, verifyPageTitle} from "../support/common-helpers";

class ChildrenUnderThreePage {

    assertPageTitle() {
        verifyPageTitle("children under 3 years old")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
    }

  }
  
export default new ChildrenUnderThreePage;
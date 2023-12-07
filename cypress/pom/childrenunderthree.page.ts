import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class ChildrenUnderThreePage {

    assertPageTitle() {
        verifyPageTitle("children under 3 years old")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
    }

  }
  
export default new ChildrenUnderThreePage;
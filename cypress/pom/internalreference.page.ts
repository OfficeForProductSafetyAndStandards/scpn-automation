import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class InternalReferencePage {

    assertPageTitle() {
        verifyPageTitle("Internal reference")
    }

    choose(answer: string) {
        select(answer)
    }

    submit() {
        submitButton()
      }
  
  }
  
export default new InternalReferencePage;
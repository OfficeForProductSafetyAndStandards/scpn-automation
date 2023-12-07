import {select, submit, verifyPageTitle} from "../support/common-helpers";

class InternalReferencePage {

    assertPageTitle() {
        verifyPageTitle("Internal reference")
    }

    choose(answer: string) {
        select(answer)
    }

    submit() {
        submit()
      }
  
  }
  
export default new InternalReferencePage;
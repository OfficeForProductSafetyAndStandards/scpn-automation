import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class NanomaterialPurposePage {

    assertPageTitle() {
        verifyPageTitle("What is the purpose of this nanomaterial?")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }

}
  
export default new NanomaterialPurposePage;
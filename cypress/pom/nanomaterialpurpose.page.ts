import {select, submit, verifyPageTitle} from "../support/common-helpers";

class NanomaterialPurposePage {

    assertPageTitle() {
        verifyPageTitle("What is the purpose of this nanomaterial?")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
     }

}
  
export default new NanomaterialPurposePage;
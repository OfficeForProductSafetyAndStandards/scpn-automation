import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class MultiItemMixedPage {

    assertPageTitle() {
        verifyPageTitle("Does the kit contain items that need to be mixed?")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }

}
  
export default new MultiItemMixedPage;
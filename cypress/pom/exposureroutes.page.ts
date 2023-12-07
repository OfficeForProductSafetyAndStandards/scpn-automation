import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class ExposureRoutesPage {

    assertPageTitle() {
        verifyPageTitle("How is the user likely to be exposed to the nanomaterials?")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }
  
}
  
export default new ExposureRoutesPage;
import {submitButton, verifyPageTitle} from "../support/common-helpers";

class NanomaterialPlacedOnMarketPage {

    assertPageTitle() {
        verifyPageTitle("When can you place products containing this nanomaterial on the market?")
    }
  
    submit() {
        submitButton()
     }

}
  
export default new NanomaterialPlacedOnMarketPage;
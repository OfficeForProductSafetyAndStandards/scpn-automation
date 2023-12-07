import {verifyPageTitle} from "../support/common-helpers";

class NanomaterialPage {

    assertPageTitle() {
        verifyPageTitle("Nanomaterials")
    }
  
    selectAddNanomaterial() {
        cy.get("a").contains("Add a nanomaterial").click()
    }
  
  }
  
export default new NanomaterialPage;
import {submitButton, verifyPageTitle} from "../support/common-helpers";

class AddProductImagePage {

    assertPageTitle() {
        verifyPageTitle("Upload")
    }
  
    chooseFile() {
        const filepath = '../images/testjpeg.jpg'
        cy.get('input[type="file"]').attachFile(filepath)   
        submitButton()
    }
  
  }
  
export default new AddProductImagePage;
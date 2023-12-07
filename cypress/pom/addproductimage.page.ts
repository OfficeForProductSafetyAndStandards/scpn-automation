import {submit, verifyPageTitle} from "../support/common-helpers";

class AddProductImagePage {

    assertPageTitle() {
        verifyPageTitle("Upload")
    }
  
    chooseFile() {
        const filepath = '../images/testjpeg.jpg'
        cy.get('input[type="file"]').attachFile(filepath)   
        submit()
    }
  
  }
  
export default new AddProductImagePage;
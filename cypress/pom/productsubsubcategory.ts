import {submitButton, verifyPageTitle} from "../support/common-helpers";

class ProductSubSubCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submitButton()
    }

}
  
export default new ProductSubSubCategoryPage;
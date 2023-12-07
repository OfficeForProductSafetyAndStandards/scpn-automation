import {submitButton, verifyPageTitle} from "../support/common-helpers";

class ProductSubCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submitButton()
    }

}
  
export default new ProductSubCategoryPage;
import {submitButton, verifyPageTitle} from "../support/common-helpers";

class ProductRootCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of cosmetic product is it?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submitButton()
    }
  
}
  
export default new ProductRootCategoryPage;
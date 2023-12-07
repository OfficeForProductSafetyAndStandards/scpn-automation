import {verifyPageTitle} from "../support/common-helpers";

class NotificationResultPage{
    assertPageTitle(){
        cy.get('h1').contains("Cosmetic products search - results")
        verifyPageTitle("Cosmetic products search - results")
    }

    assertIngredientPageTitle(){
        verifyPageTitle("Ingredient – search results")
    }
    select(text: string){
        cy.get(`tr:contains(${text})`).eq(0).within(function (){
            cy.get('a').click()
        })
    }
}

export default new NotificationResultPage;
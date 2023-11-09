class NotificationresultPage{
    assertPageTitle(){
        cy.get('h1').contains("Cosmetic products search - results")
    }

    assertIngredientPageTitle(){
        cy.get('h1').contains(" Ingredient – search results ");
    }
    select(text: string){
        cy.get(`tr:contains(${text})`).eq(0).within(function (){
            cy.get('a').click()
        })
    }
}

export default new NotificationresultPage;
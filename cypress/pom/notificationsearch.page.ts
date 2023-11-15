class NotificationsearchPage{
    assertPageTitle(){
        cy.get('h1').contains("Cosmetic products search");
    }

    search(text: string){
        cy.get('#notification_search_form_q').type(text);
    }
    searchIngredient(text: string){
        cy.get('#ingredient_search_form_q').type(text);
    }

    selectNotificationStatus(type: string){
        cy.get('fieldset').contains(type).click();
    }
    selectSortingOrder(type: string){
        cy.get(".govuk-radios").contains(type).click()
    }
    selectIngredient(){
        cy.get('a').contains('Ingredients search').click()
    }
    submit() {
        cy.get('button[class="govuk-button"]').last().click()
    }

    assertCosmeticSearch(){
        cy.get('a').contains("Cosmetic products search")
    }

    assertIngredientSearch(){
        cy.get('a').contains("Ingredients search")
    }
}

export default new NotificationsearchPage;
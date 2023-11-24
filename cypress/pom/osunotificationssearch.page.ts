class OsuNotificationsSearchPage{
    assertPageTitle(){
        cy.get("h1").contains('Search for cosmetic product notifications')
    }

    view(){
        cy.get('a').contains("Submitted date").click()
        cy.get('a').contains("View").click()
    }

}

export default new OsuNotificationsSearchPage();
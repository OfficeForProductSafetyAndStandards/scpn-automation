class OSUResponsiblePersonSearchResultPage {
    assertPageTitle(){
        cy.get('h1').contains('Search for a Responsible Person account')
    }
    view(){
        cy.get('a').contains("View").click()
    }
}

export default new OSUResponsiblePersonSearchResultPage();
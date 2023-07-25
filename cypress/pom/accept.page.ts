class AcceptPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Submission complete")
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }

    selectNotifiedProductsLink(){
        cy.contains('notified cosmetic products').click()
    }
  
}
  
export default new AcceptPage;
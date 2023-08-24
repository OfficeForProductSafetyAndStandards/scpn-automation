class ProductPage {

    assertPageTitle(name:string) {
      cy.get("h1").should("contain", name)
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }

    selectNotifiedProductsLink(){
        cy.contains('notified cosmetic products').click()
    }
  
}
  
export default new ProductPage;
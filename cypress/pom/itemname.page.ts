class ItemNamePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What is the item name?")
    }
  
    enterItemName(name: string) {
      cy.get("#component_name").type(name)
    }

    submit() {
      cy.get('.govuk-button').last().click()
  }

}
   
export default new ItemNamePage;
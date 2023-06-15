class ResponsiblePersonPage {

  assertUser(value: string){
        cy.get(".govuk-summary-list__value").contains(value)
  }

  fillEmail(email: string) {
    cy.get("#email").type(email)
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Responsible Person")
  }

  selectCosmeticProducts() {
    cy.get("a").contains("Cosmetic products").click()
  }
  
}
  
export default new ResponsiblePersonPage;
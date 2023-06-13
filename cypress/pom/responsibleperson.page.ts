class ResponsiblePersonPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Responsible Person")
    }
  
    selectCosmeticProducts() {
        cy.get("a").contains("Cosmetic products").click()
    }
  
  }
  
export default new ResponsiblePersonPage;
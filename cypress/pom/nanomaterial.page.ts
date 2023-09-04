class NanomaterialPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Nanomaterials")
    }
  
    selectAddNanomaterial() {
        cy.get("a").contains("Add a nanomaterial").click()
    }
  
  }
  
export default new NanomaterialPage;
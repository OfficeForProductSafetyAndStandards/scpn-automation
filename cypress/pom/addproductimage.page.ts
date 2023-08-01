class AddProductImagePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Upload")
    }
  
    chooseFile() {
        const filepath = '../images/testjpeg.jpg'
        cy.get('input[type="file"]').attachFile(filepath)   
        cy.get('button[class="govuk-button"]').last().click()
    }
  
  }
  
export default new AddProductImagePage;
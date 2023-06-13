class AddProductImagePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Upload an image")
    }
  
    chooseFile() {
        const filepath = '../images/testjpeg.jpg'
        cy.get('input[type="file"]').attachFile(filepath)   
    }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
      }
  
  }
  
export default new AddProductImagePage;
class UploadIngredientsFilePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Upload the ingredients CSV file")
    }
  
    chooseFile() {
      const filepath = '../images/template-1-example.csv'
      cy.get('input[type="file"]').attachFile(filepath)   
    }

    submit() {
      cy.get('button[class="govuk-button"]').last().click()
    }
  
}
  
export default new UploadIngredientsFilePage;
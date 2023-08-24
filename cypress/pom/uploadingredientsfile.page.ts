class UploadIngredientsFilePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Upload the ingredients CSV file")
    }
  
    chooseFile(filename: string) {
      const filepath = `../images/${filename}`
      cy.get('input[type="file"]').attachFile(filepath)   
    }

    submit() {
      cy.get('button[class="govuk-button"]').last().click()
    }
  
}
  
export default new UploadIngredientsFilePage;
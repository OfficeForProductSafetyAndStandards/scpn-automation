class NanomaterialUploadPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Upload details about the nanomaterial")
    }

    chooseFile(filename: string) {
        const filepath = `../images/${filename}`
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('button[class="govuk-button"]').last().click()
    }

}

export default new NanomaterialUploadPage;
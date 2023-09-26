class ArchiveReasonPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Reason for archiving")
    }
  
    choose(answer: string) {
      cy.get(".govuk-label").contains(answer).click()
      cy.get('button[class="govuk-button"]').last().click()
    }

  }
  
export default new ArchiveReasonPage;
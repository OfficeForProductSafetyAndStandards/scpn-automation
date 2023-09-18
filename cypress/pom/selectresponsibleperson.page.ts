class SelectResponsiblePersonPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Select the Responsible Person")
    }
  
    selectRP(user:string) {
      cy.contains(user).click({ force: true });
    }
  
    submit() {
      cy.get('button[class="govuk-button"]').last().click()
    }
}
  
export default new SelectResponsiblePersonPage;


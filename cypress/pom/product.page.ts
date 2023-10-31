class ProductPage {

    assertPageTitle(name:string) {
      cy.get("h1").should("contain", name)
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }

    selectNotifiedProductsLink(){
        cy.contains('notified cosmetic products').click()
    }

    selectArchiveNotificationLink(){
        cy.get('a').contains('Archive this notification').click()
    }

    selectUnarchiveNotificationLink(){
        cy.get('a').contains('Unarchive this notification').click()
    }

    selectDeleteNotificationLink(){
        cy.get('a').contains('Delete this notification').click()
    }
    
    checkCopyArchiveDelete(){
        if (cy.get('a').contains("Copy this notification") && cy.get('a').contains("Archive this notification") && cy.get('a').contains("Delete this notification")){
            return true;
        }
        return false;
    }
}
  
export default new ProductPage;
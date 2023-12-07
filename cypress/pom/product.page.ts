import {submit, verifyPageTitle} from "../support/common-helpers";

class ProductPage {

    assertPageTitle(name:string) {
        verifyPageTitle(name)
    }

    submit() {
        submit()
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
        return (cy.get('a').contains("Copy this notification") && cy.get('a').contains("Archive this notification") && cy.get('a').contains("Delete this notification"))
    }

}
  
export default new ProductPage;
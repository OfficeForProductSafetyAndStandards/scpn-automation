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
        return (cy.get('a').contains("Copy this notification") && cy.get('a').contains("Archive this notification") && cy.get('a').contains("Delete this notification"))
    }

    getProductNumber():string{
        let ans = ""
        cy.get("dt").contains("UK cosmetic product number").siblings().then($word => {
            ans = $word.text()
        
            console.log("this is ans " + ans)
            return ans
        })
        
        cy.wait(2000)
        return ans
    }
    getUKNotified():string{
        let ans = ""
        cy.get("dt").contains("UK notified").siblings().then($word => {
            ans = $word.text()
        })
        cy.wait(2000)
        return ans
    }
}
  
export default new ProductPage;
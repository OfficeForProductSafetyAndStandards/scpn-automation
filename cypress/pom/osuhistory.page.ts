class OSUHistoryPage{
    checkRPChanges(Name:string, Type:string, OSUName: string, RPAddress: string []){
        cy.get(".govuk-table__row").eq(1).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Address change")
            cy.get('td').eq(3).should('contain', RPAddress[0]).should('contain', RPAddress[1]).should('contain', RPAddress[2]).should('contain', RPAddress[3]).should('contain', RPAddress[4])
        })
        cy.get(".govuk-table__row").eq(2).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Business type change")
            cy.get('td').eq(3).should('contain', 'Change from: Individual or sole trader').should("contain", "To: " + Type)
        })
        cy.get(".govuk-table__row").eq(3).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Name change")
            cy.get('td').eq(3).should('contain', 'Change from: Nashtech12').should("contain", "To: " + Name)
        })
        cy.get(".govuk-table__row").eq(4).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Address change")
        })
        cy.get(".govuk-table__row").eq(5).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Business type change")
            cy.get('td').eq(3).should('contain', 'Change from: ' + Type).should("contain", "To: Individual or sole trader")
        })
        cy.get(".govuk-table__row").eq(6).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("RP (" + Cypress.env("RP") +") Name change")
            cy.get('td').eq(3).should('contain', 'Change from: ' + Name).should("contain", "To: Nashtech12")
        })
    }
    checkSearchChanges(role: string, OSUName: string){
        cy.get(".govuk-table__row").eq(1).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("User (" + Cypress.env("SEARCH_USER_EMAIL") +") role change")
            cy.get('td').eq(3).should('contain', 'Change from: OPSS General').should("contain", "To: " + role)
        })
        cy.get(".govuk-table__row").eq(2).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("User (" + Cypress.env("SEARCH_USER_EMAIL") +") role change")
            cy.get('td').eq(3).should('contain', 'Change from: ' + role).should("contain", "To: OPSS General")
        })
    }
    checkNotification(notificationNo:string, OSUName: string){
        if(notificationNo.charAt(5) == '0'){
            notificationNo = notificationNo.substring(0,5) + notificationNo.substring(6, notificationNo.length)
        }
        cy.get(".govuk-table__row").eq(1).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("UKCP number " + "("+notificationNo.replaceAll('UKCP-', "").trim()+") recovery")
            cy.get('td').eq(3).should('contain', OSUName + ' recovered ' + notificationNo.replaceAll('-', " "))
        })
        cy.get(".govuk-table__row").eq(2).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("UKCP number " + "("+notificationNo.replaceAll('UKCP-', "").trim()+") deletion")
            cy.get('td').eq(3).should('contain', OSUName + ' deleted ' + notificationNo.replaceAll('-', " "))
        })
    }
    checkAccountStatus(OSUName: string){
        cy.get(".govuk-table__row").eq(1).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("User (gileadbempah+search@gmail.com) reactivation")
            cy.get('td').eq(3).should('contain', OSUName + " reactivated user gileadbempah+search@gmail.com")
        })
        cy.get(".govuk-table__row").eq(2).within(function (){
            cy.get('td').eq(0).contains(OSUName)
            let date = new Date()
            cy.get('td').eq(1).contains(date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear())
            cy.get('td').eq(2).contains("User (gileadbempah+search@gmail.com) deactivation")
            cy.get('td').eq(3).should('contain', OSUName + " deactivated user gileadbempah+search@gmail.com")
        })
    }
}
export default new OSUHistoryPage()
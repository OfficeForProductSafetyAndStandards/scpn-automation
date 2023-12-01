class OSUDashboardPage{
    assertPageTitle(){
        cy.get("h1").contains("Dashboard")
    }

    gotoAccountAdmin(){
        cy.get("a").contains("Account administration").click()
    }

    gotoManageCosmetics(){
        cy.get("a").contains("Manage cosmetic notifications").click()
    }

    gotoResponsiblePerson(){
        cy.get("a").contains("Responsible Person administration").click()
    }
    gotoChangeHistory(){
        cy.get("a").contains("Change history log").click()
    }
    goToAccountSettings(){
        cy.get('.govuk-header__link:contains("Your account")').click()
    }
}

export default new OSUDashboardPage();
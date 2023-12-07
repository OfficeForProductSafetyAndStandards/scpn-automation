import {checkLink} from "../support/common-helpers";

class HeaderPage {
    assertHeaderLoggedIn(type: string) {
        checkLink("GOV.UK", '/')
        cy.get("button").contains("Sign out")
        checkLink("Your account", '/my_account')
        if(type == "Submit") {
            cy.get('header').within(function () {
                checkLink("Submit cosmetic product notifications", '/responsible_persons/products-redirect')
            })
        }
        else if(type == "Search"){
            cy.get('header').within(function () {
                checkLink("Search cosmetic product notifications", '/notifications')
            })
        }
        else if(type == "OSU"){
            cy.get('header').within(function () {
                checkLink("OSU Support Portal", '/')
            })
        }
    }

    assertHeaderLoggedOut(accountType: string) {
        cy.get('header').contains('GOV.UK')
        checkLink("Sign in", '/sign-in')
        if(accountType == "Submit") {
            cy.get('header').within(function () {
                checkLink("Submit cosmetic product notifications", '#')
            })
        }
        else if(accountType == "Search") {
            cy.get('header').within(function () {
                checkLink("Search cosmetic product notifications", '#')
            })
        }
        else if(accountType == "OSU") {
            cy.get('header').within(function () {
                checkLink("OSU Support Portal", '/')
            })
        }
    }

    signOut() {
        cy.get('header').within(function () {
            cy.get("button").contains("Sign out").click()
        })
    }
}

export default new HeaderPage();
class TaskListPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Add a cosmetic product")
    }

    assertProductApplicationCompleted(product: string) {
        cy.get("#product-status").should("contain", "complete")
        cy.get("h1").should("contain", product)
    }

    assertMultiItemApplicationCompleted() {
        cy.get("#multi-item-status").should("contain", "complete")
    }

    assertItemCompleted(name: string) {
        cy.contains('span', name)
            .siblings('b')
            .should("contain", "complete")
    }

    selectFirstItem() {
        cy.get("a").contains("Item #1").click()
    }

    selectSecondtItem() {
        cy.get("a").contains("Item #2").click()
    }

    selectCreateProduct() {
        cy.get("a").contains("Go to question").click()
    }

    selectMultiItemKit() {
        cy.get("a").contains("Define the multi-item kit").click()
    }

    selectProductDetails() {
        cy.get("ol").within(() => {

            let list: number[] = []


            cy.get("ul").each((ul) => {
                list.push(1)
            }).then(() => {
                let num: number = list.length
                //if number of UL obtained is 3 ..
                if (num == 3) {
                    cy.get("ul").eq(1).within(() => {
                        cy.get("a").click()
                    })
                } else if (num == 4) {
                    cy.get("ul").eq(2).within(() => {
                        cy.get("a").click()
                    })
                } else if (num == 5) {
                    cy.get("ul").eq(3).within(() => {
                        cy.get("a").click()
                    })
                }
            })
        })
    }


    //go to nanomaterials unordered list (second ul), get all Go to question "a"
    //click on purpose go to question of chosen nanomaterial number
    selectNanomaterials(value: number) {
        cy.get("ol").within(() => {
            cy.get("ul").eq(1).within(() => {
                cy.get("a").filter(':contains("Go to question")').eq(0 + (4 * (value - 1))).click()
            })
        })
    }

    goToSummary() {
        cy.get("a").contains("Go to summary").click()
    }

    isIncomplete() {
        cy.get("p").contains("Cosmetic product notification incomplete")
    }

    sectionsCompleted() {
        cy.get("p").contains("You have completed")
    }

    numberOfQuestionsOne() {
        return cy.get("a").filter(':contains("Go to question")').its('length').should('eq', 1)
    }

    numberOfQuestionsMany() {
        return cy.get("a").filter(':contains("Go to question")').its('length').should('be.gt', 1)
    }

    goQuestion(value: number) {
        cy.get("ol").within(() => {
            cy.get("a").filter(':contains("Go to question")').eq(value - 1).click()
        })
    }

    viewDeletePresent() {
        return (cy.get(".govuk-button-group").contains("View draft") && cy.get(".govuk-button-group").contains("Delete this draft"))
    }
}

export default new TaskListPage;
class SearchproductPage{

    assertPageTitle(productName: string){
        cy.get('h1').contains(productName)
    }

    containsCosmeticProductNumber(){
        cy.get('dt').contains("cosmetic product number")
    }
    containsProductNotified(){
        cy.get('dt').contains("notified")
    }
    containsProductName(){
        cy.get('dt').contains("Product name")
    }
    containsUnder3(){
        cy.get('dt').contains("For children under 3")
    }
    containsNumberItems(){
        cy.get('dt').contains("Number of items")
    }
    containsShades(amount: number){
        cy.get('dt:contains("Shades")').should("have.length", amount)
    }
    containsLabelImage(){
        cy.get('dt').contains("Label image")
    }
    containsMixed(){
        cy.get('dt').contains("Are the items mixed")
    }
    containsResponsiblePerson(){
        cy.get(`.opss-border-all`).filter(':contains("Responsible Person")').within(function (){
            cy.get('dt').contains("Name")
            cy.get('dt').contains("Address")
        })
    }
    containsAssignedContact(){
        cy.get(`.opss-border-all`).filter(':contains("Assigned contact")').within(function (){
            cy.get('dt').contains("Name")
            cy.get('dt').contains("Email")
            cy.get('dt').contains("Telephone")
        })
    }
    containsAddressHistory(){
        cy.get(`.opss-border-all`).filter(':contains("Address history")')
    }
    containsCMR(amount: number){
        cy.get('dt:contains("Contains CMR substances")').should("have.length", amount)
    }
    containsNanomaterials(amount: number){
        cy.get(`dt:contains("Nanomaterials")`).should("have.length", amount*2)
    }
    containsApplicationInstructions(amount: number){
        cy.get('dt:contains("Application instruction")').should("have.length", amount)
    }

    containsExposureCondition(amount: number){
        cy.get('dt:contains("Exposure condition")').should("have.length", amount)
    }
    containsCategoryOfProduct(amount: number){
        cy.get('dt:contains("Category of product")').should("have.length", amount)
        cy.get('dt:contains("Category of skin product")').should("have.length", amount)
        cy.get('dt:contains("Category of skin care product")').should("have.length", amount)
    }

    containsPhysicalForm(amount: number){
        cy.get('dt:contains("Physical form")').should("have.length", amount)
    }

    containsSpecialApplicator(amount: number){
        cy.get('dt:contains("Special applicator")').should("have.length", amount)
        cy.get('dt:contains("Applicator type")').should("have.length", amount)
    }
    containsPH(amount: number){
        cy.get('dt:contains("pH")').should("have.length", amount)
    }
    containsFormulation(amount: number){
        cy.get('dt:contains("Formulation given as")').should("have.length", amount)
    }
    containsIngredients(amount: number){
        cy.get('.govuk-\\!-margin-bottom-4:contains("Ingredient")').should("have.length", amount)
    }
    containsPercentage(){
        cy.get(`.govuk-\\!-margin-bottom-4:contains("w/w")`).should("have.length", 2)
    }
    notifiedNPIS(){
        cy.get('h4').contains("Ingredients the NPIS needs to know about")
    }
    containsCAS(){
        cy.get(`.govuk-\\!-margin-bottom-4:contains("CAS")`)
    }

    containsPDF(){
        cy.get('a:contains(".pdf")').should("have.length", 2)
    }
}

export default  new SearchproductPage()
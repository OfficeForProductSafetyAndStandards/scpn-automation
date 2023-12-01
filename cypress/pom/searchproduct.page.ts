import * as cypress from "cypress"

class SearchProductPage{

    assertPageTitle(productName: string){
        cy.get('h1').contains(productName)
    }

    containsCosmeticProductNumber(number: string){
        cy.hasKeyValueDetails("cosmetic product number", number)
    }
    containsProductNotified(date: string){
        cy.hasKeyValueDetails("notified", date)
    }
    containsProductName(){
        cy.get('dt').contains("Product name")
    }
    containsUnder3(ans: string){
        cy.hasKeyValueDetails("For children under 3", ans)
    }
    containsNumberItems(ans: string){
        cy.hasKeyValueDetails("Number of items", ans)
    }
    containsShades(amount: number){
        cy.get('dt:contains("Shades")').should("have.length", amount)
    }
    containsLabelImage(){
        cy.get('dt').contains("Label")
    }
    containsMixed(){
        cy.get('dt').contains("Are the items mixed")
    }
    containsResponsiblePerson(name: string, role:string){
        if(role == "OSU"){
            //opss-info-panel
            cy.get(`.opss-info-panel`).filter(':contains("Responsible Person")').within(function (){
                cy.get('h3').contains("Name")
                cy.get('h3').contains("Name").next().contains(name)
                cy.get('h3').contains("Address")
            })
        }
        else {
            cy.get(`.opss-border-all`).filter(':contains("Responsible Person")').within(function () {
                cy.get('dt').contains("Name")
                cy.get('dt').contains("Name").next().contains(name)
                cy.get('dt').contains("Address")
            })
        }
    }
    containsAssignedContact(name: string, email: string, telephone: string, role: string){
        if(role == 'OSU'){
            cy.get(`.opss-info-panel`).filter(':contains("Assigned contact")').within(function () {
                cy.get('h3').contains("Name")
                cy.get('h3').contains("Name").next().contains(name)
                cy.get('h3').contains("Email")
                cy.get('h3').contains("Email").next().contains(email)
                cy.get('h3').contains("Telephone")
                cy.get('h3').contains("Telephone").next().contains(telephone)
            })
        }
        else {
            cy.get(`.opss-border-all`).filter(':contains("Assigned contact")').within(function () {
                cy.get('dt').contains("Name")
                cy.get('dt').contains("Name").next().contains(name)
                cy.get('dt').contains("Email")
                cy.get('dt').contains("Email").next().contains(email)
                cy.get('dt').contains("Telephone")
                cy.get('dt').contains("Telephone").next().contains(telephone)
            })
        }
    }
    containsAddressHistory(){
        cy.get(`.opss-border-all`).filter(':contains("Address history")')
    }
    containsCMR(amount: number, ans: string, items: string[], substancenames: string []){
        cy.get('dt:contains("Contains CMR substances")').should("have.length", amount)
        cy.hasKeyValueDetails("Contains CMR substances", ans) //dwdw
        cy.hasKeyValueDetail(items[0], "CMR substances", substancenames[0])
        cy.get("dt:contains('CMR substances')").eq(1).siblings().contains(substancenames[0])
        cy.get("dt:contains('CMR substances')").eq(3).siblings().contains(substancenames[1])
    }
    containsNanomaterials(amount: number, item: string [], nanomaterial: string){
        cy.get(`dt:contains("Nanomaterials")`).should("have.length", amount*2)

        cy.hasKeyValueDetail(item[0],"Nanomaterials", nanomaterial)
        cy.hasKeyValueDetail(item[1],"Nanomaterials", nanomaterial)
    }
    containsApplicationInstructions(amount: number){
        cy.get('dt:contains("Application instruction")').should("have.length", amount)
    }

    containsExposureCondition(amount: number){
        cy.get('dt:contains("Exposure condition")').should("have.length", amount)
    }
    containsCategoryOfProduct(amount: number, category: string [], item: string []){
        cy.hasKeyValueDetail(item[0],"Category of product", category[0])
        cy.hasKeyValueDetail(item[1],"Category of product", category[1])
    }

    containssubCategoryOfProduct(amount: number, category:string [],  item: string [], subcategory: string []){
        //cy.get('dt:contains("Category of skin product")').should("have.length", amount)
        cy.hasKeyValueDetail(item[0],"Category of " + category[0], subcategory[0])
        cy.hasKeyValueDetail(item[1],"Category of " + category[1], subcategory[1])
    }
    containssubsubCategoryOfProduct(amount: number, subcategory:string [],  item: string [], subsubcategory: string []){
        //cy.get('dt:contains("Category of skin product")').should("have.length", amount)
        cy.hasKeyValueDetail(item[0],"Category of " + subcategory[0], subsubcategory[0])
        cy.hasKeyValueDetail(item[1],"Category of " + subcategory[1], subsubcategory[1])
    }
    containsPhysicalForm(amount: number, item: string [], form: string[]){
        cy.get('dt:contains("Physical form")').should("have.length", amount)
        cy.hasKeyValueDetail(item[0],"Physical form", form[0])
        cy.hasKeyValueDetail(item[1],"Physical form", form[1])
    }

    containsSpecialApplicator(amount: number, applicatorType: string){
        cy.get('dt:contains("Special applicator")').should("have.length", amount)
        cy.get('dt:contains("Applicator type")').should("have.length", amount).siblings().contains(applicatorType)
    }
    containsApplicatortype(string: string){

    }
    containsPH(amount: number){
        cy.get('dt:contains("pH")').should("have.length", amount)
    }
    containsFormulation(amount: number){
        cy.get('dt:contains("Formulation given as")').should("have.length", amount)
    }
    containsIngredients(amount: number,items: string[], list: string []){
        cy.get('.govuk-\\!-margin-bottom-4:contains("Ingredient")').should("have.length", amount)
        for(let i = 0; i < amount; i++){
            let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
            cy.get(id).within(function (){
                cy.get("dt").contains(list[i])
            })
        }
    }
    containsPercentage(items: string[], list: string[]){
        cy.get(`.govuk-\\!-margin-bottom-4:contains("w/w")`).should("have.length", 2)
        for(let i = 0; i < list.length; i++){
            let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
            cy.get(id).within(function (){
                cy.get(".govuk-\\!-margin-bottom-4").contains(list[i])
            })
        }
    }
    notifiedNPIS(){
        cy.get('h4').contains("Ingredients the NPIS needs to know about")
    }
    containsCAS(amount: number, items: string[], list: string []){
        cy.get(`.govuk-\\!-margin-bottom-4:contains("CAS")`)
        for(let i = 0; i < amount; i++){
            let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
            cy.get(id).within(function (){
                cy.get(".govuk-\\!-margin-bottom-4").contains(list[i])
            })
        }
    }

    containsPDF(){
        cy.get('a:contains(".pdf")').should("have.length", 2)
    }
    delete(){
        cy.get("button").contains("Delete this notification").click()
    }
    recover(){
        cy.get("button").contains("Recover this notification").click()
    }
}

// @ts-ignore
export default new SearchProductPage();
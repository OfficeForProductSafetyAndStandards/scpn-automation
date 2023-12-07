import * as cypress from "cypress"
import {verifyPageTitle} from "../support/common-helpers";

class SearchProductPage{

    assertPageTitle(productName: string){
        verifyPageTitle(productName)
    }

    containsCosmeticProductNumber(number: string){
        return cy.hasKeyValueDetails("cosmetic product number", number)
    }
    containsProductNotified(date: string){
        return cy.hasKeyValueDetails("notified", date)
    }
    containsProductName(){
        return cy.get('dt').contains("Product name")
    }
    containsUnder3(ans: string){
        return cy.hasKeyValueDetails("For children under 3", ans)
    }
    containsNumberItems(ans: string){
        return cy.hasKeyValueDetails("Number of items", ans)
    }
    containsShades(amount: number){
        return cy.get('dt:contains("Shades")').should("have.length", amount)
    }
    containsLabelImage(){
        return cy.get('dt').contains("Label")
    }
    containsMixed(){
        return cy.get('dt').contains("Are the items mixed")
    }
    containsResponsiblePerson(name: string, role:string){
        if(role == "OSU"){
            //opss-info-panel
            return cy.get(`.opss-info-panel`).filter(':contains("Responsible Person")').within(function (){
                cy.get('h3').contains("Name")
                cy.get('h3').contains("Name").next().contains(name)
                cy.get('h3').contains("Address")
            })
        }
        else {
            return cy.get(`.opss-border-all`).filter(':contains("Responsible Person")').within(function () {
                cy.get('dt').contains("Name")
                cy.get('dt').contains("Name").next().contains(name)
                cy.get('dt').contains("Address")
            })
        }
    }
    containsAssignedContact(name: string, email: string, telephone: string, role: string){
        if(role == 'OSU'){
            return cy.get(`.opss-info-panel`).filter(':contains("Assigned contact")').within(function () {
                cy.get('h3').contains("Name")
                cy.get('h3').contains("Name").next().contains(name)
                cy.get('h3').contains("Email")
                cy.get('h3').contains("Email").next().contains(email)
                cy.get('h3').contains("Telephone")
                cy.get('h3').contains("Telephone").next().contains(telephone)
            })
        }
        else {
            return cy.get(`.opss-border-all`).filter(':contains("Assigned contact")').within(function () {
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
       return cy.get(`.opss-border-all`).filter(':contains("Address history")')
    }
    containsCMR(amount: number, ans: string, items: string[], substancenames: string []){
        return cy.get('dt:contains("Contains CMR substances")').should("have.length", amount).then(function () {
            cy.hasKeyValueDetails("Contains CMR substances", ans) //dwdw
            cy.hasKeyValueDetail(items[0], "CMR substances", substancenames[0])
            cy.get("dt:contains('CMR substances')").eq(1).siblings().contains(substancenames[0])
            cy.get("dt:contains('CMR substances')").eq(3).siblings().contains(substancenames[1])
        })
    }
    containsCMRNotPresent(){
        return cy.get('dt:contains("Contains CMR substances")').should('not.exist')
    }
    containsNanomaterials(amount: number, item: string [], nanomaterial: string){
        return cy.get(`dt:contains("Nanomaterials")`).should("have.length", amount*2).then(function (){
            cy.hasKeyValueDetail(item[0],"Nanomaterials", nanomaterial)
            cy.hasKeyValueDetail(item[1],"Nanomaterials", nanomaterial)
        })
    }
    containsNanomaterialsNotPresent(){
        return cy.get(`dt:contains("Nanomaterials")`).should('not.exist')
    }
    containsApplicationInstructions(amount: number){
        cy.get('dt:contains("Application instruction")').should("have.length", amount)
    }

    containsExposureCondition(amount: number){
        cy.get('dt:contains("Exposure condition")').should("have.length", amount)
    }
    containsCategoryOfProduct(amount: number, category: string [], item: string []){
        return cy.hasKeyValueDetail(item[0],"Category of product", category[0]).then( function () {
            cy.hasKeyValueDetail(item[1],"Category of product", category[1])
        })
    }
    containsCategoryOfProductNotPresent(){
        return cy.get(`dt:contains("Category of product")`).should('not.exist')
    }

    containssubCategoryOfProduct(amount: number, category:string [],  item: string [], subcategory: string []){
        //cy.get('dt:contains("Category of skin product")').should("have.length", amount)
        return cy.hasKeyValueDetail(item[0],"Category of " + category[0], subcategory[0]).then(function (){
            cy.hasKeyValueDetail(item[1],"Category of " + category[1], subcategory[1])
        })

    }
    containssubsubCategoryOfProduct(amount: number, subcategory:string [],  item: string [], subsubcategory: string []){
        //cy.get('dt:contains("Category of skin product")').should("have.length", amount)
        return cy.hasKeyValueDetail(item[0],"Category of " + subcategory[0], subsubcategory[0]).then(function () {
            cy.hasKeyValueDetail(item[1],"Category of " + subcategory[1], subsubcategory[1])
        })
    }
    containsPhysicalForm(amount: number, item: string [], form: string[]){
        return cy.get('dt:contains("Physical form")').should("have.length", amount).then(function (){
            cy.hasKeyValueDetail(item[0],"Physical form", form[0])
            cy.hasKeyValueDetail(item[1],"Physical form", form[1])
        })
    }
    containsPhysicalFormNotPresent(){
        return cy.get(`dt:contains("Physical form")`).should('not.exist')
    }
    containsSpecialApplicator(amount: number, applicatorType: string){
        return cy.get('dt:contains("Special applicator")').should("have.length", amount).then(function () {
            cy.get('dt:contains("Applicator type")').should("have.length", amount).siblings().contains(applicatorType)
        })
    }
    containsSpecialApplicatorNotPresent(){
        return cy.get('dt:contains("Special applicator")').should('not.exist')
    }

    containsPH(amount: number){
        return cy.get('dt:contains("pH")').should("have.length", amount)
    }
    containsFormulation(amount: number){
        return cy.get('dt:contains("Formulation given as")').should("have.length", amount)
    }

    containsFormulationNotPresent(){
        return cy.get('dt:contains("Formulation given as")').should('not.exist')
    }

    containsIngredients(amount: number,items: string[], list: string []){
        return cy.get('.govuk-\\!-margin-bottom-4:contains("Ingredient")').should("have.length", amount).then(function () {
            for(let i = 0; i < amount; i++){
                let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
                cy.get(id).within(function (){
                    cy.get("dt").contains(list[i])
                })
            }
        })
    }
    containsIngredientsNotPresent(){
        return cy.get('.govuk-\\!-margin-bottom-4:contains("Ingredient")').should('not.exist')
    }
    containsPercentage(items: string[], list: string[]){
        return cy.get(`.govuk-\\!-margin-bottom-4:contains("w/w")`).then(function() {
            cy.get(`.govuk-\\!-margin-bottom-4:contains("w/w")`).should("have.length", 2)
            for(let i = 0; i < list.length; i++){
                let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
                cy.get(id).within(function (){
                    cy.get(".govuk-\\!-margin-bottom-4").contains(list[i])
                })
            }
        })
    }
    containsPercentageNotPresent(){
        cy.get(`.govuk-\\!-margin-bottom-4:contains("w/w")`).should('not.exist')
    }
    notifiedNPIS(){
        return cy.contains("Ingredients the NPIS needs to know about")
    }
    containsCAS(amount: number, items: string[], list: string []){
        return cy.get(`.govuk-\\!-margin-bottom-4:contains("CAS")`).then(function (){
            for(let i = 0; i < amount; i++){
                let id = '#' + items[i].toLowerCase().replaceAll((/\s/g), "-")
                cy.get(id).within(function (){
                    cy.get(".govuk-\\!-margin-bottom-4").contains(list[i])
                })
            }
        })

    }
    containsCASNotPresent(){
        return cy.get(`.govuk-\\!-margin-bottom-4:contains("CAS")`).should('not.exist')
    }

    containsPDF(){
        return cy.get('a:contains(".pdf")') || cy.get('a:contains(".pdf")').then(function (){
            cy.get('a:contains(".pdf")').should("have.length", 2)
        })
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
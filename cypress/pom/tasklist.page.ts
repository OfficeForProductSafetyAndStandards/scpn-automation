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
/**  obsolete
  selectProductDetails() {
    cy.get("a").contains("Product details").click()
  }
**/
  selectProductDetails() {
    cy.get("ol").within(() => {
    
      let list: number[] = []
      

    cy.get("ul").each((ul) => {
        list.push(1)  
    }).then(() => {
      let num: number = list.length
      //if number of UL obtained is 3 ..
      if (num == 3){
        cy.get("ul").eq(1).within(() => {
          cy.get("a").click()
        })
      }
      else if (num == 4){
        cy.get("ul").eq(2).within(() => {
          cy.get("a").click()
        })
      }
      else if (num == 5){
        cy.get("ul").eq(3).within(() => {
          cy.get("a").click()
        })
      }
    })

      /**if (cy.get("ul").its('length').should("eq", 3)){
        cy.get("ul").eq(1).within(() => {
          cy.get("a").click()
        })
      }
      else if (cy.get("ul").its('length').should("eq", 4)){
        cy.get("ul").eq(2).within(() => {
          cy.get("a").click()
        })
      }
      else if (cy.get("ul").its('length').should("eq", 5)){
        cy.get("ul").eq(3).within(() => {
          cy.get("a").click()
        })
      }**/
      
    })
  }


  /**
   * this code wont work as intended NanoMaterial#1 is not in an "a" block and it is also not a hyperlink, fix below
   * selectNanomaterials() {
    cy.get("a").contains("Nanomaterial #1").click()
  }
  **/


  //go to nanomaterials unordered list (second ul), get all Go to question "a"
  //click on purpose go to question of chosen nanomaterial number
  selectNanomaterials(value: number) {
    cy.get("ol").within(() => {
      cy.get("ul").eq(1).within(() => {
        cy.get("a").filter(':contains("Go to question")').eq(0+(4*(value-1))).click()
      })
    })
  }
  
  //obsolete function 
  selectAcceptandSubmit() {
    cy.get("a").contains("Accept and submit").click()
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

  numberOfQuestionsOne(){
      let list: any[] = []
      
      
      cy.get("a").each(($text) => {
          if ($text.text() == "Go to question"){
            list.push($text.text())
        }
      })
      
      if (list.length == 1){
        console.log("there was only one go to question")
        return true
      }
      return false
  }

  numberOfQuestionsMany(){
    let list: any[] = []
    
    cy.get("a").each(($text) => {
      if ($text.text() == "Go to question"){
        list.push($text.text())
    }
  })
 
  if (list.length > 1){
    console.log("there were many go to question")
    return true
  }
  return false
}

  twoNano1Multicheck(){

    let nano: any = cy.get("ul").eq(2).within(() => {
      cy.get("span").contains("Nanomaterial #1")
    }).contains("complete")

    let nano1: any = cy.get("ul").eq(2).within(() => {
      cy.get("span").contains("Nanomaterial #2")
    }).contains("not started")

    let item: any = cy.get("ul").eq(4).within(() => {
      cy.get("span").contains("Item #1")
    }).contains("cannot start yet")

    if(cy.get("span").contains("complete") && nano && nano1 && cy.get("li").contains("Define the multi-item kit").get("b").contains("cannot start yet")  && item){
      return true
    }
    return false
  }

  goQuestion(value: number){
    
    cy.get("ol").within(() => {
      cy.get("a").filter(':contains("Go to question")').eq(value-1).click()
    })
  }
}

export default new TaskListPage;
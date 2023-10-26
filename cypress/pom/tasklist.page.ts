class TaskListPage {

  assertPageTitle() {
    cy.get("h1").should("contain", "Add a cosmetic product")
  }

  assertProductApplicationCompleted(product: string) {
    cy.get("#product-status").should("contain", "COMPLETE")
    cy.get("h1").should("contain", product)
  }

  assertMultiItemApplicationCompleted() {
    cy.get("#multi-item-status").should("contain", "COMPLETE")
  }

  assertItemCompleted(name: string) {
    cy.contains('span', name)
      .siblings('b')
      .should("contain", "Completed")
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
    cy.get("a").contains("Product details").click()
  }

  selectNanomaterials() {
    cy.get("a").contains("Nanomaterial #1").click()
  }
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
      cy.get("a").eq(value-1).click()
    })
  }
}

export default new TaskListPage;
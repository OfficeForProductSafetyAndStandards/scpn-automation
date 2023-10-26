Feature: Submitting Product Specifications into SCPN as Submit User
As a user of the SCPN service
I  want to be able to submit new product notification
So the data can be accessed by both search and submit users to ensure they comply with the Office for Product and Safety Standards
 
 Background: 

   #authenticate the submit user
   Given the user visits the url: "https://staging-submit.cosmetic-product-notifications.service.gov.uk"
   When the user logs into the service
   Then the user successfully authenticates using their verification code
  
  Scenario: ability to view questions within tasks on task page
   #finish first step of creating product and go back to task list page
   When the user reaches Add a cosmetic product, there should be only one go to question
   
   When the user creates a new product notification
   Then check if subheading says incomplete and confirmation of outstanding sections
   
   #One go to question before completing product, many when completed
   When user reaches tasklist page, there should be many go to questions 
   Then user completes one nanomaterial section 
   
   #checking statuses too specific so not adding it
   
   #after break user resumes completion of cosmetic product
   When user completes second nanomaterial section 
   #user fills in product details
   Then user fills in the product details
   And the user checks Accept and submit status
   

 
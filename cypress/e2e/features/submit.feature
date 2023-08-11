Feature: Submitting Product Specifications into SCPN as Submit User
As a user of the SCPN service
I  want to be able to submit new product notification
So the data can be accessed by both search and submit users to ensure they comply with the Office for Product and Safety Standards
 
  
  Scenario: Verify Creation of Product Notification (Nanomaterials / multi-items / no CMR substances / Ingredient csv fixed
    - Happy Path - COSBETA-2065, COSBETA-2067, COSBETA-2072, COSBETA-2076)
    #authenticate submit user
    Given the user visits the SCPN login page
    When the user logs into SCPN
    Then the user successfully authenticates using their verification code
    When the user selects the responsible person

    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with nanomaterials and multi-itmes
    Then the details of the cosmetic product are successfully added to SCPN 

    #complete the nanomaterial section
    When the user enters the nanomaterial information
    Then the nanomaterials section is completed successfully     

    #complete the multi-item section
    When the user enters the multi-item information for non-mixed products
    Then the multi-items section is completed successfully

    #complete the items section and upload 
    When the user enters the item information with no CMR substances and ingredient information with exact concentration
    Then the items section is completed successfully   
  
  Scenario: Verify Creation of Product Notification (No nanomaterials / no multi-items / no CMR substances / Ingredient csv range
   - Happy Path - COSBETA-2066, COSBETA-2070, COSBETA-2077)
    #authenticate submit user
    Given the user visits the SCPN login page
    When the user logs into SCPN
    Then the user successfully authenticates using their verification code
    When the user selects the responsible person

    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification
    Then the details of the cosmetic product are successfully added to SCPN

    #create cosmetic product with no nanomaterial/ no multi-items / no CMR substances and upload fixed range ingredients csv file
    When the user creates the product details with no CMR substances
    And the user uploads an ingredients csv with fixed ranges
    Then the product details section is completed successfully
    
    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created 




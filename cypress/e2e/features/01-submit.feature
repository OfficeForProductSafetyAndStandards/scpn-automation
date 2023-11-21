Feature: Submitting Product Specifications into SCPN as Submit User
As a user of the SCPN service
I  want to be able to submit new product notification
So the data can be accessed by both search and submit users to ensure they comply with the Office for Product and Safety Standards
 
 Background: 

    #authenticate the submit user
    Given the user visits the url: "https://staging-submit.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user successfully authenticates using their verification code
    When the user selects the responsible person
  
  Scenario: Verify Cookie Policy (Happy Path)
    Then the user sees the SCPN cookie banner
    When the user accepts the cookies and hides item
    Then the cookie banner is no longer displayed


  Scenario: Verify Header
    Then the user sees the header information
    And the user sees the correct header information after signing out


  Scenario: Verify Footer
    Then the user sees the footer information
    And the user sees the correct footer information after signing out


  Scenario: Verify Creation of Notified Nanomaterial (COSBETA-2097)
    #create the nanomaterial
    Given the user creates a notified nanomaterial
    Then the nanomaterial is successfully created

  Scenario: Verify Creation of Product Notification (Nanomaterials / multi-items / no CMR substances / Ingredient csv fixed
  - Happy Path - COSBETA-2065, COSBETA-2067, COSBETA-2072, COSBETA-2076)
    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with nanomaterials, multi-items and no CMR substances
    Then the details of the cosmetic product are successfully added to SCPN

    #complete the nanomaterial section
    When the user enters the nanomaterial information
    Then the nanomaterials section is completed successfully

    #complete the multi-item section
    When the user enters the multi-item information
    Then the multi-items section is completed successfully

    #complete the items section and upload
    When the user enters the item information
    Then the items section is completed successfully

    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created

  Scenario: Verify Creation of Product Notification (No nanomaterials / no multi-items / no CMR substances / Ingredient csv range
  - Happy Path - COSBETA-2066, COSBETA-2070, COSBETA-2077)
    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with no nanomaterials, no multi-items and no CMR substances
    Then the details of the cosmetic product are successfully added to SCPN

    #complete second stage of product notification creation and upload fixed range ingredients csv file
    When the user creates the product notification details
    And the user uploads an ingredient csv with concentration range
    Then the product details section is completed successfully

    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created


  Scenario: Verify Creation of Product Notification (Notified Nanomaterials  / no multi-items / CMR substances / Ingredient csv exact
  - Happy Path - COSBETA-2068, COSBETA-2069)
   #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with nanomaterials, no multi-items and with CMR substances
    Then the details of the cosmetic product are successfully added to SCPN

    #complete the nanomaterial section
    When the user enters the nanomaterial information
    Then the nanomaterials section is completed successfully

    #complete the product details section and upload
    When the user creates the product notification details
    And the user uploads an ingredient csv with exact concentration
    Then the product details section is completed successfully

    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created
  
  Scenario: Verify Archival and Deletion of Product Notification (Happy Path - COSBETA-2094, COSBETA-2093)
    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with no nanomaterials, no multi-items and no CMR substances
    Then the details of the cosmetic product are successfully added to SCPN

    #complete second stage of product notification creation and upload fixed range ingredients csv file
    When the user creates the product notification details
    And the user uploads an ingredient csv with concentration range
    Then the product details section is completed successfully
    
    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created 

    #archive the product notification
    When the user archives the last created product notification
    Then the notification is successfully archived

  Scenario: Verify Creation of Product Notification (Nanomaterials / multi-items / CMR substances / Ingredient csv fixed
  - Happy Path - COSBETA-2272)
    #create the product - 1st stage
    And the user completes the first stage of creating a new product notification with nanomaterials, multi-items and CMR substances
    Then the details of the cosmetic product are successfully added to SCPN

    #complete the nanomaterial section
    When the user enters the nanomaterial information for cmr
    Then the nanomaterials section is completed successfully

    #complete the multi-item section
    When the user enters the multi-item information
    Then the multi-items section is completed successfully

    #complete the items section and upload
    When the user enters the item information for cmr product
    Then the items section is completed successfully for cmr

    #accept and submit the notification
    When the user accepts and submits the product notification
    Then the product notification is successfully created


  

  



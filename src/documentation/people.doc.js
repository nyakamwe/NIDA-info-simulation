/**
 * @openapi
 * 
 * /people:
 *      get:
 *          tags: [People]
 *          summary: This helps to list all people. 
 *          description: List People.
 *          responses:
 *                  200:
 *                     description: People retrieved successfully
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 *
 * 
 * 
 * /people/add:
 *      post:
 *          tags: [People]
 *          summary: This helps to complete your registration. 
 *          description: complete registration.
 *          requestBody:
 *              description: Provide information
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              sex:
 *                                  type: string
 *                                  example: "male, female"
 *                              IDNumber:
 *                                  type: string
 *                              ubudeheCategory:
 *                                  type: integer
 *                                  example: "1, 2, 3, 4"
 *                              children:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          firstName:
 *                                              type: string
 *                                          lastName:
 *                                              type: string
 *                                          dateOfBirth:
 *                                              type: string   
 *                              dateOfBirth:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              phoneNumber:
 *                                  type: string
 *                              email:
 *                                  type: string
 * 
 *          responses:
 *                  201:
 *                     description: Person registered successfully!
 *                  400:
 *                     description: we can not register your account at this moment. Refresh the page and try again
 *                  409:
 *                     description: Account with email or phone number already exists
 *                  500:
 *                     description: Internal server error
 * 
 * /people/{personId}/add-spouse:
 *      post:
 *          tags: [People]
 *          summary: This helps to complete your registration. 
 *          description: complete registration.
 *          parameters:
 *              - name: personId
 *                in: path
 *                required: true
 *                description: Person you want to add spouse to.
 *          requestBody:
 *              description: Provide information
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              sex:
 *                                  type: string
 *                                  example: "male, female"
 *                              IDNumber:
 *                                  type: string
 *                              dateOfBirth:
 *                                  type: string
 * 
 *          responses:
 *                  201:
 *                     description: Spouse added successfully!
 * 
 */

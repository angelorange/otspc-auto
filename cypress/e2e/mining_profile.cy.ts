describe("mining profile", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_in")
  })

  it("show", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com")
    cy.get('input[id="user_password"]').type("orangi123")
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/mining_profile"]').click()
    // cy.get('a[href="/transactions/new"]').click()
  })

  it("able to create ticket", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com")
    cy.get('input[id="user_password"]').type("orangi123")
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/mining_profile"]').click()
    cy.get('a[href="/tickets/new"]').click()
    cy.get('input[type="submit"]').click()
  })
})

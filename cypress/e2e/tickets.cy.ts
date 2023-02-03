describe("tickets", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_in")
  })

  it("new", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com")
    cy.get('input[id="user_password"]').type("orangi123")
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/tickets"]').click()
    cy.get('a[href="/tickets/new"]').click()
    cy.get('input[type="submit"]').click()
  })
})

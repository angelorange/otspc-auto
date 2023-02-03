describe("wallet", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_in")
  })

  it("show wallet", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com")
    cy.get('input[id="user_password"]').type("orangi123")
    cy.get('input[type="submit"]').click()
    cy.get('a[href="/wallets"]').click()
    cy.get('a[href="/wallets/2"]').click()
  })
})

describe("sign up page", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_up")
  })

  it("allows users to sign up", () => {
    cy.get('input[id="user_username"]').type("greg")
    cy.get('input[id="user_email"]').type("greg@gmail.com")
    cy.get('input[id="user_password"]').type("greg123")
    cy.get('input[id="user_password_confirmation"]').type("greg123")
    cy.get('input[type="submit"]').click()
  })
  // it("does NOT allow an invalid username", () => {
  //   cy.get('input[id="user_username"]').type("orangi naranja")
  //   cy.get('input[id="user_email"]').type("orangi@gmail.com")
  //   cy.get('input[id="user_password"]').type("orangi123")
  //   cy.get('input[id="user_password_confirmation"]').type("orangi123")
  //   cy.get('input[type="submit"]').click()
  // })
})

describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/")
  })

  it("the features on the homepage are correct", () => {
    cy.get("h1").contains("Blocks")
    cy.get("h1").contains("HUB")
  })

  it("homepage buttons are correct", () => {
    cy.get("a").click
    cy.contains("Home").click()
    cy.contains("Sign In").click()
    cy.contains("Sign Up").click()
    cy.contains("Transactions").click()
    cy.contains("Contracts").click()
    cy.contains("Blockchain").click()
  })
})

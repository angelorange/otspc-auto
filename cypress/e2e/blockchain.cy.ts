describe("blockchain", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_in");
  });

  it("show", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com");
    cy.get('input[id="user_password"]').type("orangi123");
    cy.get('input[type="submit"]').click();
    cy.get('a[href="/blocks"]').click();
    cy.get('a[href="/blocks/1"]').click();
    // cy.get('a[href="/transactions/new"]').click()
  });
});

describe("sign in page", () => {
  beforeEach(() => {
    cy.visit("https://osbc-blockchain.herokuapp.com/users/sign_in");
  });

  it("allows users to sign in", () => {
    cy.get('input[id="user_email"]').type("orangi@gmail.com");
    cy.get('input[id="user_password"]').type("orangi123");
    cy.get('input[type="submit"]').click();
  });
});

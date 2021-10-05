describe("Intercepting Network Requests", () => {
  it("/api/posts returns a status code of 200", () => {
    // Write an assertion that the route '/api/posts'
    // returns a status code of 200
    // Hint: You will need to use cy.request()
    // https://docs.cypress.io/api/commands/request

    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe("Important Cypress Methods", () => {
  it("uses cy.request() and cy.invoke() to slice the posts array", () => {
    // Use cy.request() to get all of the posts from the /api/posts endpoint
    // Then use cy.invoke() to 'slice' the response body by 1.
    // Hint: you will need to use cy.wrap() around the response.body before calling .invoke()
    // https://docs.cypress.io/api/commands/wrap

    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      cy.wrap(response.body).invoke("slice", 0, 1);
    });
  });

  it("uses cy.request() and cy.its() to get the first posts ID", () => {
    // Use cy.request() to get all of the posts from the /api/posts endpoint
    // Then use cy.its() to get the first post and also its id
    // Write and assertion that the first posts id === 'pre-rendering'
    // Hint: you will need to use cy.wrap() around the reponse.body before calling .invoke()
    // You will also need to use .its() twice.
    // https://docs.cypress.io/api/commands/wrap

    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      cy.wrap(response.body).its(0).its("id").should("eq", "pre-rendering");
    });
  });

  it("uses cy.within() to get the <h1> inside of the <header>", () => {
    // Use cy.within() to get the <h1> nested inside of the <header> element
    // Then assert that the <h1> contains the correct text.

    cy.visit("http://localhost:3000");

    cy.get("header").within(($header) => {
      cy.get("h1").contains("Real World Testing Blog");
    });
  });
});

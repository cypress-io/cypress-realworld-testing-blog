/*
  All of these tests are failing and it is your job to debug them
  to find out why.
*/
describe("Debug Failing Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays the correct header text", () => {
    cy.get('[data-test="home-header"]').contains("real world testing blog");
  });

  it("the post links on the homepage link to the correct posts", () => {
    cy.get('[data-test="post-link-0"]').click();
    cy.location("pathname").should("eq", "/posts/pre-rendering");
  });

  it("displays all of the posts on the homepage", () => {
    cy.get('[data-test="posts-list"]').within(($post) => {
      cy.get("a").should("have.length", 1);
    });
  });

  it("/api/posts returns a status code of 201", () => {
    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

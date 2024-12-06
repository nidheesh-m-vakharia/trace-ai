/// <reference types="cypress" />
import { mount } from "cypress/react";
import Description from "@/components/ui/Homepage/description"; // Adjust the import path as necessary

describe("Description Component", () => {
  beforeEach(() => {
    // Mount the component before each test
    mount(<Description />);
  });

  it("renders the headings correctly", () => {
    // Check the first heading
    cy.get("h1").eq(0).should("contain.text", "Powered by OpenAI");

    // Check the second heading
    cy.get("h1").eq(1).should("contain.text", "Our mission");
  });

  it("renders the paragraphs with correct content", () => {
    // Verify the first paragraph's bold text
    cy.get('[data-cy="desc-h1-1"]').should("contain.text", "Powered by OpenAI");

    // Verify the second paragraph's text
    cy.get("p")
      .eq(1)
      .should(
        "contain.text",
        "Note-taking is a crucial skill for students and professionals alike.",
      )
      .and(
        "contain.text",
        "With Trace AI, we aim to make note-taking more efficient by leveraging AI",
      );
  });

  it("applies responsive prose classes correctly", () => {
    // Check the default prose class
    cy.get("div").should("have.class", "prose").and("have.class", "prose-md");

    // Simulate medium-sized screen and verify responsiveness
    cy.viewport(768, 1024);
    cy.get("div").should("have.class", "md:prose-xl");
  });
});

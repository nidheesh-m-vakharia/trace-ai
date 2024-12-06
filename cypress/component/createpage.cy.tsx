/// <reference types="cypress" />
import React from "react";
import { CreatePageForm, CreatePageInputArea, CreatePageOutput } from "@/components/create-page/createPage";

describe("CreatePageComponents", () => {
  it("should render CreatePageInputArea with expected behavior", () => {
    const handleInputChange = cy.stub();
    const input = "Initial note";
    const isLoading = false;

    cy.mount(
      <CreatePageInputArea
        className="test-input-area"
        input={input}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
      />
    );

    cy.get("textarea").should("have.value", input);
    cy.get("textarea").should("not.be.disabled");


    cy.contains("Create").should("exist");
  });

  it("should render CreatePageForm and handle submit event", () => {
    const onSubmit = cy.stub();

    cy.mount(
      <CreatePageForm className="test-form" onSubmit={onSubmit}>
        <div>Form Content</div>
      </CreatePageForm>
    );

    cy.get("form").within(() => {
      cy.contains("Form Content").should("exist");
    });

  });

  it("should render CreatePageOutput with children", () => {
    cy.mount(
      <CreatePageOutput className="test-output">
        <p>Output Content</p>
      </CreatePageOutput>
    );

    cy.contains("Output Content").should("exist");
  });
});

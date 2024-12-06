/// <reference types="cypress" />
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Adjust the import path as necessary

describe("Avatar Component", () => {
  it("renders the Avatar with an image", () => {
    const testImageSrc = "https://via.placeholder.com/150";
    const altText = "Test Avatar";

    cy.mount(
      <Avatar>
        <AvatarImage src={testImageSrc} alt={altText} />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );

    // Check if the AvatarImage is rendered
    cy.get("img")
      .should("have.attr", "src", testImageSrc)
      .and("have.attr", "alt", altText);
  });

  it("renders the AvatarFallback when no image is provided", () => {
    const fallbackText = "AB";

    cy.mount(
      <Avatar>
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>,
    );

    // Check if the fallback content is visible
    cy.contains(fallbackText).should("be.visible");
  });

  it("applies custom class names correctly", () => {
    const customClass = "custom-avatar-class";

    cy.mount(
      <Avatar className={customClass}>
        <AvatarImage
          src="https://via.placeholder.com/150"
          alt="Custom Avatar"
        />
      </Avatar>,
    );

    // Verify the custom class is applied
    cy.get(".custom-avatar-class").should("exist");
  });
});

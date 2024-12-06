// cypress/component/toggle_spec.js
import React from "react";
import { Toggle } from "@/components/ui/toggle"; // Adjust path based on your project structure
import { mount } from "cypress/react"; // Cypress component testing mount method

describe('Toggle Component', () => {

  it('should render the Toggle component with default variant and size', () => {
    mount(
      <Toggle>Toggle Button</Toggle>
    );

    // Ensure the Toggle component renders with default styles
    cy.get('button').should('have.class', 'inline-flex')
      .and('have.class', 'items-center')
      .and('have.class', 'justify-center')
      .and('have.class', 'gap-2')
      .and('have.class', 'rounded-md')
      .and('have.class', 'text-sm')
      .and('have.class', 'font-medium');
    
    // Ensure default size and variant are applied
    cy.get('button').should('have.class', 'h-9')
      .and('have.class', 'px-2')
      .and('have.class', 'min-w-9');
    
    // Ensure the button text is rendered correctly
    cy.get('button').should('contain.text', 'Toggle Button');
  });

  it('should apply custom variant and size to Toggle', () => {
    mount(
      <Toggle variant="outline" size="lg">Toggle Button</Toggle>
    );

    // Check if the correct variant and size classes are applied
    cy.get('button').should('have.class', 'border')
      .and('have.class', 'border-input')
      .and('have.class', 'shadow-sm')
      .and('have.class', 'hover:bg-accent')
      .and('have.class', 'hover:text-accent-foreground');
    
    cy.get('button').should('have.class', 'h-10')
      .and('have.class', 'px-2.5')
      .and('have.class', 'min-w-10');
  });

  it('should toggle on and off when clicked', () => {
    mount(
      <Toggle aria-label="toggle-button">Toggle Button</Toggle>
    );

    // Ensure the button is in the off state initially
    cy.get('button').should('not.have.class', 'data-[state=on]');
  });

  it('should not allow interaction when disabled', () => {
    mount(
      <Toggle disabled aria-label="toggle-button">Disabled Toggle Button</Toggle>
    );

    // Ensure the button is disabled
    cy.get('button').should('be.disabled');
  });

  it('should apply custom className to Toggle', () => {
    mount(
      <Toggle className="custom-toggle" aria-label="toggle-button">Custom Toggle</Toggle>
    );

    // Check if custom className is applied
    cy.get('button').should('have.class', 'custom-toggle');
  });

  it('should handle SVG pointer-events correctly', () => {
    mount(
      <Toggle>
        <svg className="pointer-events-none" />
      </Toggle>
    );

    // Ensure SVG inside Toggle button has correct pointer-events applied
    cy.get('button svg').should('have.class', 'pointer-events-none');
  });

});


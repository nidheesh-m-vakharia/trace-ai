// cypress/component/input_spec.js
import React from 'react';
import { Input } from '@/components/ui/input'; // Adjust path as necessary
import { mount } from 'cypress/react'; // Cypress component testing mount method

describe('Input Component', () => {
  it('should render input element with correct classes', () => {
    mount(<Input type="text" placeholder="Enter text" />);
    
    // Check if the input field is rendered correctly
    cy.get('input')
      .should('have.attr', 'type', 'text') // Check the type attribute
      .should('have.attr', 'placeholder', 'Enter text') // Check the placeholder
      .should('have.class', 'flex') // Check for the expected CSS class
      .should('have.class', 'h-9'); // Check another CSS class (adjust to your needs)
  });

  it('should allow user to type text', () => {
    mount(<Input type="text" placeholder="Type here" />);
    
    // Type into the input field and check the value
    cy.get('input')
      .type('Hello, Cypress!')
      .should('have.value', 'Hello, Cypress!');
  });

  it('should apply custom className correctly', () => {
    const customClass = 'custom-class';
    mount(<Input type="text" placeholder="Custom class" className={customClass} />);
    
    // Check if the custom class is applied
    cy.get('input').should('have.class', customClass);
  });

  it('should be disabled when disabled prop is passed', () => {
    mount(<Input type="text" placeholder="Disabled input" disabled />);
    
    // Check if the input field is disabled
    cy.get('input').should('be.disabled');
  });
});

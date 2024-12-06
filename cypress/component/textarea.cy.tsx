// cypress/component/textarea_spec.js
import React from 'react';
import { Textarea } from '@/components/ui/textarea'; // Adjust the path based on your file structure
import { mount } from 'cypress/react'; // Cypress component testing mount method

describe('Textarea Component', () => {

  it('should render a textarea with correct classes and placeholder text', () => {
    mount(<Textarea placeholder="Enter text here" />);

    // Check if the textarea has the correct placeholder text
    cy.get('textarea')
      .should('have.attr', 'placeholder', 'Enter text here')
      .should('have.class', 'flex') // Check for expected class
      .should('have.class', 'min-h-[60px]') // Check for expected class
      .should('have.class', 'border-input') // Check for expected class
      .should('have.class', 'text-sm'); // Check for expected class
  });

  it('should apply custom className correctly', () => {
    const customClass = 'custom-class';
    mount(<Textarea className={customClass} />);

    // Check if the custom class is applied
    cy.get('textarea').should('have.class', customClass);
  });

  it('should allow typing text inside the textarea', () => {
    mount(<Textarea placeholder="Type something" />);
    
    // Type some text inside the textarea and verify it
    cy.get('textarea')
      .type('Hello, World!')
      .should('have.value', 'Hello, World!');
  });

  it('should maintain the focus style on focus', () => {
    mount(<Textarea placeholder="Focus me" />);
    
    // Focus on the textarea and check for the focus ring
    cy.get('textarea').focus().should('have.class', 'focus-visible:ring-ring');
  });

  it('should be disabled when the disabled prop is passed', () => {
    mount(<Textarea disabled placeholder="Disabled Textarea" />);
    
    // Check if the textarea is disabled
    cy.get('textarea')
      .should('be.disabled')
      .should('have.class', 'disabled:cursor-not-allowed')
      .should('have.class', 'disabled:opacity-50');
  });

});

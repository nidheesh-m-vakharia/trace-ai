// cypress/component/label_spec.js
import React from 'react';
import { Label } from '@/components/ui/label'; // Adjust the path based on your file structure
import { mount } from 'cypress/react'; // Cypress component testing mount method

describe('Label Component', () => {
  
  it('should render a label with correct text and classes', () => {
    mount(<Label htmlFor="input-id">Label Text</Label>);
    
    // Check if the label is rendered with correct text
    cy.get('label')
      .should('have.text', 'Label Text') // Ensure label text matches
      .should('have.class', 'text-sm') // Check for expected class
      .should('have.class', 'font-medium'); // Check for expected class
  });

  it('should apply custom className correctly', () => {
    const customClass = 'custom-class';
    mount(<Label htmlFor="input-id" className={customClass}>Custom Class Label</Label>);
    
    // Check if the custom class is applied
    cy.get('label').should('have.class', customClass);
  });

  it('should be able to associate with an input using htmlFor', () => {
    mount(
      <>
        <Label htmlFor="input-id">Label for Input</Label>
        <input id="input-id" type="text" />
      </>
    );

    // Check if the label is correctly associated with the input
    cy.get('label[for="input-id"]').should('have.text', 'Label for Input');
    cy.get('input#input-id').should('exist');
  });

  it('should be disabled when peer input is disabled', () => {
    mount(
      <>
        <input id="input-id" type="text" disabled />
        <Label htmlFor="input-id">Disabled Label</Label>
      </>
    );

    // Check if the label is visually disabled when input is disabled
    cy.get('label[for="input-id"]').should('have.class', 'peer-disabled:cursor-not-allowed');
    cy.get('label[for="input-id"]').should('have.class', 'peer-disabled:opacity-70');
  });
});

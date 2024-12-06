// <reference types="cypress" />
import { mount } from 'cypress/react';
import Title from '@/components/ui/Homepage/title'; // Adjust the path as necessary

describe('Title Component', () => {
  it('renders the main title correctly', () => {
    mount(<Title />);
    cy.get('h1').should('contain.text', 'trace.ai'); // Verifies the main title
  });

  it('renders the TypeAnimation component with correct text transitions', () => {
    mount(<Title />);

    const expectedTexts = [
      ' school.',
      ' a project.',
      ' work.',
      ' a test.',
      ' a speech.',
    ];

    // Check if TypeAnimation cycles through expected texts
    expectedTexts.forEach((text, index) => {
      cy.contains(text).should('be.visible');
      cy.wait(1000); // Matches the delay between text transitions
    });
  });
});

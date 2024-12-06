/// <reference types="cypress" />
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'; // Adjust the import path as necessary

describe('HoverCard Component', () => {
  it('renders HoverCard and shows content on hover', () => {
    cy.mount(
      <HoverCard>
        <HoverCardTrigger>Hover over me</HoverCardTrigger>
        <HoverCardContent>
          This is the HoverCard content
        </HoverCardContent>
      </HoverCard>
    );

    // Initially, HoverCard content should not be visible
    cy.contains('This is the HoverCard content').should('not.exist');
   
  });

  
});

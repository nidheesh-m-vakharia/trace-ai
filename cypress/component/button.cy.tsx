/// <reference types="cypress" />
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary

describe('Button Component', () => {
  it('renders a default button correctly', () => {
    cy.mount(<Button>Default Button</Button>);
    
    // Verify button text content
    cy.contains('Default Button').should('be.visible');
    
    // Verify default button styling
    cy.get('button')
      .should('have.class', 'bg-primary')
      .and('have.class', 'text-primary-foreground');
  });

  it('applies the destructive variant correctly', () => {
    cy.mount(<Button variant="destructive">Destructive Button</Button>);

    // Verify button text content
    cy.contains('Destructive Button').should('be.visible');
    
    // Verify destructive button styling
    cy.get('button')
      .should('have.class', 'bg-destructive')
      .and('have.class', 'text-destructive-foreground');
  });

  it('applies the outline variant correctly', () => {
    cy.mount(<Button variant="outline">Outline Button</Button>);

    // Verify button text content
    cy.contains('Outline Button').should('be.visible');
    
    // Verify outline button styling
    cy.get('button')
      .should('have.class', 'border')
      .and('have.class', 'bg-background')
      .and('have.class', 'hover:bg-accent')
      .and('have.class', 'hover:text-accent-foreground');
  });

  it('applies the correct size for sm, default, and lg buttons', () => {
    // Small button
    cy.mount(<Button size="sm">Small Button</Button>);
    cy.get('button').should('have.class', 'h-8');

    // Default size button
    cy.mount(<Button size="default">Default Button</Button>);
    cy.get('button').should('have.class', 'h-9');

    // Large button
    cy.mount(<Button size="lg">Large Button</Button>);
    cy.get('button').should('have.class', 'h-10');
  });

  it('renders a button with custom class names', () => {
    const customClass = 'custom-button-class';
    cy.mount(<Button className={customClass}>Custom Class Button</Button>);
    cy.get(`.${customClass}`).should('exist');
  });

  it('supports asChild prop for custom components', () => {
    // Test using `asChild` prop
    cy.mount(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );
    
    // Verify the link has button classes applied
    cy.get('a')
      .should('have.class', 'inline-flex')
      .and('have.class', 'items-center')
      .and('have.class', 'justify-center');
  });

  it('disables the button when disabled prop is passed', () => {
    cy.mount(<Button disabled>Disabled Button</Button>);
    
    // Verify button is disabled
    cy.get('button').should('be.disabled');
  });
});

/// <reference types="cypress" />
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
  } from '@/components/ui/card'; // Adjust the import path as necessary
  
  describe('Card Component', () => {
    it('renders the Card component correctly', () => {
      cy.mount(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      );
  
      // Check if the Card renders with the correct background and border styles
      cy.get('.rounded-xl').should('exist');
      cy.get('.border').should('exist');
      cy.get('.bg-card').should('exist');
      cy.get('.text-card-foreground').should('exist');
    });
  
  
    it('renders CardTitle with the correct font styles', () => {
      cy.mount(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      );
  
      // Check if CardTitle has the correct font styles
      cy.get('.font-semibold').should('exist');
      cy.get('.leading-none').should('exist');
      cy.get('.tracking-tight').should('exist');
      cy.contains('Card Title').should('be.visible');
    });
  
    it('renders CardDescription with the correct text styles', () => {
      cy.mount(
        <Card>
          <CardHeader>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      );
  
      // Check if CardDescription has the correct styles
      cy.get('.text-sm').should('exist');
      cy.get('.text-muted-foreground').should('exist');
      cy.contains('Card Description').should('be.visible');
    });
  
    it('renders CardContent with correct padding', () => {
      cy.mount(
        <Card>
          <CardContent>Card Content</CardContent>
        </Card>
      );
  
      // Check if CardContent has the correct padding styles
      cy.get('.p-6').should('exist');
      cy.get('.pt-0').should('exist');
      cy.contains('Card Content').should('be.visible');
    });
  
    it('renders CardFooter with correct padding and layout', () => {
      cy.mount(
        <Card>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      );
  
      // Check if CardFooter has the correct padding styles
      cy.get('.flex').should('exist');
      cy.get('.items-center').should('exist');
      cy.get('.p-6').should('exist');
      cy.get('.pt-0').should('exist');
      cy.contains('Card Footer').should('be.visible');
    });
  
    it('applies custom class names correctly', () => {
      const customClass = 'custom-card-class';
      cy.mount(
        <Card className={customClass}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      );
  
      // Check if the custom class is applied to the Card component
      cy.get(`.${customClass}`).should('exist');
    });
  });
  
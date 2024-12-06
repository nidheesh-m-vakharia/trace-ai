// <reference types="cypress" />
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
  } from '@/components/ui/dropdown-menu'; // Adjust the import path as necessary
  
  describe('DropdownMenu Component', () => {
    it('renders the DropdownMenu and triggers opening', () => {
      cy.mount(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  
      // Verify the dropdown is initially closed
      cy.contains('Item 1').should('not.exist');
  
      // Trigger the dropdown
      cy.contains('Open Dropdown').click();
  
      // Verify the dropdown content is visible
      cy.contains('Item 1').should('be.visible');
      cy.contains('Item 2').should('be.visible');
    });
  
    it('renders DropdownMenuItem correctly', () => {
      cy.mount(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  
      cy.contains('Open Dropdown').click();
  
      // Verify DropdownMenuItem is displayed
      cy.contains('Item 1').should('be.visible');
    });
  
  
  
  
    it('renders DropdownMenuSeparator', () => {
      cy.mount(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  
      cy.contains('Open Dropdown').click();
  
      // Verify that the separator is present
      cy.contains('Item 1').should('be.visible');
      cy.contains('Item 2').should('be.visible');
      cy.get('.-mx-1.my-1.h-px.bg-muted').should('exist'); // Verify the separator
    });
  
    it('renders DropdownMenuShortcut', () => {
      cy.mount(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Item 1 <DropdownMenuShortcut>Ctrl+1</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  
      cy.contains('Open Dropdown').click();
  
      // Verify that the shortcut is visible
      cy.contains('Ctrl+1').should('be.visible');
    });
  
    it('handles DropdownMenu open and close state correctly', () => {
      cy.mount(
        <DropdownMenu>
          <DropdownMenuTrigger>Open Dropdown</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  
      // Initially, the dropdown is closed
      cy.contains('Item 1').should('not.exist');
  
      // Open the dropdown
      cy.contains('Open Dropdown').click();
      cy.contains('Item 1').should('be.visible');

    });
  });
  
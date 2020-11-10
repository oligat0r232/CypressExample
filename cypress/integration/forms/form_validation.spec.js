/// <reference types="cypress" />
import FormPage from '../../pageobjects/form.page';

context('Assertions', () => {
    // As each test in this spec file is run on the same page, the page will be opened before each test.
    beforeEach(() => {
      cy.visit('/automation-practice-form')
      cy.viewport('macbook-15') // This enlarges the viewport to make sure that the elements that should be displayed on a large screen are.
    })
  
    describe('test form', () => {
        const formPage = new FormPage()
      it('mandatory fields show validation warning if whole form is submitted empty', () => {
          formPage.submitButton().click()
          formPage.firstNameField().should('have.css', 'border-color', formPage.redBorder)
          formPage.lastNameField().should('have.css', 'border-color', formPage.redBorder)
          formPage.userEmail().should('have.css', 'border-color', formPage.greenBorder)
          formPage.maleGenderRadio().should('have.css', 'border-color', formPage.redBorder)
          formPage.femaleGenderRadio().should('have.css', 'border-color', formPage.redBorder)
          formPage.otherGenderRadio().should('have.css', 'border-color', formPage.redBorder)
          formPage.userNumberField().should('have.css', 'border-color', formPage.redBorder)
          formPage.dateOfBirthField().should('have.css', 'border-color', formPage.greenBorder)
          formPage.sportsCheckbox().should('have.css', 'border-color', formPage.greenBorder)
          formPage.readingCheckbox().should('have.css', 'border-color', formPage.greenBorder)
          formPage.musicCheckbox().should('have.css', 'border-color', formPage.greenBorder)
          formPage.currentAddressField().should('have.css', 'border-color', formPage.greenBorder)
      })
    })
  })
  
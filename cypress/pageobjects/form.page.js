class FormPage {
    submitButton() {
        return cy.get('#submit');
    }
    firstNameField() {
        return cy.get('#firstName')
    }
    lastNameField() {
        return cy.get('#lastName')
    }
    userEmail() {
        return cy.get('#userEmail')
    }
    maleGenderRadio() {
        return cy.get('#gender-radio-1').siblings('.custom-control-label')
    }
    femaleGenderRadio() {
        return cy.get('#gender-radio-2').siblings('.custom-control-label')
    }
    otherGenderRadio() {
        return cy.get('#gender-radio-3').siblings('.custom-control-label')
    }
    userNumberField() {
        return cy.get('#userNumber')
    }
    dateOfBirthField() {
        return cy.get('#dateOfBirthInput')
    }
    sportsCheckbox() {
        return cy.get('#hobbies-checkbox-1').siblings('.custom-control-label')
    }
    readingCheckbox() {
        return cy.get('#hobbies-checkbox-2').siblings('.custom-control-label')
    }
    musicCheckbox() {
        return cy.get('#hobbies-checkbox-3').siblings('.custom-control-label')
    }
    currentAddressField() {
        return cy.get('#currentAddress')
    }
    greenBorder = 'rgb(40, 167, 69)'
    redBorder = 'rgb(220, 53, 69)'
    formSubmitModalTitle() {
        return cy.get('#example-modal-sizes-title-lg')
    }
    modalMobileNumber() {
        return cy.get('td').contains('Mobile')
    }
}
export default FormPage
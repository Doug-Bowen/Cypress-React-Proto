export class LandingPage {
    getTwoButton() { return cy.get(':nth-child(4) > :nth-child(2) > button');};
    getPlusButton() { return cy.get(':nth-child(4) > .orange > button');};
    getEqualButton() { return cy.get(':nth-child(5) > .orange > button');};
    getTotalField() { return cy.get('.component-display > div');};
}
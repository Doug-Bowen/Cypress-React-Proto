/// <reference types= "cypress" />

import {LandingPage} from '../PageObjects/LandingPage.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';

const landingPage = new LandingPage();
const browser = new BrowserUtil();

it("Basic Addition", () => {

    // Arrange
    let loadedBrowser = browser.launch(browser._baseUrl);
    landingPage.getTwoButton().click();
    landingPage.getPlusButton().click();
    landingPage.getTwoButton().click();

    // Act
    landingPage.getEqualButton().click();

    // Assert
    landingPage.getTotalField().should('have.text', '4');
});


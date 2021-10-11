/// <reference types= "cypress" />

import {LandingPage} from '../PageObjects/LandingPage.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';

const landingPage = new LandingPage();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();

it("Basic Addition", () => {

    // Arrange
    let expectedTotalFiles = 86;
    let expectedAvgLengthRental = 11.2;
    let expectedDaysBehind = 0.2;
    let expectedAvgTotalAuthorized = 385.21;

    browser.launch(landingPage._Url);
    landingPage.getFileWidgetText().should(assertions._haveText, expectedTotalFiles);
    landingPage.getAvgLengthRentalWidgetText().should(assertions._haveText, expectedAvgLengthRental);
    landingPage.getDaysBehindWidgetText().should(assertions._haveText, expectedDaysBehind);
    landingPage.getAvgTotalAuthWidgetText().should(assertions._haveText, expectedAvgTotalAuthorized);
});


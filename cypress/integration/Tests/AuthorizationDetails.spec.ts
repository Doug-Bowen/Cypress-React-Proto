// @ts-nocheck
import {AuthorizationDetails} from '../PageObjects/AuthorizationDetails.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';

const authorizationPage = new AuthorizationDetails();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();

it("Smoke Authorization Details Page", () => {

    // Arrange
    let detailsPageText = 'Details Page';
    let expectedHeaderTopTitle = detailsPageText;
    let expectedHeaderBottomTitle = detailsPageText;
    let expectedFooterTitle = 'Footer';

    // Act
    browser.visit(authorizationPage._url);

    // Assert
    authorizationPage.getHeaderTopTitle().should(assertions._haveText, expectedHeaderTopTitle);
    authorizationPage.getHeaderBottomTitle().should(assertions._haveText, expectedHeaderBottomTitle);
    authorizationPage.getFooterTitle().should(assertions._haveText, expectedFooterTitle);
});


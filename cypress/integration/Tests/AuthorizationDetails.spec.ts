// @ts-nocheck
import {AuthorizationDetailsPage} from '../PageObjects/AuthorizationDetails.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';

const authorizationDetailsPage = new AuthorizationDetailsPage();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();

it("Smoke Authorization Details Page", () => {

    // Arrange
    let detailsPageText = 'Details Page';
    let expectedHeaderTopTitle = detailsPageText;
    let expectedHeaderBottomTitle = detailsPageText;
    let expectedFooterTitle = 'Footer';

    // Act
    browser.visit(authorizationDetailsPage._url);

    // Assert
    authorizationDetailsPage.getHeaderTopTitle().should(assertions._haveText, expectedHeaderTopTitle);
    authorizationDetailsPage.getHeaderBottomTitle().should(assertions._haveText, expectedHeaderBottomTitle);
    authorizationDetailsPage.getFooterTitle().should(assertions._haveText, expectedFooterTitle);
});


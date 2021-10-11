// @ts-nocheck
import {AuthorizationCreate} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';

const authorizationPage = new AuthorizationDetails();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();

it("Smoke Authorization Create Page", () => {

    // Arrange
    let detailsPageText = 'Details Page';
    let expectedHeaderTopTitle = detailsPageText;
    let expectedHeaderBottomTitle = detailsPageText;
    let expectedFooterTitle = 'Footer';

    // Act
    browser.visit(authorizationPage._Url);

    // Assert
    authorizationPage.getHeaderTopTitle().should(assertions._haveText, expectedHeaderTopTitle);
    authorizationPage.getHeaderBottomTitle().should(assertions._haveText, expectedHeaderBottomTitle);
    authorizationPage.getFooterTitle().should(assertions._haveText, expectedFooterTitle);
});


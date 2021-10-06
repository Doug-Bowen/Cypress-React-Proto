/// <reference types= "cypress" />

import {LandingPage} from '../PageObjects/LandingPage.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';

const landingPage = new LandingPage();
const browser = new BrowserUtil();

it("Smoke", async () => {
    let url = 'http://www.google.com';
    let loadedBrowser = browser.launch(url);
    await browser.delay(4000);
    loadedBrowser.go(browser.Directions.backward);
});


/// <reference types= "cypress" />

import {LandingPage} from '../PageObjects/LandingPage.PageObject';
import {Browser} from '../Utils/Browser';

const landingPage = new LandingPage();
const browser = new Browser();

it("Smoke", async () => {
    let url = 'http://www.google.com';
    let loadedBrowser = browser.launch(url);
    await browser.delay(4000);
    loadedBrowser.go(browser.Directions.backward);
});


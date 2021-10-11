import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();

export class BrowserUtil {
    _baseUrl: string = 'http://localhost:3000/';
    _headed: boolean = false;
    Directions = {
        forward: 1,
        backward: -1
    };

    launch(passedUrl: string = url._landingPage, passedTimeout = 30000){
        let options = {
            url: passedUrl,
            timeout: passedTimeout
        }
        return cy.visit(options);
    }

    visit(passedUrl: string = url._landingPage, passedTimeout = 30000){
        let options = {
            url: passedUrl,
            timeout: passedTimeout
        }
        return cy.visit(options);
    }


    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
export class BrowserUtil {
    _baseUrl: string = 'http://localhost:3000/';
    _headed: boolean = false;
    Directions = {
        forward: 1,
        backward: -1
    };

    launch(passedUrl: string = this._baseUrl){
        let options = {
            url: passedUrl,
            timeout: 30000
        }
        return cy.visit(options);
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
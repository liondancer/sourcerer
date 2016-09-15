import rp from 'request-promise';
import Sourcerer from './sourcerer';
import chai, { expect } from 'chai';

chai.use(require('chai-as-promised'));


describe("Sourcerer Testing: ", () => {
    let sourcerer = new Sourcerer(null);
    const testCases = {
        "https://www.google.com": 200,
        "http://www.google.com": 200,
        "www.google.com": 0,
        "bradford": 0,
        "google.com": 0,
        "http://google.com": 200,
        "https://google.com": 200
    };

    // describe("getStatusCode", () => {
    //     for (let testUrl in testCases) {
    //         let expectedStatusCode = testCases[testUrl];
    //         it('should return ' + expectedStatusCode + ' for ' + testUrl, () => {
    //             sourcerer.setSourcererUrl(testUrl);
    //             return sourcerer.getStatusCode().then((statusCode) => {
    //                 return expect(statusCode).to.equal(expectedStatusCode);
    //             }).done();  // done is required because
    //         });
    //     }
    // });

    // describe("analyzeSourcePage", () => {
    //
    // });

    // describe("summarizePageSource", () => {
    //     const testHtml = '<ul id="fruits">' +
    //         '<li class="apple">AppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleAppleApple</li>' +
    //         '<li class="orange">OrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrangeOrange</li>' +
    //         '<li class="pear">PearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPearPear</li>' +
    //         '</ul>';
    //     console.log(testHtml);
    //     sourcerer.summarizePageSource(testHtml);
    //     console.log(testHtml);
    // });

    describe('summarizeContent', () => {
        const testHtml = '<ul id="fruits">' +
                '<li class="apple">Apple</li>' +
                '<li class="orange">Orange</li>' +
                '<li class="pear">Pear</li>' +
                '</ul>';
    });


});
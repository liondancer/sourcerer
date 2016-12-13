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
});
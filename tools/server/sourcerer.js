import rp from 'request-promise';
import cheerio from 'cheerio';
import beautify from 'js-beautify';

export default class Sourcerer {
    constructor(url) {
        this.options = {
            method: 'GET',
            url,
            resolveWithFullResponse: true,
            timeout: 2000
        };
        this.payload = { error: 0, url };
    }

    getPayload() {
        return this.payload;
    }

    analyzeSourcePage() {
        return rp(this.options).then((res) => {
            let tagData = {"html": 1};
            this.payload.UrlStatusCode = res.statusCode;
            console.log("Status code: " + this.payload.UrlStatusCode);
            if (this.payload.UrlStatusCode === 200) {
                let pageSource = res.req.res.body;
                this.beautifyPageSource(pageSource);
                let $ = cheerio.load(pageSource);
                $('*').contents().each((index, element) => {
                    if (element["type"] === "tag" || element["type"] === "style") {
                        // console.log(element);
                        if (element["na,e"] === "html") {
                            console.log("HTML here");
                        }

                        const tagName = element["name"];
                        if (tagName in tagData) {
                            tagData[tagName]++;
                        } else {
                            tagData[tagName] = 1;
                        }
                    }
                });
                this.payload.tagData = tagData;
            } else {
                this.payload.error = 1;
            }
        }).catch((err) => {
            console.log("server error");
            this.payload.error = 1;
        });
    }

    beautifyPageSource(pageSource) {
        this.payload.prettySource = beautify.html(pageSource, {indent: 2});
    }
}


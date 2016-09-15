import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config.dev';
import open from 'open';
import Sourcerer  from './sourcerer';


const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/index.html'));
});

app.get('/pageSource', (req, res) => {
    let payload = {};
    const url = req.query.url;
    if (url) {
        const sourcerer = new Sourcerer(url);
        sourcerer.analyzeSourcePage().then(() => {
            payload = sourcerer.getPayload();
            res.send(payload);
        });
    } else {
        payload.error = "NO URL";
        res.send(payload);
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error:" + err);
    } else {
        open("http://localhost:" + port);
    }
});



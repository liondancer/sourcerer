// Used for debugging production code locally

/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import open from 'open';
import Sourcerer  from './server/sourcerer';


const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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


// Error: ENOENT: no such file or directory, open 'src/index.html'
// at Error (native)
// errno: -2,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: 'src/index.html' }

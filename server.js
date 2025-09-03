import express from 'express';
import { readFile } from 'fs';

const PORT      = process.env.PORT || 3000;
const app       = express();

const ROOT_URL  = '/COMP4537';
const LABS_URL  = `${ROOT_URL}/labs`;

const LAB_0_URL = `${LABS_URL}/0`;

const LAB_0_INDEX = `${LAB_0_URL}/index.html`;

/**
 * Serves lab 0.
 */
app.get(LAB_0_URL, (req, res) => {
    console.log(LAB_0_URL);
    readFile(`./${LAB_0_INDEX}`, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading lab 0');        // TODO: localize the error message (not sure if server code is being graded yet).
            console.error(err);
            return;
        }

        res.status(200);
        res.set('Content-Type', 'text/html');
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

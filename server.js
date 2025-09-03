const express   = require('express');
const fs        = require('fs');

const ROOT_URL  = '/COMP4537';
const LABS_URL  = `${ROOT_URL}/labs`;
const LAB_0_URL = `${LABS_URL}/0`;
const PORT      = process.env.PORT || 3000;
const app       = express();

/**
 * Serves lab 0.
 */
app.get(LAB_0_URL, (req, res) => {
    fs.readFile('./labs/0/lab0.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading lab 0');        // TODO: localize the error message (not sure if server code is being graded yet).
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

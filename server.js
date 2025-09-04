import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = process.env.PORT || 3000;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/lab0/js', express.static(`${__dirname}/COMP4537/labs/0/js`));
app.use('/lab0/css', express.static(`${__dirname}/COMP4537/labs/0/css`));
app.use('/lab0/lang', express.static(`${__dirname}/COMP4537/labs/0/lang`));

const lab0 = '/COMP4537/labs/0';
const lab0Index = `${__dirname}/${lab0}/index.html`

/**
 * Serves lab 0.
 */
app.get(lab0, (req, res) => {
    res.sendFile(lab0Index);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

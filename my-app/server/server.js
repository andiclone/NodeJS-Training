const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ express: 'Hello world!' });
});

app.post('/api/world', (req, res) => {
    console.log('este es el req body post: ', req.body.post);
    res.send(`The text from the input is: ${req.body.post}`);
});

app.listen(port, () => console.log('Up and running, listening on port: ', port));
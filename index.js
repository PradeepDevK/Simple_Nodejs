const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Nodejs is awesome!");
});

app.listen(4001, () => console.log('server is running on port',4001));
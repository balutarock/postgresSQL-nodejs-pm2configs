const client = require('./connection.js')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());

app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();


app.get('/users', (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

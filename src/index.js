const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events.js');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '/Ep7',
    database : 'clinica'
  });

connection.connect();

const port = process.env.PORT || 3306;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
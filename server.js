require('dotenv').config();

var home = require('./js_compiled/routes/routes')

const express = require('express'),
app = express(),
port = process.env.port || 3000;

app.use('/', home)

app.listen(port);

console.log(`Connecting to localhost port: ${port}`)
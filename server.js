require('dotenv').config();

const express = require('express'),
app = express(),
port = process.env.port || 3000;

app.listen(port);

console.log(`Connecting to localhost port: ${port}`)
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const connection = process.env.LOCAL_MONGODB_URI;
mongoose.connect(connection,  { useNewUrlParser:true }).then(() => console.log(`Your are now connected to MongoDB`))
.catch((err) => console.error('Something went wrong', err));

const port = process.env.port || 3000;

app.use(cors(corsOptions));
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSUccessStatus: 200
}

const events = require('./routes/events');
app.use(events)

const posts = require('./routes/posts');
app.use(posts);

app.listen(port);

console.log(`Connecting to localhost port: ${port}.
This api is CORS-enabled!`)

module.exports = app;
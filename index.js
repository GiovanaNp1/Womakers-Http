const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const mongo = process.env.MONGO;


mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));
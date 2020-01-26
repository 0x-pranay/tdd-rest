const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index.js');

const bodyParser = require('body-parser');
require('dotenv').config();


const db_url = 'mongodb+srv://dbUser01:Hello12345@cluster0-afxum.mongodb.net/tdd_rest?retryWrites=true&w=majority'
mongoose.connect(db_url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', indexRoutes);
app.listen(3000, () => console.log('Server running at port 3000'));


const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const  cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');


const app = express();

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static('./dist/frontend'));

app.use(cors());

// Import Routes
const booksRoute = require('./routes/books');
const usersRoute = require('./routes/users');

// app.use('/books',express.raw({ type: '*/*' }),booksRoute);
// app.use('/users',express.raw({ type: '*/*' }),usersRoute);

app.use('/books',booksRoute);
app.use('/users',usersRoute);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
   });
   
   process.env.PORT || 3000

// Connect to DB
mongoose.connect(process.env.dbUrl, { useNewUrlParser: true }, () => { 
    console.log("Connected to DB")
});

app.listen(3000)
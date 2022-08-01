const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const  cors = require('cors');


const app = express();

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

// Import Routes
const booksRoute = require('./routes/books');
const usersRoute = require('./routes/users');

// app.use('/books',express.raw({ type: '*/*' }),booksRoute);
// app.use('/users',express.raw({ type: '*/*' }),usersRoute);

app.use('/books',booksRoute);
app.use('/users',usersRoute);

// Connect to DB
mongoose.connect(process.env.dbUrl, { useNewUrlParser: true }, () => { 
    console.log("Connected to DB")
});

app.listen(3000)
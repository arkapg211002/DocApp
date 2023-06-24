const express = require('express');
const colors = require('colors');
const morgran = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// dotenv config
dotenv.config();

// mongodb config
connectDB();


// rest app
const app = express();

// middlewares
app.use(morgran('dev'));
app.use(express.json());

// routes
app.use('/api/v1/users', require('./routes/userRoutes'));
//app.get('/', (req, res) => {
//    res.status(200).send({
//        message: 'Server running',
//    });
//    }
//);


// listen port

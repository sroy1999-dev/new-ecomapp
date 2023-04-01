const express = require('express');
const dotenv = require('dotenv');
const ErrorHandler = require('./utils/ErrorHandler');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}))

dotenv.config();


//for error handling
app.use(ErrorHandler);


module.exports = app;
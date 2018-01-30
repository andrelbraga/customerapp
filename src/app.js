'use strict'
//Init requires
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

//Load Models
const User = require('./models/user');

//ConectionString bd
mongoose.connect('mongodb://sys:sysadmin@ds046867.mlab.com:46867/customerapp');

//Export routes
const index = require('./routes/index');
const user = require('./routes/user');
const oauth = require('./routes/oauth');
const historic = require('./routes/historic');
const report = require('./routes/report');
const call = require('./routes/call');
const customer = require('./routes/customer');


//Config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', index);
app.use('/user', user);
app.use('/historic', historic);
app.use('/report', report);
app.use('/customer', customer);
app.use('/call', call);
app.use('/oauth', oauth);




//Intercept 
app.use(function (req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
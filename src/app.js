'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Export routes
const index = require('../src/routes/index');
const user = require('../src/routes/user');
const oauth = require('../src/routes/oauth');
const historic = require('../src/routes/historic');
const report = require('../src/routes/report');
const call = require('../src/routes/call');
const customer = require('../src/routes/customer');


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
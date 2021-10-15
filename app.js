var env = require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// Set listing file location
app.set('listingsDirectory', path.join(__dirname, 'opportunities'));
// Use expressLayouts for templating
app.use(expressLayouts);
// Main website layout template
app.set('layout', './layouts/public')
app.set('view engine', 'ejs');
// add req.session cookie support
app.use(cookieSession({ 
	name: 'session',
	secret: 'do you xlera',
	lookup: {},
	opportunity: {},
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
 }));

// Static Imports
app.use('/css/bootstrap.min.css', express.static(path.join('node_modules/bootstrap/dist/css/bootstrap.min.css')));

app.use('/js/bootstrap.bundle.min.js', express.static(path.join('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')));
app.use('/js/vanilla-back-to-top.min.js', express.static(path.join('node_modules/vanilla-back-to-top/dist/vanilla-back-to-top.min.js')));
app.use('/js/vanillajs-scrollspy.min.js', express.static(path.join('node_modules/vanillajs-scrollspy/dist/vanillajs-scrollspy.min.js')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

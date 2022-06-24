var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var vlRouter = require('./routes/vl');
var companiesRouter = require('./routes/companies');
var carsRouter = require('./routes/cars');
var vagtsRouter = require('./routes/vagts');
var driversRouter = require('./routes/drivers');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/vl', vlRouter);
app.use('/companies', companiesRouter);
app.use('/cars', carsRouter);
app.use('/vagts', vagtsRouter);
app.use('/drivers', driversRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
;

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
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
var methodOverride = require('method-override');


let indexRouter = require('./routes/index');
let skillsRouter = require('./routes/skills');

let app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next){
  console.log("hello SEI");
  // req.time = new Date().toLocaleTimeString();
  next();
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));




app.use('/', indexRouter);
app.use('/skills', skillsRouter);

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

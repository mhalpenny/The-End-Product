
//run without type: module
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./index');
// var usersRouter = require('./routes/users');

var app = express();
// app.set('port', process.env.PORT || 8080);
const port = 8081;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.get('/s3Url', async (req, res) => {
//   const url = await generateUploadURL()
//   res.send({url})
// })

module.exports = app;

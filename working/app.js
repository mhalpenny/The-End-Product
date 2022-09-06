const express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan');
const app = express()
const port = 3000

//dev tools & cookies
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//serve default page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//log listening info
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
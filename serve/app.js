const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors=require('cors');
const formidable=require('formidable');
const session=require('express-session');
const mongoose=require('mongoose');
const MongoStore=require('connect-mongo');

const indexRouter = require('./routes/index');
const articleRouter=require('./routes/article');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret:"666",
//   store:new MongoStore({
//     url:"mongodb://localhost/tennis"
//   })
// }))

app.use('/', indexRouter);
app.use('/article', articleRouter);

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
mongoose.connect("mongodb://localhost/tennis",{
  useNewUrlParser:true,
  useFindAndModify:true,
  useCreateIndex:true
})
mongoose.connection.on('open',()=>{
  console.log("tennis数据库连接成功");
})
app.listen(3000);
module.exports = app;

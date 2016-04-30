var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var PORT = 3000;
// view engine setup
// app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, function(){
  console.log('app is listening on port ' + PORT);
})


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// app.use('/', routes);
// app.use('/reservations', reservations);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: 'handlebars'
}));

// app.set('views', path.join(root, 'views'));
// app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  // res.send('hello');
  res.render('home');

});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;


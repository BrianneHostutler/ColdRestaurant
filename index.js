var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var root = __dirname;

var mysql = require("mysql");


var connection = mysql.createConnection({
  host     : 'localhost', //127.0.0.1
  user     : 'root',
  password : '',
  database : 'resturants'
});

connection.connect(function(err){

  console.log("Connection Started");

});

var insertData = {customer_name: "My Name", customer_email: "me@me.com", phone_number: "112-334-5555"};

connection.query("INSERT INTO customers SET ?",insertData, function(err, result){
console.log(err);
console.log("Insert successful");

connection.query('SELECT * FROM customers', function(err, rows, fields){
  if (err) throw err;

  console.log(rows);
//  console.log('The bears\'s are: ', rows[0].name);
});

})




var app = express();
var PORT = 3001;
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

app.set('views', path.join(root, '/views'));
app.set('view engine', 'handlebars');

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

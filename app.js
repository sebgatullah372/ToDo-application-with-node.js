var express = require('express');
var todocontroller = require('./controllers/todocontroller');
var app = express();
//set view
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));

//fire controller
todocontroller(app);
//listen to port
app.listen(3000);
console.log('listening');


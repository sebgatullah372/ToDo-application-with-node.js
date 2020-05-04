var bodyParser = require('body-parser');
//var data = [{item: 'eat'}, {item: 'sleep'}, {item: 'brush'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});
var mongoose = require('mongoose');
//database connection
//mongoose.connect('mongodb+srv://sebgatullah372:kaputdecornis@arnob-nhoox.mongodb.net/test?retryWrites=true&w=majority');
var url = 'mongodb://localhost:27017/todo';
mongoose.connect(url);
//Database schema

var todoSchema = new mongoose.Schema({
    item: String

});

//Database Model

var todo = mongoose.model('todo', todoSchema);


//Create items

/*var item1 = todo({item:'Studying'}).save(function(err){

	if(err) throw err;
	console.log("Item saved");
});*/
//data.push({item:'movie'});
//console.log(data);
module.exports = function(app){

   app.get('/todo',function(req,res) {

   	todo.find({},function(err, data){

   		if(err) throw err;
        res.render('todo', {todos: data});
   	});
   	
   });

   app.post('/todo', urlencodedParser, function(req,res) {

    var todoitem = todo(req.body).save(function(err,data){

    	if (err) throw err;
    	res.json(data);
    });

   	//data.push(req.body);

   	//res.json(data);
   });



   app.delete('/todo/:item',function(req,res) {
   	todo.find({item: req.params.item.replace(/\-/g , " ")}).remove(function(err,data){

   		if (err) throw err;

   		res.json(data);
   	});



   	/*data = data.filter(function(todo){

     return todo.item.replace(/ /g,'-') !== req.params.item;
   	});
   	res.json(data);*/
   });


};
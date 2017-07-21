var db = require('.db/');

var user = require('./user');


function run(){
	var vasya = new user.User('Vasya');
	var petya = new user.User('Petya');

	vasya.hello(petya);
	console.log(db.getPhrases("Run successfull"));
}


if(module.parent){
	exports.run = run;
}else{
	run();
}
var server = require("./server.js");
var utils = require("./utilities.js");

// start the external mockup service that provide us test data
server.StartHttpServer();

// call the external service

// getRecords( callback(array) )

// filter( array, selector(item) ) returns the filtered array!





/* remove the comments to see how it works!
utils.getRecords(function (people) {
	 console.log(people);
	
     var result = utils.filter(people, function(person) {
		return person.name === "alessanro";
	 });	
	 
	 console.log(result);
	 });
*/
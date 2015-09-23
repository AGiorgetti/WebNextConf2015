// ES6 - for..of (in arrays)

(() => {
	
	let arr = ["a", "b", "c"];
	
	// iterates on the properties
	console.log("for..in");
	for (let itm in arr) {
		console.log(itm);
	}
	
	// correctle iterate the array elements
	console.log("for..of");	
	for (let itm of arr) {
		console.log(itm);
	}
	 
})();
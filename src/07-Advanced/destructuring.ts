(() => {
	
	// ES6 - destructuring declarations

	// from objects
	let obj = { x: 1, y: '2' };
	let {x, y} = obj;

	console.log(x); // x = 1
	console.log(y); // y = '2'

	// from arrays
	let arr = [1, '2'];
	let [x1, y1] = arr;

	console.log(x1); // x = 1
	console.log(y1); // y = '2'

	// ES6 - destructuring assignments

	let [x2, y2] = [1, 2];

	console.log(x2); // x = 1
	console.log(y2); // y = 2

	[x2, y2] = [y2, x2];

	console.log(x2); // x = 2
	console.log(y2); // y = 1
 
})();
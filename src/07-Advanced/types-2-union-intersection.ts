// Union Type: a value that can be one of several types: JavaScript is dynamic!
(() => {

	let x: string | string[] | (() => string);

	x = "a";
	x = ["a", "b"]
	// x = 2; // Error!
	
	// you will probably need some casting sooner or later: see 'check guards'
	
})();

// Intersection Type: a value that is an intersection of all the types involved: JavaScript is dynamic!
(() => {

	interface A {
		a: string
	}
	interface B {
		b: number
	}

	// x act as both types!
	let x: A & B;
	
	x.a = "1";
	x.b = 2;
	
})();

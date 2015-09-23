// ES6 - arrow function

// support for arrow function syntax
var f: () => boolean;

f = () => {
	return true;
}

// 'arguments' is not supported

var f2 = () => {
	// return arguments.length > 0; // Error!
}

// workaround: is use named rest parameters
var f3 = (...args: any[]) => {
	return args.length > 0;
}

// workaround: use function expression
var f4 = function() {
	return arguments.length > 0;
}

// WARNING: what is 'this' ?
// Use an arrow function inside a class to have 'this' reference
// the instance of the class in a correct way.
class A {
	// classes body always behave as "use strict" was specified.
	
	constructor(public name: string) {}
	
	// WARNING: what is 'this' ?
	delayedConsoleLog() {
		this.name = "test";
						
		setTimeout(function() {
			
			// inside a function the value of 'this' depends on how the function it's called
			// non strict mode: it must be an object, if not set it's the global object
			// strict mode: it remain whatever it was when entering the execution context: undefined or a value
			
			console.log(this.name); // <- undefined!!
		}, 500);
		
		
		
		
		
		
		
		
		setTimeout(() => {
			console.log(this.name); // <- this is good!
		}, 1000)
	}
}

var instance = new A("test");
instance.delayedConsoleLog();
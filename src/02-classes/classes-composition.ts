// Beware of the 'this' when playing with 'function pointers'!!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 
// When a function is called as a method of an object, 
// its 'this' is set to the object the method is called on.
// 
// The same notion holds true for methods defined somewhere on 
// the object's prototype chain. If the method is on an object's 
// prototype chain, this refers to the object the method was called on, 
// as if the method was on the object.

class Service1 {
	private name: string = "Service1";
	
	doSomething(): void {
		// I expect 'this,name' to always have the value 'Hammer' right?
		console.log("[" + this.name + "] Doing a wonderful job! This is my 'this':");
		console.log(this);
	}
}

class ServiceAggregator {
	private name: string = "Aggregator";
	private service1: Service1; // let's do some composition
	
	public doSomething: () => void; // and expose to the outside world the functions from our component class
	
	constructor(tool: Service1) {
		this.service1 = tool;
		
		this.doSomething = this.service1.doSomething; // WARNING! you are 'messing up' with the 'this'! 
		                                              // it will reference the ServiceAggregator class
	}	
}

var u = new ServiceAggregator(new Service1());
u.doSomething();
































// you probably would like to do:
// this.doSomething2 = () => { this.tool.doSomething(); } // this is what you really wanna do!
	
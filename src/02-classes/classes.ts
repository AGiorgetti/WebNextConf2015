// classes implement the behaviors of an entity
//
// they have support for:
// - accessors (get, set) [ES5+]
// - modifiers: public, private, protected
// - constructor
// - inheritable
// - static properties
// - interface implementation
//
// Classes also define Types (they have 2 sides):
// - instance side (the properties involved in structural typing)
// - static side  (constructor and static properties, not involved in type checking)
	
interface ILogger {
	name: string;
	log(message: string): void;
}

class ConsoleLogger implements ILogger {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	log(message: string): void {
		
		// use 'this.' to gain access to the class' fields and functions.
		//
		// When a function is called as a method of an object, 
		// its 'this' is set to the object the method is called on.
		console.log("[" + this.name + "] " + message);
	}
}

class RemoteLogger implements ILogger {
	constructor(public name: string) { }

	log(message: string): void {
		console.log("Sending the data to the outside world!");
		console.log("[" + this.name + "] " + message);
	}
}	
	
// abstract ! (TypeScript 1.6)
class LoggerBase implements ILogger {
	constructor(public name: string) { }
	
	// methods can be 'abstract' too
	log(message: string): void {
		console.log("LoggerBase");
		console.log("[" + this.name + "] " + message);
	}

	//abstract abstractMethod(message: string): void;
}

class ConsoleLoggerDerived extends LoggerBase {
	constructor(name: string) {
		super(name); // call base class constructor
	}
		
	// override a function!
	log(message: string): void {
		// do your job
		console.log("ConsoleLogger2");
		console.log("[" + this.name + "] " + message);
	}

	abstractMethod(message: string): void {
		console.log("abstract method implementation");
		console.log("[" + this.name + "] " + message);
	}
}
	
// interface do not have get/set (accessors) -> you need to convert the name 
// property to a getName() function if you wanna give that readonly behavior
// ES7 proposal
// https://github.com/Microsoft/TypeScript/issues/2249
// https://github.com/wycats/javascript-decorators

// Decorators make it possible to annotate and modify classes and
// properties at design time.
//
// A decorator is:
// - an expression
// - that evaluates to a function
// - that takes the target, name, and property descriptor as arguments
// - and optionally returns a property descriptor to install on the target object
//
// decorators are added to class methods (and class constructor)
// declaration using the '@' sign
//
// TypeScript has 4 specific types for decorators:
// - ClassDecorator 
// - MethodDecorator 
// - PropertyDecorator 
// - ParameterDecorator 

import { ILogger, ConsoleLogger } from "../04-modules/LoggerModule";

var logger: ILogger = new ConsoleLogger("decorator sample");

/**
 * method decorator
 */
function log(
	target: Object, // the prototype of the object on whcih the decorator is acting on
	propertyKey: string, // the name of the method being decorated
	descriptor: TypedPropertyDescriptor<any> // a descriptor for the method being decorated, 
// we can specify what kind of function we can decorate here:
// replace 'any' with '() => void' for this sample.
): TypedPropertyDescriptor<any> {

	// the recommended way: always edit the descriptor object, do not create a new one or you might lose changes made by other decorators
	
	var originalMethod = descriptor.value;
	
	// Do not use an arrow function here, 
	// it will interfere with the proper 'this' being passed 
	// in the originalMethod.apply() call.
	descriptor.value = function(...args: any[]) {
		
		// log the arguments
		logger.log("Method: '" + propertyKey + "', arguments: " + JSON.stringify(args));
		
		// call the original method, 'this' must be the right context!
		var result = originalMethod.apply(this, args);
		
		// log the result
		logger.log("Return value: " + JSON.stringify(result));
		
		// return the result
		return result;
	}

	return descriptor;
}

class Actor {
	constructor(private name: string) { }

	//@log
	saySomething(subject: string): string {
		console.log("[" + this.name + "] I'm talking about '" + subject + "' and I am awesome on stage!");

		return "I have my fingers crossed!";
	}
}

var a = new Actor("Alessandro");
var moreWords = a.saySomething("TypeScript");
console.log(moreWords);




 


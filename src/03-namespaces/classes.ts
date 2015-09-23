// namespaces (internal module)
// - way to organize your code
// - export: decide what to expose to the outside world
// - can be split in multiple files
//
// how to use:
// - build the whole application concatenating all the files
// - reference the files using <script> tags in the correct order
//
// NO DYNAMIC MODULE LOADING (Node.js / Require.js)
	
namespace Logger {

	export interface ILogger {
		name: string;
		log(message: string): void;
	}

	export class ConsoleLogger implements ILogger {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		log(message: string): void {
			console.log("[" + this.name + "] " + message);
		}
	}

	export class RemoteLogger implements ILogger {
		constructor(public name: string) { }

		log(message: string): void {
			console.log("Sending the data to the outside world!");
			console.log("[" + this.name + "] " + message);
		}
	}	
	
	// abstract ! (TypeScript 1.6)
	class LoggerBase implements ILogger {
		constructor(public name: string) { }

		log(message: string): void {
			console.log("LoggerBase");
			console.log("[" + this.name + "] " + message);
		}
	}

	export class ConsoleLogger2 extends LoggerBase {
		constructor(name: string) {
			super(name); // call base class constructor
		}
		
		// override a function!
		log(message: string): void {
			// do your job
			console.log("ConsoleLogger2");
			console.log("[" + this.name + "] " + message);
		}
	}
	
	// interface do not have get/set (accessors) -> you need to convert the name property to a getName() function if you wanna give that readonly behaviour
}
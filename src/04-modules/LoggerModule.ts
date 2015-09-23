// modules (external modules)
// - way to organize your code
// - export: decide what to expose to the outside world
// - have file scope! (map 1:1 with the files that defines them)
// - any file containing a top-level import or export is considered a module
// - must use the --module compiler switch [commonjs, AMD, system, ...]
//
// look at the documentation on how to do dynamic load a module.
	
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
	

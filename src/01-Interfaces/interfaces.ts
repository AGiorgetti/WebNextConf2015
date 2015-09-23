// an interface defines the SHAPE of an entity

// Interfaces can describe:​
// - Objects​
// - Functions​
// - Arrays / Dictionaries​
// - Hybrid Types ('things' that are both objects and functions)​
//​
// Interfaces support:​
// - Inheritance​


interface IApple {
	id: string,
	producer: string,
	color: string,
    //	name?: string
}

interface IOrange {
	id: string,
	producer: string,
	color: string,
	//name: string
}

var apple = <IApple>{};
var orange = <IOrange>{};

// WARNING let's mess up with the fruits! (Structural Typing - Duck Typing)

apple = orange;
orange = apple;





// interface can describe functions: function types (delegates in C#)

interface loggingFunction{
	(message: string): void
}

var log: loggingFunction = function(message: string) { 
	console.log(message);
}
log("log this!");

// interface can describe arrays: array types / dictionaries

interface StringDictionary {
	[index: string]: string; // index can be number or string
}
// WARNING: all additional properties must match the return type of the indexer 

// Hybrid types: 
// JavaScript is dynamic and flexible and interfaces have to describe all those objects
// that act both as function and objects.

interface Timer {
	(interval: number): string;
	interval: number;
	reset(): void;
}

// inheritance

interface ISuperHero extends IHuman {
	specialPower: string;
}
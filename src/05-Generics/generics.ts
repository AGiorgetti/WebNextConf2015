// generics can also be used in:

// interfaces

interface IFilterGeneric {
	<T>(collection: T[], predicate: (item: T) => Boolean): T[];
}

interface IFilter<T> {
	(collection: T[], predicate: (item: T) => Boolean): T[];
}

// classes

class Person<T> {
	id: T;
	name: string
	// ...
	SmileTo(id: T): void {
		// store the value
	}
}

// constraints
//
// build a function that works on a specific set of types 
// (ot types that expose specific properties)

interface IPerson {
	name: string;
}

function filter1<T extends IPerson>(collection: T[], predicate: (item: T) => Boolean): T[] {
	//...
	throw "missing implementation";
	
}
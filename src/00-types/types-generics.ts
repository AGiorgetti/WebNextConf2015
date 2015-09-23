// better code reuse with generic types!

// let's change the function from 'Sample01-ts'





// here's the result!
function filter<T>(collection: T[], predicate: (item: T) => boolean): T[] {
	var result = new Array();

	for (var j = 0; j < collection.length; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
};


// generic function type definition
var myFilter: <T>(collection: T[], preficate: (item:T) => boolean) => T;

myFilter = filter;
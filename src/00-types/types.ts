// TypeScript has all the basic JavaScript Types (number, string, etc...)

//...
var str1: string = "test";
var str2 = "test"; // type inference
//str2 = 1;

// plus:

// any [disable the type checking]

var a: any;
a = 1;
a = '1';

// void [no type at all, used a return value of a function]

function test() : void {
	// I only have side effects!
}
// this is meaningless! 
var result = test();

// also note that a function it's actually just a function!
// it cannot act like an object anymore (try to define fields and properties inside it)

// Enums

enum MyFlags {
	Unknown = 0,
	One = 1,
	Two = 2
}

// will result in inlined values! (it's a Development time construct)
const enum MoreFlags { First = 1, Second = 3 };
var firstFlag = MoreFlags.First;

// Casting
// using <T> or the new 'as' operator
var untyped = 1;

var asNumber1: number = <number>untyped;
var asNumber2: number = untyped as number;

// type alias
type address = string;
var myAddress: address;
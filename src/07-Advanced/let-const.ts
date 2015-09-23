// let [ES6 - variable has block scope validity]

// define a block
let x = 1;
console.log(x);

if (x == 1) {
	let x = 3;
	console.log(x);
}

console.log(x);

// const [ES6]

const constantValue = 1;
// constantValue = 2; // Error!

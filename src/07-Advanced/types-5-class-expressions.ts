// ES6
// It is not possible to refer to the class instance type of a class expression 
// outside the class expression, but the type can of course be matched structurally.

let Point = class {
    constructor(public x: number, public y: number) { }
    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

var p = new Point(3, 4);  // p has anonymous class type

console.log(p.length());
// types can be declared inside functions!
// they will have block scope.

(() => {
	
	function myFunc(): void {
		
		// check this!
		// a class declaration inside a function
		class LocalClass {
			doSomething() : void {
				console.log("LocalClass");
			}
		}
		
		var lclClss = new LocalClass();
		lclClss.doSomething();
		
		console.log("doing something...");
	}
	
})();
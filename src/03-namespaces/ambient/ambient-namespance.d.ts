// if you do not want to port your entire library to TypeScript you can write only the 
// interfaces and function signature declarations to be used in a TypeScript enabled project

// ambient namespaces are for libraries that are meant to be used with <script> tags

// refs: my-library.js

declare namespace utils {
	
	export function filter<T>(collection: T[], predicate: (value: T) => boolean): T[];
	
}
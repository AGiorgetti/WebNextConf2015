// to use these we need to:
// - reference the .d.ts (to enable type checking)
// - load the file using a <script> tag (or bundle them all toghether)

/// <reference path="ambient-namespance.d.ts" />

var arrayToFilter: string[];

var filtered = utils.filter(arrayToFilter, (val) => {
	return true;
});
(function (utils, undefined) {

	utils.filter = function (collection, predicate) {
		var result = new Array();

		for (var j = 0; j < collection.length; j++) {
			if (predicate(collection[j]) === true) {
				result.push(collection[j]);
			}
		}

		return result;
	};

})(window.utils = window.utils)
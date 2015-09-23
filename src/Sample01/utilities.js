//export -> node specific code, won't work with standard JS (wold like to use ES6 export / import from syntax)

var http = require("http");

function getRecords(callback) {
    var options = {
        host: "127.0.0.1",
        port: 8010,
        path: "/",
        method: "GET"
    };
    http.get(options, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            var result = JSON.parse(body);
            //console.log(result);
            callback(result);
        });
    }).on("error", function (error) {
        console.log(error);
    });
};
exports.getRecords = getRecords;

/*
exports.getRecords = function () {
	return [{
		id: 1,
		name: "alessandro",
		surname: "giorgetti"
	}, {
			id: 2,
			name: "mario",
			surname: "rossi"
		}];
};
*/


function filter(collection, predicate) {
	var result = new Array();

	for (var j = 0; j < collection.legth; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
};
exports.filter = filter;


/// <reference path="../../typings/tsd.d.ts" />
import * as http from "http";

export interface IPerson {
    id: number,
    name: string,
    surname: string
    
    //[x:string]: any; // typescript 1.6 tsc --suppressExcessPropertyErrors (look in tasks.json)
}

export function getRecords(callback: (array: IPerson[])=> void): void {
    var options = {
        host: "127.0.0.1",
        port: 8010,
        path: "/",
        method: "GET"
    };
    http.get(options, function (res) {
        var body = '';
        res.on('data', function (chunk: any) {
            body += chunk;
        });
        res.on('end', function () {
            var result = JSON.parse(body);
            //console.log(result);
            callback(result);
        });
    }).on("error", function (error: any) {
        console.log(error);
    });
};

export function filter(collection: IPerson[], predicate: (item: IPerson) => boolean): IPerson[] {
	var result = new Array();

	for (var j = 0; j < collection.length; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
};
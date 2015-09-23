/// <reference path="../../typings/tsd.d.ts" />
import * as http from "http"

export function StartHttpServer() {
  // Configure our HTTP server to respond with Hello World to all requests.
  var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end('[{ "id": 1, "name": "alessandro", "surname": "giorgetti"}, { "id": 2, "name": "mario", "surname": "rossi" }]');
  });

  server.listen(8010);

  console.log("Server running at hhtp://127.0.0.1:8010/");
}
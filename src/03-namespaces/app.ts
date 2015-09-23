// namespaces:
// - can be used with <script> tag
// - bundle everything on a single file

/// <reference path="classes.ts" />

var l: Logger.ILogger = new Logger.ConsoleLogger("custom logger");

l.log("test message");



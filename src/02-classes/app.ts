/// <reference path="classes.ts" />

var l: ILogger = new ConsoleLogger("custom logger");

l.log("test message");





// inheritance and methods overriding
/*
// remove the 'abstract' modifier on the base class torun this code
var loggerBase = new Logger.LoggerBase("base");
var loggerDerived = new Logger.ConsoleLogger2("derived");

// look at the console to prove that overriding methods works as expected
loggerDerived.log("derived");
loggerBase.log("base");
*/

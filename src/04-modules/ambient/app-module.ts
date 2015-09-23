// to use these we need to:
// - reference the .d.ts (to enable type checking)
// - require the module (to actually load it)

///<reference path="ambient-module.d.ts"/>
//import url = require("my_url");
import * as Url from "my_url";

var myUrl = Url.parse("http://www.typescriptlang.org");
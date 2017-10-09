"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
function Start(module) {
    module.prototype = express();
    console.log(module.prototype);
}
exports.Start = Start;
APP.listen(8080, function () {
    console.log('server start');
});
//# sourceMappingURL=start.js.map
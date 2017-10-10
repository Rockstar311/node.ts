"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
function MainStart(module) {
    var appMain = express();
    module.prototype = appMain;
    appMain.listen(8080, function () {
        console.log('server start');
    });
    console.log(module.prototype);
}
exports.MainStart = MainStart;
//# sourceMappingURL=start.js.map
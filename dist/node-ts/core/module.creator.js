"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fluency_injection_1 = require("fluency-injection");
var routing_1 = require("./routing");
var express = require("express");
function MainModuleCreator(module) {
    console.log('module creator');
    for (var _i = 0, _a = module.pageRoute; _i < _a.length; _i++) {
        var page = _a[_i];
        fluency_injection_1.bootstrap(page);
    }
    var appMain = express();
    appMain.listen(8080, function () {
        console.log('server start');
    });
    new routing_1.Routing(module.routing, appMain);
    return function (target) {
        target.prototype.app = appMain;
    };
}
exports.MainModuleCreator = MainModuleCreator;
//# sourceMappingURL=module.creator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_1 = require("./routing");
var express = require("express");
var appMain = express();
var appChild;
var isUseChild = false;
appMain.listen(8080, function () {
    console.log('server start');
});
function AppModuleCreator(module) {
    console.log('module creator');
    new routing_1.Routing(module.routing, appMain);
    isUseChild = true;
    return function (target) {
        target.prototype.app = appMain;
    };
}
exports.AppModuleCreator = AppModuleCreator;
function PageCreator() {
    return function (target) {
        target.prototype.app = appMain;
    };
}
exports.PageCreator = PageCreator;
//# sourceMappingURL=module.creator.js.map
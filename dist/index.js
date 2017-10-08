"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routing_1 = require("./node-ts/core/routing");
var routings_1 = require("./routings");
exports.APP = express();
new routing_1.Routing(routings_1.ROUTINGS);
exports.APP.listen(8080, function () {
    console.log('server strt on port 8080');
});
//# sourceMappingURL=index.js.map
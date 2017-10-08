"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_path_1 = require("./routing-path");
var home_1 = require("./routing-page/home");
var about_1 = require("./routing-page/about");
exports.ROUTINGS = [
    { url: routing_path_1.ROUTING_PATH.HOME, method: 'GET', page: home_1.RouteHome },
    { url: routing_path_1.ROUTING_PATH.ABOUT, method: 'GET', page: about_1.RouteAbout },
];
//# sourceMappingURL=routings.js.map
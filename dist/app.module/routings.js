"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_1 = require("./pages/about");
var home_1 = require("./pages/home");
var routing_path_1 = require("./routing.path");
exports.ROUTINGS = [
    { url: routing_path_1.ROUTING_PATH.HOME, method: 'GET', page: home_1.RouteHome },
    { url: routing_path_1.ROUTING_PATH.ABOUT, method: 'GET', page: about_1.RouteAbout },
];
//# sourceMappingURL=routings.js.map
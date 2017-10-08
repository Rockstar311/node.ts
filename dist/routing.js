"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_1 = require("./routing-page/about");
var home_1 = require("./routing-page/home");
var fluency_injection_1 = require("fluency-injection");
var Routing = (function () {
    function Routing(routes) {
        fluency_injection_1.bootstrap(about_1.RouteAbout);
        fluency_injection_1.bootstrap(home_1.RouteHome);
    }
    return Routing;
}());
exports.Routing = Routing;
//# sourceMappingURL=routing.js.map
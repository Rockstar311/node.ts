"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routing = (function () {
    function Routing(routes, APP) {
        this.APP = APP;
        this.routes = routes;
        this.start();
    }
    Routing.prototype.start = function () {
        for (var _i = 0, _a = this.routes; _i < _a.length; _i++) {
            var route = _a[_i];
            console.log(route, "==================");
            var method = route.method.toLocaleLowerCase();
            var url = route.url;
            console.log(route.page);
        }
    };
    return Routing;
}());
exports.Routing = Routing;
//# sourceMappingURL=routing.js.map
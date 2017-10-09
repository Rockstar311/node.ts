"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fluency_injection_1 = require("fluency-injection");
var index_1 = require("../../index");
var Routing = (function () {
    function Routing(routes) {
        this.APP = index_1.APP;
        console.log(routes);
        this.routes = routes;
        this.start();
    }
    Routing.prototype.start = function () {
        for (var _i = 0, _a = this.routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var method = this.checkMethod(route.method);
            var url = route.url;
            var page = fluency_injection_1.bootstrap(route.page);
            this.APP.route(url)[method](page.callBack);
        }
    };
    Routing.prototype.checkMethod = function (method) {
        method = method.toLocaleLowerCase();
        switch (method) {
            case 'get': {
                return 'get';
            }
            case 'post': {
                return 'post';
            }
            default: {
                throw new Error('Type method is not correct');
            }
        }
    };
    return Routing;
}());
exports.Routing = Routing;
//# sourceMappingURL=routing.js.map
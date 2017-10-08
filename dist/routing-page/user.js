"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteUser = (function () {
    function RouteUser() {
    }
    RouteUser.prototype.callBack = function (req, res) {
        console.log('page home ' + req.url);
        res.send('home');
    };
    return RouteUser;
}());
exports.RouteUser = RouteUser;
//# sourceMappingURL=user.js.map
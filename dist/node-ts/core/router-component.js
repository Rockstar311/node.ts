"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var first_service_1 = require("../../service/first.service");
var second_service_1 = require("../../service/second.service");
function RouteComponent(target) {
    var parameterKey = 'design:paramtypes';
    if (typeof target !== 'function') {
        throw new Error('autoInject: Target must be a function');
    }
    var injects = Reflect.getOwnMetadata(parameterKey, target) || [];
    var services = {
        SecondService: new second_service_1.SecondService(),
        FirstService: new first_service_1.FirstService()
    };
    target.inject = injects.map(function (i) {
        return services[i.name];
    });
}
exports.RouteComponent = RouteComponent;
//# sourceMappingURL=router-component.js.map
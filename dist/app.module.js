"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var routings_1 = require("./app.module/routings");
var first_service_1 = require("./services/first.service");
var user_1 = require("./app.module/pages/user");
var about_1 = require("./app.module/pages/about");
var module_creator_1 = require("./node-ts/core/module.creator");
var home_1 = require("./app.module/pages/home");
var children1_module_1 = require("./children1.module/children1.module");
var admin_module_1 = require("./admin.module/admin.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        module_creator_1.AppModuleCreator({
            pagesRoute: [
                about_1.RouteAbout,
                home_1.RouteHome,
                user_1.RouteUser,
            ],
            provides: [
                first_service_1.FirstService
            ],
            routing: routings_1.ROUTINGS,
            childModules: [
                children1_module_1.ChildrenModule,
                admin_module_1.AdminModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
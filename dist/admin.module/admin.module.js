"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var module_creator_1 = require("../node-ts/core/module.creator");
var routings_1 = require("./routings");
var home_page_1 = require("./pages/home.page");
var inner_page_1 = require("./pages/inner.page");
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        module_creator_1.AppModuleCreator({
            pagesRoute: [
                home_page_1.HomePage,
                inner_page_1.InnerPage
            ],
            routing: routings_1.ROUTINGS,
            childUrl: '/admin'
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map
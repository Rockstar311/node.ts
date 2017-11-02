"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var children2_page_1 = require("./pages/children2.page");
var children_page_1 = require("./pages/children.page");
var module_creator_1 = require("../node-ts/core/module.creator");
var routings_1 = require("./routings");
var ChildrenModule = (function () {
    function ChildrenModule() {
    }
    ChildrenModule = __decorate([
        module_creator_1.AppModuleCreator({
            pagesRoute: [
                children_page_1.ChildPage1,
                children2_page_1.ChildPage2,
            ],
            routing: routings_1.ROUTINGS,
            childUrl: '/children'
        })
    ], ChildrenModule);
    return ChildrenModule;
}());
exports.ChildrenModule = ChildrenModule;
//# sourceMappingURL=children1.module.js.map
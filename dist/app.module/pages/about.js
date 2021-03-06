"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var second_service_1 = require("../../services/second.service");
var first_service_1 = require("../../services/first.service");
var page_creator_1 = require("../../node-ts/core/page.creator");
var RouteAbout = (function () {
    function RouteAbout(secondService, firstService) {
        this.secondService = secondService;
        this.firstService = firstService;
    }
    RouteAbout.prototype.callBack = function (req, res) {
        console.log('page about ' + req.url);
        res.send('about');
    };
    RouteAbout = __decorate([
        page_creator_1.PageCreator(),
        __metadata("design:paramtypes", [second_service_1.SecondService,
            first_service_1.FirstService])
    ], RouteAbout);
    return RouteAbout;
}());
exports.RouteAbout = RouteAbout;
//# sourceMappingURL=about.js.map
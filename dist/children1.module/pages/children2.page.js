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
var page_creator_1 = require("../../node-ts/core/page.creator");
var ChildPage2 = (function () {
    function ChildPage2() {
    }
    ChildPage2.prototype.callBack = function (req, res) {
        console.log('children 2 ' + req.url);
        res.send('children 2');
    };
    ChildPage2 = __decorate([
        page_creator_1.PageCreator(),
        __metadata("design:paramtypes", [])
    ], ChildPage2);
    return ChildPage2;
}());
exports.ChildPage2 = ChildPage2;
//# sourceMappingURL=children2.page.js.map
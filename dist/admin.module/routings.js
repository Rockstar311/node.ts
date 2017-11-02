"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_page_1 = require("./pages/home.page");
var inner_page_1 = require("./pages/inner.page");
exports.ROUTINGS = [
    { url: '/', method: 'GET', page: home_page_1.HomePage },
    { url: '/inner', method: 'GET', page: inner_page_1.InnerPage },
];
//# sourceMappingURL=routings.js.map
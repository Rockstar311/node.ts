"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var ReaderFile = /** @class */ (function (_super) {
    __extends(ReaderFile, _super);
    function ReaderFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReaderFile.prototype.readDataFromFile = function (path, callback) {
        this.file = path;
        this.on('readData', callback);
        this.read();
    };
    ReaderFile.prototype.read = function () {
        console.log("loading...");
        var somedata = "text text text";
        console.log("data was read");
        this.emit('readData', somedata);
    };
    return ReaderFile;
}(events_1.EventEmitter));
exports.ReaderFile = ReaderFile;
//# sourceMappingURL=FileReader.js.map
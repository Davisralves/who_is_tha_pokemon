"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllAreString = exports.isString = void 0;
var isString = function (value) { return typeof value === 'string'; };
exports.isString = isString;
var AllAreString = function (value) { return value.every(function (item) { return (0, exports.isString)(item); }); };
exports.AllAreString = AllAreString;

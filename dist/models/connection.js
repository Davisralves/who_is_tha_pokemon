"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var promise_1 = __importDefault(require("mysql2/promise"));
require("dotenv/config");
var _a = process.env, HOST = _a.HOST, USERNAME = _a.USERNAME, PASSWORD = _a.PASSWORD, DATA_BASE = _a.DATA_BASE;
exports.connection = promise_1.default.createPool({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATA_BASE
});

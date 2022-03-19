"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
require("dotenv/config");
const { HOST, USERNAME, PASSWORD, DATA_BASE } = process.env;
const connection = promise_1.default.createPool({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATA_BASE
});
exports.default = connection;

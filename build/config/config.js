"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

require('dotenv').config();

var config = {
  dbUrl: "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@cluster0.xye6j.mongodb.net/mayan-place-app?retryWrites=true&w=majority"),
  serverPORT: process.env.PORT || 3000
};
exports.config = config;
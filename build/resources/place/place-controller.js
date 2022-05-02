"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crud = require("../../utils/crud");

var _placeModel = require("./place-model");

var _default = (0, _crud.crudControllers)(_placeModel.Place);

exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _placeController = _interopRequireDefault(require("./place-controller"));

var router = (0, _express.Router)();
router.route('/').get(_placeController["default"].getMany).post(_placeController["default"].createOne);
router.route('/category').get(_placeController["default"].getByCategory);
router.route('/create-many').post(_placeController["default"].createMany);
router.route('/:id').get(_placeController["default"].getOne).put(_placeController["default"].updateOne)["delete"](_placeController["default"].removeOne);
var _default = router;
exports["default"] = _default;
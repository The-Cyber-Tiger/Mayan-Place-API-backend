"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Place = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var placeSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  area: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  conditions: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Place = _mongoose["default"].model('places', placeSchema);

exports.Place = Place;
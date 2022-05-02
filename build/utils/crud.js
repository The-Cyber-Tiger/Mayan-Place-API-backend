"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOne = exports.removeOne = exports.getOne = exports.getMany = exports.getByCategory = exports.crudControllers = exports.createOne = exports.createMany = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getOne = function getOne(model) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return model.findOne({
                _id: req.params.id
              }).lean().exec();

            case 3:
              doc = _context.sent;

              if (doc) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: doc
              });
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.getOne = getOne;

var getMany = function getMany(model) {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var docs;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return model.find().sort({
                createdAt: 1
              }).lean().exec();

            case 3:
              docs = _context2.sent;

              if (docs) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: docs
              });
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.getMany = getMany;

var createOne = function createOne(model) {
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return model.create(_objectSpread({}, req.body));

            case 3:
              doc = _context3.sent;

              if (doc) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(400).end());

            case 6:
              res.status(201).json({
                data: doc
              });
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.createOne = createOne;

var createMany = function createMany(model) {
  return /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var doc;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return model.insertMany((0, _toConsumableArray2["default"])(req.body));

            case 3:
              doc = _context4.sent;

              if (doc) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(400).end());

            case 6:
              res.status(201).json({
                data: doc
              });
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.createMany = createMany;

var updateOne = function updateOne(model) {
  return /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var updatedDoc;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return model.findOneAndUpdate({
                _id: req.params.id
              }, req.body, {
                "new": true
              }).lean().exec();

            case 3:
              updatedDoc = _context5.sent;

              if (updatedDoc) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: updatedDoc
              });
              _context5.next = 13;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.updateOne = updateOne;

var removeOne = function removeOne(model) {
  return /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var removed;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return model.findOneAndRemove({
                _id: req.params.id
              });

            case 3:
              removed = _context6.sent;

              if (removed) {
                _context6.next = 6;
                break;
              }

              return _context6.abrupt("return", res.status(400).send({
                message: 'no se encontró'
              }));

            case 6:
              return _context6.abrupt("return", res.status(200).json({
                data: removed
              }));

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error(_context6.t0);
              res.status(400).send({
                message: 'algo pasó'
              });

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 9]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.removeOne = removeOne;

var getByCategory = function getByCategory(model) {
  return /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var docs;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return model.find({
                category: req.query.category
              }).sort({
                updatedAt: -1
              }).limit(3).lean().exec();

            case 3:
              docs = _context7.sent;

              if (docs) {
                _context7.next = 6;
                break;
              }

              return _context7.abrupt("return", res.status(400).end());

            case 6:
              res.status(200).json({
                data: docs
              });
              _context7.next = 13;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              console.error(_context7.t0);
              res.status(400).end();

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }();
};

exports.getByCategory = getByCategory;

var crudControllers = function crudControllers(model) {
  return {
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
    createMany: createMany(model),
    getByCategory: getByCategory(model)
  };
};

exports.crudControllers = crudControllers;
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 7544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2741)


/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault2 = __webpack_require__(5318);

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(4575));

var _createClass2 = _interopRequireDefault2(__webpack_require__(3913));

var _inherits2 = _interopRequireDefault2(__webpack_require__(2205));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(8585));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(9754));

var _regenerator = _interopRequireDefault2(__webpack_require__(7757));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _utils.AppInitialProps;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _utils.NextWebVitalsMetric;
  }
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _utils = __webpack_require__(9232);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils).loadGetInitialProps(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  (0, _inherits2["default"])(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    (0, _classCallCheck2["default"])(this, App);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, Object.assign({}, pageProps));
    }
  }]);
  return App;
}(_react["default"].Component);

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports["default"] = App;

/***/ })

};
;
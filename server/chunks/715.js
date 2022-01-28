"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 7715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ WindowHeader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./stores/common/MainStatePage.tsx
var MainStatePage = __webpack_require__(9042);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/ui/BackButton.tsx




var BackButton = function BackButton() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    type: "button",
    className: "back-button",
    onClick: function onClick() {
      return MainStatePage/* mainStatePage.resetAdditionComponent */.V.resetAdditionComponent();
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "arrow-left"
    }), "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"]
  });
};
;// CONCATENATED MODULE: ./components/header/WindowHeader.tsx




var WindowHeader = function WindowHeader(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "added-inf-header",
    children: [/*#__PURE__*/jsx_runtime_.jsx(BackButton, {}), children]
  });
};

/***/ }),

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ mainStatePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1165);
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4575);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3913);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9713);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3124);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7268);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







var _class, _descriptor;





var MainStatePage = (_class = /*#__PURE__*/function () {
  function MainStatePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MainStatePage);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "additionComponent", _descriptor, this);

    (0,mobx__WEBPACK_IMPORTED_MODULE_6__.makeObservable)(this);
    this.additionComponent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MainStatePage, [{
    key: "setAdditionComponent",
    value: function setAdditionComponent(component) {
      this.additionComponent = component;
    }
  }, {
    key: "resetAdditionComponent",
    value: function resetAdditionComponent() {
      this.additionComponent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {});
    }
  }]);

  return MainStatePage;
}(), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4___default()(_class.prototype, "additionComponent", [mobx__WEBPACK_IMPORTED_MODULE_6__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4___default()(_class.prototype, "setAdditionComponent", [mobx__WEBPACK_IMPORTED_MODULE_6__.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAdditionComponent"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4___default()(_class.prototype, "resetAdditionComponent", [mobx__WEBPACK_IMPORTED_MODULE_6__.action], Object.getOwnPropertyDescriptor(_class.prototype, "resetAdditionComponent"), _class.prototype)), _class);
var mainStatePage = new MainStatePage();

/***/ })

};
;
"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5603);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3402);
/* harmony import */ var _stores_signUPState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4771);
/* harmony import */ var _ChooseNextStep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









var SecondRegistrationStep = (0,mobx_react__WEBPACK_IMPORTED_MODULE_0__.observer)(function (props) {
  var reg = _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.confirm */ .I.confirm;

  function handleSubmit() {
    _stores_signUPState__WEBPACK_IMPORTED_MODULE_5__/* .signUpState.setAdditionComponent */ .G.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ChooseNextStep__WEBPACK_IMPORTED_MODULE_6__["default"], {}));
  }

  (0,mobx__WEBPACK_IMPORTED_MODULE_3__.reaction)(function () {
    return reg.response === true;
  }, function (_) {
    return handleSubmit();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
    className: "code-form",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[0]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[1]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[2]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "number-input",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        children: "-"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[3]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[4]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_2__/* .NumberInput */ .Y2, {
      field: reg.fields[5]
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondRegistrationStep);

/***/ })

};
;
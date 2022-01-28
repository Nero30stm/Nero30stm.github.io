"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 6152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8926);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5603);
/* harmony import */ var _src_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_ui_Form_SelectInput_AsyncSelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9184);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3402);
/* harmony import */ var _src_requests_user_fetchOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5507);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












var CompanyRegistrationStep = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(function (props) {
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var reg = _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__/* .storeInstance.company */ .I.company;
  reg.fields.userId.set(_stores_AppStore__WEBPACK_IMPORTED_MODULE_7__/* .storeInstance.confirm.request.userId */ .I.confirm.request.userId);
  reg.fields.confirmationCode.set(_stores_AppStore__WEBPACK_IMPORTED_MODULE_7__/* .storeInstance.confirm.request.confirmationCode */ .I.confirm.request.confirmationCode);

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return reg.fetchRegistration();

            case 3:
              res = _context.sent;

              if (res === true) {
                router.push('/auth');
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
    className: "enter-form",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
      field: reg.fields.orgName,
      label: 'Name',
      type: 'text',
      placeholder: 'Название организации'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_SelectInput_AsyncSelectInput__WEBPACK_IMPORTED_MODULE_6__/* .UniversalSelect */ .rP, {
      fetchOptions: _src_requests_user_fetchOptions__WEBPACK_IMPORTED_MODULE_8__/* .fetchCountryOptions */ .QR,
      field: reg.fields.countryWikiDataId,
      placeholder: 'Страна'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .GradientButton */ .OQ, {
      disabled: !reg.isValid,
      type: "submit",
      text: "Регистрация"
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompanyRegistrationStep);

/***/ })

};
;
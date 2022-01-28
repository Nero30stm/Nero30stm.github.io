"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 5943:
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
/* harmony import */ var _components_beforeEnter_PagesSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5186);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3402);
/* harmony import */ var _stores_signUPState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4771);
/* harmony import */ var _SecondRegistrationStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8276);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var FirstRegistrationStep = (0,mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(function (props) {
  var reg = _stores_AppStore__WEBPACK_IMPORTED_MODULE_7__/* .storeInstance.signup */ .I.signup;

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

              if (res == true) {
                console.log('step 1 r');
                _stores_signUPState__WEBPACK_IMPORTED_MODULE_8__/* .signUpState.setAdditionComponent */ .G.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_SecondRegistrationStep__WEBPACK_IMPORTED_MODULE_9__["default"], {}));
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_beforeEnter_PagesSwitch__WEBPACK_IMPORTED_MODULE_6__/* .PagesSwitch */ .d, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
      className: "enter-form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
        field: reg.fields.username,
        label: 'Name',
        type: 'text',
        placeholder: 'E-mail'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
        field: reg.fields.password,
        label: 'Name',
        placeholder: 'Пароль',
        type: "password"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .II, {
        field: reg.fields.confirm,
        label: 'Name',
        placeholder: 'Пароль',
        type: "password"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .CheckInput */ .BT, {
        field: reg.fields.mailing,
        label: 'Соглашаюсь на получение рассылки по электронноой почте',
        id: 'mail'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Form_Inputs__WEBPACK_IMPORTED_MODULE_3__/* .CheckInput */ .BT, {
        field: reg.fields.agreement,
        label: 'Соглашаюсь с политикой обработки персональных данных ',
        id: 'agree'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_src_ui_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .GradientButton */ .OQ, {
        disabled: reg.disabled,
        type: "submit",
        text: "Регистрация"
      })]
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstRegistrationStep);

/***/ })

};
;
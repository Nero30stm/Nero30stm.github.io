"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 5507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QR": () => (/* binding */ fetchCountryOptions),
/* harmony export */   "y9": () => (/* binding */ fetchRegionOptions),
/* harmony export */   "aY": () => (/* binding */ fetchCityOptions)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);

function fetchCountryOptions(inputValue) {
  return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post('/location/country', {
    name: inputValue,
    languageCode: "RU"
  }).then(function (response) {
    console.log(response);
    return response;
  });
}
function fetchRegionOptions(inputValue, props) {
  console.log(props);
  return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post('/location/region', {
    name: inputValue,
    languageCode: "RU",
    countryId: props
  }).then(function (response) {
    console.log(response);
    return response;
  });
}
function fetchCityOptions(inputValue, props) {
  //console.log(props)
  return _axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post('/location/city', {
    name: inputValue,
    languageCode: "RU",
    countryId: props.country,
    regionCode: props.region
  }).then(function (response) {
    return response;
  });
}

/***/ }),

/***/ 9184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rP": () => (/* binding */ UniversalSelect),
/* harmony export */   "vR": () => (/* binding */ ObjectSelect)
/* harmony export */ });
/* unused harmony export AsyncSelectInput */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8926);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3038);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6479);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3618);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(785);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _excluded = (/* unused pure expression or super */ null && (["placeholder", "onChange", "options", "value", "handleloadOptions"])),
    _excluded2 = ["field", "placeholder", "fetchOptions"],
    _excluded3 = ["field", "placeholder", "fetchOptions"];






var AsyncSelectInput = function AsyncSelectInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value,
      handleloadOptions = _ref.handleloadOptions,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("div", {
    className: "selectMain",
    children: /*#__PURE__*/_jsx(AsyncSelect, {
      className: "select",
      classNamePrefix: "select",
      placeholder: placeholder,
      options: options,
      onChange: onChange,
      value: value,
      loadOptions: handleloadOptions,
      styles: colourStyles
    })
  });
};

var setOptions = function setOptions(inputValue) {
  var options = [];
  inputValue.map(function (data) {
    options.push({
      value: data.wikiDataId,
      label: data.name
    });
  });
  return options;
};

var UniversalSelect = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(function (_ref2) {
  var field = _ref2.field,
      placeholder = _ref2.placeholder,
      fetchOptions = _ref2.fetchOptions,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, _excluded2);

  var currentOption;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      option = _useState2[0],
      setOption = _useState2[1];

  function handleOnChange(option) {
    setOption(option);
    console.log(option);
    field.set(option.value);
  }

  function initValue() {
    return _initValue.apply(this, arguments);
  }

  function _initValue() {
    _initValue = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var request;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!field._value) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return fetchOptions(field._value, rest.forOptions);

            case 3:
              request = _context.sent;
              return _context.abrupt("return", setOptions({
                value: request.data.wikiDataId,
                label: request.data.name
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _initValue.apply(this, arguments);
  }

  function onInput(_x) {
    return _onInput.apply(this, arguments);
  }

  function _onInput() {
    _onInput = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(inputValue) {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(rest.forOptions);
              _context2.next = 3;
              return fetchOptions(inputValue, rest.forOptions);

            case 3:
              options = _context2.sent;
              return _context2.abrupt("return", setOptions(options.data.data));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onInput.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    initValue();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((react_select_async__WEBPACK_IMPORTED_MODULE_6___default()), {
    name: "colors",
    className: "select",
    classNamePrefix: "select",
    placeholder: placeholder,
    onChange: handleOnChange,
    value: option,
    loadOptions: onInput,
    styles: _Base__WEBPACK_IMPORTED_MODULE_7__/* .colourStyles */ .B
  });
});

var setObjectOptions = function setObjectOptions(inputValue) {
  var options = [];
  inputValue.map(function (data) {
    options.push({
      value: data.wikiDataId,
      label: data.name,
      obj: data
    });
  });
  return options;
};

var ObjectSelect = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(function (_ref3) {
  var field = _ref3.field,
      placeholder = _ref3.placeholder,
      fetchOptions = _ref3.fetchOptions,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, _excluded3);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      currentOption = _useState4[0],
      setCurrentOption = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      option = _useState6[0],
      setOption = _useState6[1];

  function handleOnChange(option) {
    setOption(option);
    console.log(option);
    field.set(option.obj);
  }

  function initValue() {
    return _initValue2.apply(this, arguments);
  }

  function _initValue2() {
    _initValue2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!field._value) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", setOption({
                value: field._value.wikiDataId,
                label: field._value.name
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _initValue2.apply(this, arguments);
  }

  function onInput(_x2) {
    return _onInput2.apply(this, arguments);
  }

  function _onInput2() {
    _onInput2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(inputValue) {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetchOptions(inputValue, rest.forOptions);

            case 2:
              options = _context4.sent;
              return _context4.abrupt("return", setObjectOptions(options.data.data));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onInput2.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    initValue();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((react_select_async__WEBPACK_IMPORTED_MODULE_6___default()), {
    name: "colors",
    className: "select",
    classNamePrefix: "select",
    placeholder: placeholder,
    onChange: handleOnChange,
    value: option,
    loadOptions: onInput,
    styles: _Base__WEBPACK_IMPORTED_MODULE_7__/* .colourStyles */ .B
  });
});

/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ colourStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9713);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var colourStyles = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      backgroundColor: 'white',
      borderRadius: '10px',
      borderColor: 'transparent',
      height: '50px'
    });
  },
  menu: function menu(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      overflow: 'auto'
    });
  },
  indicatorSeparator: function indicatorSeparator(styles) {
    return {
      display: 'none'
    };
  },
  option: function option(styles, _ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    return _objectSpread({}, styles);
  }
};

/***/ })

};
;
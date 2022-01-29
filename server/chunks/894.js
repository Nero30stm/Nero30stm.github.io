"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 3894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PersonalInformation_career)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(8926);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(3038);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/header/WindowHeader.tsx + 1 modules
var WindowHeader = __webpack_require__(7715);
// EXTERNAL MODULE: ./src/ui/Form/Inputs.tsx
var Inputs = __webpack_require__(5603);
// EXTERNAL MODULE: ./stores/AppStore.ts + 9 modules
var AppStore = __webpack_require__(3402);
// EXTERNAL MODULE: ./src/ui/Buttons.tsx
var Buttons = __webpack_require__(4141);
// EXTERNAL MODULE: ./stores/common/ModalModel.tsx
var ModalModel = __webpack_require__(1261);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(6479);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./src/requests/_axios.ts + 2 modules
var _axios = __webpack_require__(88);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/ui/Form/CompaniesSelect.tsx




var _excluded = ["placeholder", "object"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function fetchCompanyOptions(_x) {
  return _fetchCompanyOptions.apply(this, arguments);
}

function _fetchCompanyOptions() {
  _fetchCompanyOptions = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(inputValue) {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios/* default.get */.Z.get('/user/dict/organization', {
              params: {
                query: inputValue
              }
            }).then(function (response) {
              return response.data;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchCompanyOptions.apply(this, arguments);
}

var CompaniesSelect = function CompaniesSelect(_ref) {
  var placeholder = _ref.placeholder,
      object = _ref.object,
      rest = objectWithoutProperties_default()(_ref, _excluded);

  var _useState = (0,external_react_.useState)([]),
      _useState2 = slicedToArray_default()(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0,external_react_.useState)('Р'),
      _useState4 = slicedToArray_default()(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var handleOnChange = function handleOnChange(value) {
    setCurrent(value);
  };

  function handleOnSelect(v) {
    object.hydrateCompany(v); //object.company = v

    ModalModel/* modalModel.closeModal */.l.closeModal();
  }

  (0,external_react_.useEffect)(function () {
    fetchCompanyOptions(current).then(function (res) {
      return setOptions(res);
    }); //console.log(options)
  }, [current]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "popup-content-container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "popup-header",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Inputs/* TextInput */.oi, _objectSpread({
        onSetChange: handleOnChange,
        placeholder: placeholder
      }, rest)), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "icon-button close",
        type: "button",
        onClick: function onClick() {
          return ModalModel/* modalModel.closeModal */.l.closeModal();
        }
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "popup-content-list",
      children: options && options.map(function (option) {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "popup-content-list-item",
          onClick: function onClick() {
            return handleOnSelect(option);
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [" ", option.name]
          })
        });
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/initializerDefineProperty.js
var initializerDefineProperty = __webpack_require__(1165);
var initializerDefineProperty_default = /*#__PURE__*/__webpack_require__.n(initializerDefineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4575);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3913);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1506);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2205);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8585);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9754);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(3124);
var applyDecoratedDescriptor_default = /*#__PURE__*/__webpack_require__.n(applyDecoratedDescriptor);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/initializerWarningHelper.js
var initializerWarningHelper = __webpack_require__(7268);
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
// EXTERNAL MODULE: ./stores/form/FormModel.ts + 1 modules
var FormModel = __webpack_require__(9373);
// EXTERNAL MODULE: ./stores/form/FieldModel.ts + 1 modules
var FieldModel = __webpack_require__(5353);
// EXTERNAL MODULE: ./src/utils/ValidationRules.ts + 1 modules
var ValidationRules = __webpack_require__(6136);
// EXTERNAL MODULE: ./src/requests/user/fetchUserProfile.ts
var fetchUserProfile = __webpack_require__(5495);
;// CONCATENATED MODULE: ./stores/accaunt/profile/CareerFormModel.tsx












var _dec, _class, _descriptor;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var CareerFormModel = (_dec = external_mobx_.observable.ref, (_class = /*#__PURE__*/function (_FormModel) {
  inherits_default()(CareerFormModel, _FormModel);

  var _super = _createSuper(CareerFormModel);

  //@observable.ref serverActionLogin: ServerActionModel
  function CareerFormModel() {
    var _this;

    classCallCheck_default()(this, CareerFormModel);

    _this = _super.call(this);

    initializerDefineProperty_default()(assertThisInitialized_default()(_this), "company", _descriptor, assertThisInitialized_default()(_this));

    (0,external_mobx_.makeObservable)(assertThisInitialized_default()(_this));
    _this.fields = {
      dateFrom: new FieldModel/* default */.Z('', [ValidationRules/* default.required */.Z.required]),
      dateTo: new FieldModel/* default */.Z('', [ValidationRules/* default.required */.Z.required])
    };
    _this.company = {};
    _this.onChangeReaction = (0,external_mobx_.reaction)(function () {
      return _this.company;
    }, function () {
      console.log(_this.company);
    });
    return _this;
  }

  createClass_default()(CareerFormModel, [{
    key: "companyName",
    get: function get() {
      return this.company.name;
    }
  }, {
    key: "hydrate",
    value: function hydrate(data) {
      this.fields.dateFrom.init(data.dateFrom);
      this.fields.dateTo.init(data.dateTo);
      this.company = data.company;
    }
  }, {
    key: "hydrateCompany",
    value: function hydrateCompany(company) {
      this.company = company;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.company = {};
      this.fields.dateFrom.value = '';
      this.fields.dateFrom._value = '';
      this.fields.dateTo.value = '';
      this.fields.dateTo._value = '';
    }
  }, {
    key: "fetchProfile",
    value: function () {
      var _fetchProfile = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                //this.serverActionSave.pending();
                if (false) {} // console.log(response)

                /*if (response.success) {
                    this.hydrate(response);
                }
                  if (this.serverActionSave.isFailureResponse(response)) {
                    return;
                }*/


                return _context.abrupt("return", true);

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      function fetchProfile() {
        return _fetchProfile.apply(this, arguments);
      }

      return fetchProfile;
    }()
  }, {
    key: "setCareer",
    value: function () {
      var _setCareer = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        var response;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                response = {}; //this.serverActionSave.pending();

                _context2.next = 4;
                return (0,fetchUserProfile/* setUserCareer */.SL)(sessionStorage.getItem('auth_token'), (0,fetchUserProfile/* extractFetchUserSetCareerParams */.gK)(this));

              case 4:
                _context2.next = 6;
                return (0,fetchUserProfile/* fetchUserProfile */.YI)(sessionStorage.getItem('auth_token'));

              case 6:
                return _context2.abrupt("return", true);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", false);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function setCareer() {
        return _setCareer.apply(this, arguments);
      }

      return setCareer;
    }()
  }]);

  return CareerFormModel;
}(FormModel/* default */.Z), (_descriptor = applyDecoratedDescriptor_default()(_class.prototype, "company", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(_class.prototype, "companyName", [external_mobx_.computed], Object.getOwnPropertyDescriptor(_class.prototype, "companyName"), _class.prototype), applyDecoratedDescriptor_default()(_class.prototype, "hydrate", [external_mobx_.action], Object.getOwnPropertyDescriptor(_class.prototype, "hydrate"), _class.prototype), applyDecoratedDescriptor_default()(_class.prototype, "hydrateCompany", [external_mobx_.action], Object.getOwnPropertyDescriptor(_class.prototype, "hydrateCompany"), _class.prototype), applyDecoratedDescriptor_default()(_class.prototype, "fetchProfile", [external_mobx_.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchProfile"), _class.prototype)), _class));

var career = new CareerFormModel();
;// CONCATENATED MODULE: ./pages/user-dashboard/PersonalInformation/career.tsx















var CareerInformation = (0,external_mobx_react_.observer)(function () {
  var profile = AppStore/* storeInstance.mainInf */.I.mainInf;
  var modal = ModalModel/* modalModel */.l;

  var _useState = (0,external_react_.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isFormOpened = _useState2[0],
      setFormOpened = _useState2[1];

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(event) {
      var res;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setFormOpened(false);
              _context.next = 4;
              return career.setCareer();

            case 4:
              res = _context.sent;

              if (res === true) {
                career.reset();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "added-information-window",
      children: [/*#__PURE__*/jsx_runtime_.jsx(WindowHeader/* WindowHeader */.i, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "blue",
          children: "\u043A\u0430\u0440\u044C\u0435\u0440\u0430"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "notification-main",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "vertical-10gap-container",
          children: [profile.careerInf && profile.careerInf.map(function (career) {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "secondary-button spaced",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: career.company.name
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "attention",
                onClick: function onClick() {
                  return profile.deleteCareer(career.id);
                },
                children: " \u0443\u0434\u0430\u043B\u0438\u0442\u044C"
              })]
            });
          }), isFormOpened && /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            className: "career-form",
            onSubmit: handleSubmit,
            id: "newCareer",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Buttons/* ButtonForSelection */.BD, {
              text: career.company.name || /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: ["\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "arrow-right"
                })]
              }),
              onClick: function onClick() {
                modal.openModal( /*#__PURE__*/jsx_runtime_.jsx(CompaniesSelect, {
                  object: career,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"
                }));
              }
            }), /*#__PURE__*/jsx_runtime_.jsx(Inputs/* DateInput */.Wr, {
              field: career.fields.dateFrom,
              placeholder: '--.--.----',
              func: function func() {// modal.openModal(<Calendar field={career.fields.dateFrom}/>);
              }
            }), /*#__PURE__*/jsx_runtime_.jsx(Inputs/* DateInput */.Wr, {
              field: career.fields.dateTo,
              placeholder: '--.--.----',
              func: function func() {// modal.openModal(<Calendar field={career.fields.dateFrom}/>);
              }
            })]
          }), !isFormOpened && /*#__PURE__*/jsx_runtime_.jsx(Buttons/* ThirdButton */.FX, {
            type: "submit",
            form: "newCareer",
            onClick: function onClick(e) {
              !isFormOpened ? setFormOpened(true) : handleSubmit(e);
            },
            text: profile.careerInf.length === 0 && !isFormOpened ? "Добавить" : "Добавить еще"
          }), isFormOpened && /*#__PURE__*/jsx_runtime_.jsx(Buttons/* GradientButton */.OQ, {
            type: "submit",
            form: "newCareer",
            disabled: false,
            onClick: function onClick(e) {
              !isFormOpened && handleSubmit(e);
            },
            text: "Сохранить"
          })]
        })
      })]
    })
  });
});
/* harmony default export */ const PersonalInformation_career = (CareerInformation);

/***/ })

};
;
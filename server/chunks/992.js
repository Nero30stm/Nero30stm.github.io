"use strict";
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 1992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PersonalInformation_interests)
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
// EXTERNAL MODULE: ./stores/AppStore.ts + 9 modules
var AppStore = __webpack_require__(3402);
// EXTERNAL MODULE: ./stores/common/ModalModel.tsx
var ModalModel = __webpack_require__(1261);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9713);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js
var applyDecoratedDescriptor = __webpack_require__(3124);
var applyDecoratedDescriptor_default = /*#__PURE__*/__webpack_require__.n(applyDecoratedDescriptor);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/initializerWarningHelper.js
var initializerWarningHelper = __webpack_require__(7268);
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
// EXTERNAL MODULE: ./stores/form/FormModel.ts + 1 modules
var FormModel = __webpack_require__(9373);
// EXTERNAL MODULE: ./src/requests/user/fetchUserProfile.ts
var fetchUserProfile = __webpack_require__(5495);
;// CONCATENATED MODULE: ./stores/accaunt/profile/InterestsFormModel.tsx












var _dec, _class, _descriptor;



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var InterestsFormModel = (_dec = external_mobx_.observable.ref, (_class = /*#__PURE__*/function (_FormModel) {
  inherits_default()(InterestsFormModel, _FormModel);

  var _super = _createSuper(InterestsFormModel);

  //@observable.ref serverActionLogin: ServerActionModel
  function InterestsFormModel() {
    var _this;

    classCallCheck_default()(this, InterestsFormModel);

    _this = _super.call(this);

    initializerDefineProperty_default()(assertThisInitialized_default()(_this), "interest", _descriptor, assertThisInitialized_default()(_this));

    (0,external_mobx_.makeObservable)(assertThisInitialized_default()(_this));
    _this.interest = {};
    _this.onChangeReaction = (0,external_mobx_.reaction)(function () {
      return _this.interest;
    }, function () {
      console.log(_this.interest);
    });
    return _this;
  }

  createClass_default()(InterestsFormModel, [{
    key: "interestName",
    get: function get() {
      return this.interest.name;
    }
  }, {
    key: "hydrate",
    value: function hydrate(data) {
      this.interest = data;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.interest = {};
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
    key: "setInterests",
    value: function () {
      var _setInterests = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        var response;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                response = {}; //this.serverActionSave.pending();

                _context2.next = 4;
                return (0,fetchUserProfile/* setUserInterests */.BV)(sessionStorage.getItem('auth_token'), (0,fetchUserProfile/* extractFetchUserSetInterestsParams */.he)(this));

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

      function setInterests() {
        return _setInterests.apply(this, arguments);
      }

      return setInterests;
    }()
  }]);

  return InterestsFormModel;
}(FormModel/* default */.Z), (_descriptor = applyDecoratedDescriptor_default()(_class.prototype, "interest", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), applyDecoratedDescriptor_default()(_class.prototype, "interestName", [external_mobx_.computed], Object.getOwnPropertyDescriptor(_class.prototype, "interestName"), _class.prototype), applyDecoratedDescriptor_default()(_class.prototype, "hydrate", [external_mobx_.action], Object.getOwnPropertyDescriptor(_class.prototype, "hydrate"), _class.prototype), applyDecoratedDescriptor_default()(_class.prototype, "fetchProfile", [external_mobx_.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchProfile"), _class.prototype)), _class));

var interests = new InterestsFormModel();
// EXTERNAL MODULE: ./components/header/WindowHeader.tsx + 1 modules
var WindowHeader = __webpack_require__(7715);
// EXTERNAL MODULE: ./src/ui/Buttons.tsx
var Buttons = __webpack_require__(4141);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(2062);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(6479);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./src/ui/Form/Inputs.tsx
var Inputs = __webpack_require__(5603);
// EXTERNAL MODULE: ./src/requests/_axios.ts + 2 modules
var _axios = __webpack_require__(88);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/ui/Form/InterestsSelect.tsx




var _excluded = ["placeholder", "object"];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function fetchInterestsOptions(_x) {
  return _fetchInterestsOptions.apply(this, arguments);
}

function _fetchInterestsOptions() {
  _fetchInterestsOptions = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(inputValue) {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios/* default.get */.Z.get('/user/interest', {
              params: {
                name: inputValue
              }
            }).then(function (response) {
              console.log(response);
              return response.data.interests;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchInterestsOptions.apply(this, arguments);
}

var InterestsSelect = function InterestsSelect(_ref) {
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
    object.hydrate(v); //object.company = v

    ModalModel/* modalModel.closeModal */.l.closeModal();
  }

  (0,external_react_.useEffect)(function () {
    fetchInterestsOptions(current).then(function (res) {
      if (res.length > 0) setOptions(res);else {
        setOptions([{
          id: 1,
          name: current
        }]); //options.push({id: 1, name: current})
      }
    });
    console.log(options);
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
;// CONCATENATED MODULE: ./pages/user-dashboard/PersonalInformation/interests.tsx














var InterestsInformation = (0,external_mobx_react_.observer)(function () {
  var profile = AppStore/* storeInstance.mainInf */.I.mainInf;
  var modal = ModalModel/* modalModel */.l;

  var _useState = (0,external_react_.useState)(true),
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
              event.preventDefault(); //setFormOpened(false)

              _context.next = 3;
              return interests.setInterests();

            case 3:
              res = _context.sent;

              if (res === true) {
                interests.reset();
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

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "added-information-window",
      children: [/*#__PURE__*/jsx_runtime_.jsx(WindowHeader/* WindowHeader */.i, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "blue",
          children: "\u041D\u0430\u0432\u044B\u043A\u0438"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "notification-main",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "vertical-10gap-container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "chips-list",
            children: profile.interestsInf && profile.interestsInf.map(function (interest) {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "chip-deleting",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: interest.name
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "close",
                  onClick: function onClick() {
                    return profile.deleteInterest(interest.id);
                  }
                })]
              });
            })
          }), isFormOpened && /*#__PURE__*/jsx_runtime_.jsx("form", {
            className: "career-form",
            onSubmit: handleSubmit,
            id: "newCareer",
            children: /*#__PURE__*/jsx_runtime_.jsx(Buttons/* ButtonForSelection */.BD, {
              text: interests.interest.name || /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: ["\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "arrow-right"
                })]
              }),
              onClick: function onClick() {
                modal.openModal( /*#__PURE__*/jsx_runtime_.jsx(InterestsSelect, {
                  object: interests,
                  placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"
                }));
              }
            })
          }), !isFormOpened && /*#__PURE__*/jsx_runtime_.jsx(Buttons/* ThirdButton */.FX, {
            type: "submit",
            form: "newCareer",
            onClick: function onClick(e) {//!isFormOpened ? (setFormOpened(true)) : handleSubmit(e)
            },
            text: profile.interestsInf.length === 0 && !isFormOpened ? "Добавить" : "Добавить еще"
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
/* harmony default export */ const PersonalInformation_interests = (InterestsInformation);

/***/ })

};
;
"use strict";
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 4109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonalInformation_PersonalInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2764);
/* harmony import */ var _stores_common_MainStatePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9042);
/* harmony import */ var _PersonalInformation_career__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3894);
/* harmony import */ var _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3402);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PersonalInformation_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3054);
/* harmony import */ var _PersonalInformation_interests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1992);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var AdditionInformationList = (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(function () {
  function returnDate(value) {
    var date = new Date(value);
    return date.toISOString().substring(0, 4);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
    className: "person-information-list",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
      className: "items-list",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        className: "inf-block-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "bordered-item iconed",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "spaced",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              className: "edit",
              onClick: function onClick() {
                return _stores_common_MainStatePage__WEBPACK_IMPORTED_MODULE_2__/* .mainStatePage.setAdditionComponent */ .V.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PersonalInformation_PersonalInformation__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
              }
            })]
          }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.mainInf.isFull */ .I.mainInf.mainInf.isFull && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "inf-block-container",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.mainInf.firstname */ .I.mainInf.mainInf.firstname
            })
          })]
        }), !_stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.mainInf.isFull */ .I.mainInf.mainInf.isFull && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "text",
            children: "+20"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "bordered-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "spaced",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: "\u041D\u0430\u0432\u044B\u043A\u0438"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              className: "edit",
              onClick: function onClick() {
                return _stores_common_MainStatePage__WEBPACK_IMPORTED_MODULE_2__/* .mainStatePage.setAdditionComponent */ .V.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PersonalInformation_skills__WEBPACK_IMPORTED_MODULE_6__["default"], {}));
              }
            })]
          }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.skillsInf */ .I.mainInf.skillsInf && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
            className: "mini-chips-list added-inf-block-content",
            children: _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.skillsInf.map */ .I.mainInf.skillsInf.map(function (skill) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                className: "chip",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  children: skill.name
                })
              });
            })
          })]
        }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.skillsInf.length */ .I.mainInf.skillsInf.length == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "text",
            children: "+20"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "bordered-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "spaced",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u044B"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              className: "edit",
              onClick: function onClick() {
                return _stores_common_MainStatePage__WEBPACK_IMPORTED_MODULE_2__/* .mainStatePage.setAdditionComponent */ .V.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PersonalInformation_interests__WEBPACK_IMPORTED_MODULE_7__["default"], {}));
              }
            })]
          }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.interestsInf */ .I.mainInf.interestsInf && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
            className: "mini-chips-list added-inf-block-content",
            children: _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.interestsInf.map */ .I.mainInf.interestsInf.map(function (interest) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                className: "chip",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  children: interest.name
                })
              });
            })
          })]
        }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.interestsInf.length */ .I.mainInf.interestsInf.length == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "text",
            children: "+20"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "bordered-item iconed",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "spaced",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "edit"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "text",
            children: "+20"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        className: "inf-block-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "bordered-item iconed",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "spaced",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text",
              children: "\u041A\u0430\u0440\u044C\u0435\u0440\u0430"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              className: "edit",
              onClick: function onClick() {
                return _stores_common_MainStatePage__WEBPACK_IMPORTED_MODULE_2__/* .mainStatePage.setAdditionComponent */ .V.setAdditionComponent( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_PersonalInformation_career__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
              }
            })]
          }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.careerInf */ .I.mainInf.careerInf && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
            className: "companies-list",
            children: _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.careerInf.map */ .I.mainInf.careerInf.map(function (career) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                className: "career-list-item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  children: career.company.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "date-block",
                  children: returnDate(career.dateFrom) + '-' + returnDate(career.dateTo)
                })]
              });
            })
          })]
        }), _stores_AppStore__WEBPACK_IMPORTED_MODULE_4__/* .storeInstance.mainInf.careerInf.length */ .I.mainInf.careerInf.length == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "counter",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "text",
            children: "+20"
          })
        })]
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdditionInformationList);

/***/ })

};
;
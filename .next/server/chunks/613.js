"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 877:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEqualNode = isEqualNode;
exports["default"] = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    var nonce = newTag.getAttribute('nonce'); // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
    // be stripped if there is no content security policy response header that includes a nonce.

    if (nonce && !oldTag.getAttribute('nonce')) {
      var cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute('nonce', '');
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }

  return oldTag.isEqualNode(newTag);
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j === null || j === void 0 ? void 0 : j.previousElementSibling) || null) {
    var ref;

    if ((j === null || j === void 0 ? void 0 : (ref = j.tagName) === null || ref === void 0 ? void 0 : ref.toLowerCase()) === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (isEqualNode(oldTag, newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    var ref;
    return (ref = t.parentNode) === null || ref === void 0 ? void 0 : ref.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts']) {
            if (document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
              return;
            } else {
              h.props.href = h.props['data-href'];
              h.props['data-href'] = undefined;
            }
          }

          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ 2189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(5318);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(3038));

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(6689));

var _headManagerContext = __webpack_require__(2796);

var _headManager = __webpack_require__(877);

var _requestIdleCallback = __webpack_require__(6286);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;

  (0, _react).useEffect(function () {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src: src,
        onLoad: onLoad,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports["default"] = _default;

/***/ }),

/***/ 8613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault2 = __webpack_require__(5318);

var _slicedToArray2 = _interopRequireDefault2(__webpack_require__(3038));

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(9713));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(4575));

var _createClass2 = _interopRequireDefault2(__webpack_require__(3913));

var _inherits2 = _interopRequireDefault2(__webpack_require__(2205));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(8585));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(9754));

var _objectWithoutProperties2 = _interopRequireDefault2(__webpack_require__(6479));

var _toConsumableArray2 = _interopRequireDefault2(__webpack_require__(319));

var _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function get() {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function get() {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function get() {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(6689));

var _constants = __webpack_require__(6724);

var _utils = __webpack_require__(9232);

var _getPageFiles = __webpack_require__(4140);

var _utils1 = __webpack_require__(6368);

var _htmlescape = __webpack_require__(9716);

var _script = _interopRequireDefault(__webpack_require__(2189));

var _isError = _interopRequireDefault(__webpack_require__(676));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  var sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  var pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles: sharedFiles,
    pageFiles: pageFiles,
    allFiles: (0, _toConsumableArray2["default"])(new Set([].concat((0, _toConsumableArray2["default"])(sharedFiles), (0, _toConsumableArray2["default"])(pageFiles))))
  };
}

function _getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  return buildManifest.polyfillFiles.filter(function (polyfill) {
    return polyfill.endsWith('.js') && !polyfill.endsWith('.module.js');
  }).map(function (polyfill) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: polyfill,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin,
      noModule: true,
      src: "".concat(assetPrefix, "/_next/").concat(polyfill).concat(devOnlyCacheBusterQueryString)
    });
  });
}

function _getPreNextScripts(context, props) {
  var scriptLoader = context.scriptLoader,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  return (scriptLoader.beforeInteractive || []).map(function (file, index) {
    var strategy = file.strategy,
        scriptProps = (0, _objectWithoutProperties2["default"])(file, _excluded);
    return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || crossOrigin
    }));
  });
}

function _getDynamicChunks(context, props, files) {
  var dynamicImports = context.dynamicImports,
      assetPrefix = context.assetPrefix,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  return dynamicImports.map(function (file) {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react["default"].createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function _getScripts(context, props, files) {
  var ref;
  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  var normalScripts = files.allFiles.filter(function (file) {
    return file.endsWith('.js');
  });
  var lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(function (file) {
    return file.endsWith('.js');
  });
  return [].concat((0, _toConsumableArray2["default"])(normalScripts), (0, _toConsumableArray2["default"])(lowPriorityScripts)).map(function (file) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

var Document = /*#__PURE__*/function (_react$Component) {
  (0, _inherits2["default"])(Document, _react$Component);

  var _super = _createSuper(Document);

  function Document() {
    (0, _classCallCheck2["default"])(this, Document);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Document, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value:
    /**
    * `getInitialProps` hook returns the context object with the addition of `renderPage`.
    * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
    */
    function getInitialProps(ctx) {
      return ctx.defaultGetInitialProps(ctx);
    }
  }]);
  return Document;
}(_react.Component);

exports["default"] = Document;

function Html(props) {
  var _useContext = (0, _react).useContext(_utils.HtmlContext),
      inAmpMode = _useContext.inAmpMode,
      docComponentsRendered = _useContext.docComponentsRendered,
      locale = _useContext.locale;

  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react["default"].createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? 0 : undefined
  }));
}

function AmpStyles(_ref) {
  var styles = _ref.styles;
  if (!styles) return null; // try to parse styles from fragment for backwards compat

  var curStyles = Array.isArray(styles) ? styles : [];

  if ( // @ts-ignore Property 'props' does not exist on type ReactElement
  styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
  Array.isArray(styles.props.children)) {
    var hasStyles = function hasStyles(el) {
      var ref, ref1;
      return el === null || el === void 0 ? void 0 : (ref = el.props) === null || ref === void 0 ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) === null || ref1 === void 0 ? void 0 : ref1.__html;
    }; // @ts-ignore Property 'props' does not exist on type ReactElement


    styles.props.children.forEach(function (child) {
      if (Array.isArray(child)) {
        child.forEach(function (el) {
          return hasStyles(el) && curStyles.push(el);
        });
      } else if (hasStyles(child)) {
        curStyles.push(child);
      }
    });
  }
  /* Add custom styles before AMP styles to prevent accidental overrides */


  return /*#__PURE__*/_react["default"].createElement("style", {
    "amp-custom": "",
    dangerouslySetInnerHTML: {
      __html: curStyles.map(function (style) {
        return style.props.dangerouslySetInnerHTML.__html;
      }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
    }
  });
}

var Head = /*#__PURE__*/function (_react$Component2) {
  (0, _inherits2["default"])(Head, _react$Component2);

  var _super2 = _createSuper(Head);

  function Head() {
    (0, _classCallCheck2["default"])(this, Head);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Head, [{
    key: "getCssLinks",
    value: function getCssLinks(files) {
      var _this = this;

      var _this$context = this.context,
          assetPrefix = _this$context.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context.devOnlyCacheBusterQueryString,
          dynamicImports = _this$context.dynamicImports,
          crossOrigin = _this$context.crossOrigin,
          optimizeCss = _this$context.optimizeCss,
          optimizeFonts = _this$context.optimizeFonts;
      var cssFiles = files.allFiles.filter(function (f) {
        return f.endsWith('.css');
      });
      var sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
      // webpack runtime (`mini-css-extract-plugin`).

      var unmangedFiles = new Set([]);
      var dynamicCssFiles = Array.from(new Set(dynamicImports.filter(function (file) {
        return file.endsWith('.css');
      })));

      if (dynamicCssFiles.length) {
        var existing = new Set(cssFiles);
        dynamicCssFiles = dynamicCssFiles.filter(function (f) {
          return !(existing.has(f) || sharedFiles.has(f));
        });
        unmangedFiles = new Set(dynamicCssFiles);
        cssFiles.push.apply(cssFiles, (0, _toConsumableArray2["default"])(dynamicCssFiles));
      }

      var cssLinkElements = [];
      cssFiles.forEach(function (file) {
        var isSharedFile = sharedFiles.has(file);

        if (!optimizeCss) {
          cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
            key: "".concat(file, "-preload"),
            nonce: _this.props.nonce,
            rel: "preload",
            href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
            as: "style",
            crossOrigin: _this.props.crossOrigin || crossOrigin
          }));
        }

        var isUnmanagedFile = unmangedFiles.has(file);
        cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          crossOrigin: _this.props.crossOrigin || crossOrigin,
          "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
          "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
        }));
      });

      if ( true && optimizeFonts) {
        cssLinkElements = this.makeStylesheetInert(cssLinkElements);
      }

      return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this2 = this;

      var _this$context2 = this.context,
          dynamicImports = _this$context2.dynamicImports,
          assetPrefix = _this$context2.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context2.devOnlyCacheBusterQueryString,
          crossOrigin = _this$context2.crossOrigin;
      return dynamicImports.map(function (file) {
        if (!file.endsWith('.js')) {
          return null;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          key: file,
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          nonce: _this2.props.nonce,
          crossOrigin: _this2.props.crossOrigin || crossOrigin
        });
      }) // Filter out nulled scripts
      .filter(Boolean);
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks(files) {
      var _this3 = this;

      var _this$context3 = this.context,
          assetPrefix = _this$context3.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context3.devOnlyCacheBusterQueryString,
          scriptLoader = _this$context3.scriptLoader,
          crossOrigin = _this$context3.crossOrigin;
      var preloadFiles = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat((0, _toConsumableArray2["default"])((scriptLoader.beforeInteractive || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file.src,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: file.src,
          as: "script",
          crossOrigin: _this3.props.crossOrigin || crossOrigin
        });
      })), (0, _toConsumableArray2["default"])(preloadFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          crossOrigin: _this3.props.crossOrigin || crossOrigin
        });
      })));
    }
  }, {
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "handleDocumentScriptLoaderItems",
    value: function handleDocumentScriptLoaderItems(children) {
      var scriptLoader = this.context.scriptLoader;
      var scriptLoaderItems = [];
      var filteredChildren = [];

      _react["default"].Children.forEach(children, function (child) {
        if (child.type === _script["default"]) {
          if (child.props.strategy === 'beforeInteractive') {
            scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
            return;
          } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
            scriptLoaderItems.push(child.props);
            return;
          }
        }

        filteredChildren.push(child);
      });

      this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
      return filteredChildren;
    }
  }, {
    key: "makeStylesheetInert",
    value: function makeStylesheetInert(node) {
      var _this4 = this;

      return _react["default"].Children.map(node, function (c) {
        var ref12, ref6;

        if ((c === null || c === void 0 ? void 0 : c.type) === 'link' && (c === null || c === void 0 ? void 0 : (ref12 = c.props) === null || ref12 === void 0 ? void 0 : ref12.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(function (_ref2) {
          var url = _ref2.url;
          var ref, ref10;
          return c === null || c === void 0 ? void 0 : (ref = c.props) === null || ref === void 0 ? void 0 : (ref10 = ref.href) === null || ref10 === void 0 ? void 0 : ref10.startsWith(url);
        })) {
          var newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
            'data-href': c.props.href,
            href: undefined
          });

          return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
        } else if (c === null || c === void 0 ? void 0 : (ref6 = c.props) === null || ref6 === void 0 ? void 0 : ref6.children) {
          var _newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
            children: _this4.makeStylesheetInert(c.props.children)
          });

          return /*#__PURE__*/_react["default"].cloneElement(c, _newProps);
        }

        return c;
      }).filter(Boolean);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$context4 = this.context,
          styles = _this$context4.styles,
          ampPath = _this$context4.ampPath,
          inAmpMode = _this$context4.inAmpMode,
          hybridAmp = _this$context4.hybridAmp,
          canonicalBase = _this$context4.canonicalBase,
          __NEXT_DATA__ = _this$context4.__NEXT_DATA__,
          dangerousAsPath = _this$context4.dangerousAsPath,
          headTags = _this$context4.headTags,
          unstable_runtimeJS = _this$context4.unstable_runtimeJS,
          unstable_JsPreload = _this$context4.unstable_JsPreload,
          disableOptimizedLoading = _this$context4.disableOptimizedLoading,
          useMaybeDeferContent = _this$context4.useMaybeDeferContent,
          optimizeCss = _this$context4.optimizeCss,
          optimizeFonts = _this$context4.optimizeFonts,
          optimizeImages = _this$context4.optimizeImages,
          concurrentFeatures = _this$context4.concurrentFeatures;
      var disableRuntimeJS = unstable_runtimeJS === false;
      var disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
      this.context.docComponentsRendered.Head = true;
      var head = this.context.head;
      var cssPreloads = [];
      var otherHeadElements = [];

      if (head) {
        head.forEach(function (c) {
          if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
            cssPreloads.push(c);
          } else {
            c && otherHeadElements.push(c);
          }
        });
        head = cssPreloads.concat(otherHeadElements);
      }

      var children = _react["default"].Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


      if (false) {}

      if ( true && optimizeFonts && !inAmpMode) {
        children = this.makeStylesheetInert(children);
      }

      children = this.handleDocumentScriptLoaderItems(children);
      var hasAmphtmlRel = false;
      var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

      head = _react["default"].Children.map(head || [], function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;

        if (inAmpMode) {
          var badProp = '';

          if (type === 'meta' && props.name === 'viewport') {
            badProp = 'name="viewport"';
          } else if (type === 'link' && props.rel === 'canonical') {
            hasCanonicalRel = true;
          } else if (type === 'script') {
            // only block if
            // 1. it has a src and isn't pointing to ampproject's CDN
            // 2. it is using dangerouslySetInnerHTML without a type or
            // a type of text/javascript
            if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
              badProp = '<script';
              Object.keys(props).forEach(function (prop) {
                badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
              });
              badProp += '/>';
            }
          }

          if (badProp) {
            console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, " in ").concat(__NEXT_DATA__.page, ". https://nextjs.org/docs/messages/conflicting-amp-tag"));
            return null;
          }
        } else {
          // non-amp mode
          if (type === 'link' && props.rel === 'amphtml') {
            hasAmphtmlRel = true;
          }
        }

        return child;
      });
      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode); // Must use nested component to allow use of a custom hook

      var DeferrableHead = function DeferrableHead() {
        var _react$default;

        var getDynamicHeadContent = function getDynamicHeadContent() {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, head, /*#__PURE__*/_react["default"].createElement("meta", {
            name: "next-head-count",
            content: _react["default"].Children.count(head || []).toString()
          }));
        };

        var getDynamicScriptPreloads = function getDynamicScriptPreloads() {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && !disableJsPreload && _this5.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && _this5.getPreloadMainLinks(files));
        };

        var getDynamicScriptContent = function getDynamicScriptContent() {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableOptimizedLoading && !disableRuntimeJS && _this5.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && _this5.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && _this5.getScripts(files));
        };

        var _useMaybeDeferContent = useMaybeDeferContent('HEAD', function () {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, getDynamicHeadContent(), getDynamicScriptPreloads(), getDynamicScriptContent());
        }),
            _useMaybeDeferContent2 = (0, _slicedToArray2["default"])(_useMaybeDeferContent, 1),
            isDeferred = _useMaybeDeferContent2[0];

        var _nonce, _nonce1;

        return /*#__PURE__*/_react["default"].createElement("head", Object.assign({}, _this5.props), !concurrentFeatures && _this5.context.isDevelopment && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
          "data-next-hide-fouc": true,
          "data-ampdevmode": inAmpMode ? 'true' : undefined,
          dangerouslySetInnerHTML: {
            __html: "body{display:none}"
          }
        }), /*#__PURE__*/_react["default"].createElement("noscript", {
          "data-next-hide-fouc": true,
          "data-ampdevmode": inAmpMode ? 'true' : undefined
        }, /*#__PURE__*/_react["default"].createElement("style", {
          dangerouslySetInnerHTML: {
            __html: "body{display:block}"
          }
        }))), children, optimizeFonts && /*#__PURE__*/_react["default"].createElement("meta", {
          name: "next-font-preconnect"
        }), !isDeferred && getDynamicHeadContent(), inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("meta", {
          name: "viewport",
          content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), !hasCanonicalRel && /*#__PURE__*/_react["default"].createElement("link", {
          rel: "canonical",
          href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
        }), /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          as: "script",
          href: "https://cdn.ampproject.org/v0.js"
        }), /*#__PURE__*/_react["default"].createElement(AmpStyles, {
          styles: styles
        }), /*#__PURE__*/_react["default"].createElement("style", {
          "amp-boilerplate": "",
          dangerouslySetInnerHTML: {
            __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
          }
        }), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("style", {
          "amp-boilerplate": "",
          dangerouslySetInnerHTML: {
            __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
          }
        })), /*#__PURE__*/_react["default"].createElement("script", {
          async: true,
          src: "https://cdn.ampproject.org/v0.js"
        })), !inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react["default"].createElement("link", {
          rel: "amphtml",
          href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
        }), !optimizeCss && _this5.getCssLinks(files), !optimizeCss && /*#__PURE__*/_react["default"].createElement("noscript", {
          "data-n-css": (_nonce = _this5.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
        }), optimizeImages && /*#__PURE__*/_react["default"].createElement("meta", {
          name: "next-image-preload"
        }), !isDeferred && getDynamicScriptPreloads(), !disableOptimizedLoading && !disableRuntimeJS && _this5.getPolyfillScripts(), !isDeferred && getDynamicScriptContent(), optimizeCss && _this5.getCssLinks(files), optimizeCss && /*#__PURE__*/_react["default"].createElement("noscript", {
          "data-n-css": (_nonce1 = _this5.props.nonce) !== null && _nonce1 !== void 0 ? _nonce1 : ''
        }), _this5.context.isDevelopment && // this element is used to mount development styles so the
        // ordering matches production
        // (by default, style-loader injects at the bottom of <head />)

        /*#__PURE__*/
        _react["default"].createElement("noscript", {
          id: "__next_css__DO_NOT_USE__"
        }), styles || null), /*#__PURE__*/(_react$default = _react["default"]).createElement.apply(_react$default, [_react["default"].Fragment, {}].concat((0, _toConsumableArray2["default"])(headTags || []))));
      };

      return /*#__PURE__*/_react["default"].createElement(DeferrableHead, null);
    }
  }]);
  return Head;
}(_react.Component);

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  var _useContext2 = (0, _react).useContext(_utils.HtmlContext),
      docComponentsRendered = _useContext2.docComponentsRendered;

  docComponentsRendered.Main = true; // @ts-ignore

  return /*#__PURE__*/_react["default"].createElement("next-js-internal-body-render-target", null);
}

var NextScript = /*#__PURE__*/function (_react$Component3) {
  (0, _inherits2["default"])(NextScript, _react$Component3);

  var _super3 = _createSuper(NextScript);

  function NextScript() {
    (0, _classCallCheck2["default"])(this, NextScript);
    return _super3.apply(this, arguments);
  }

  (0, _createClass2["default"])(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$context5 = this.context,
          assetPrefix = _this$context5.assetPrefix,
          inAmpMode = _this$context5.inAmpMode,
          buildManifest = _this$context5.buildManifest,
          unstable_runtimeJS = _this$context5.unstable_runtimeJS,
          docComponentsRendered = _this$context5.docComponentsRendered,
          devOnlyCacheBusterQueryString = _this$context5.devOnlyCacheBusterQueryString,
          disableOptimizedLoading = _this$context5.disableOptimizedLoading,
          useMaybeDeferContent = _this$context5.useMaybeDeferContent,
          crossOrigin = _this$context5.crossOrigin;
      var disableRuntimeJS = unstable_runtimeJS === false;
      docComponentsRendered.NextScript = true; // Must nest component to use custom hook

      var DeferrableNextScript = function DeferrableNextScript() {
        var _useMaybeDeferContent3 = useMaybeDeferContent('NEXT_SCRIPT', function () {
          if (inAmpMode) {
            var ampDevFiles = [].concat((0, _toConsumableArray2["default"])(buildManifest.devFiles), (0, _toConsumableArray2["default"])(buildManifest.polyfillFiles), (0, _toConsumableArray2["default"])(buildManifest.ampDevFiles));
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
              id: "__NEXT_DATA__",
              type: "application/json",
              nonce: _this6.props.nonce,
              crossOrigin: _this6.props.crossOrigin || crossOrigin,
              dangerouslySetInnerHTML: {
                __html: NextScript.getInlineScriptSource(_this6.context)
              },
              "data-ampdevmode": true
            }), ampDevFiles.map(function (file) {
              return /*#__PURE__*/_react["default"].createElement("script", {
                key: file,
                src: "".concat(assetPrefix, "/_next/").concat(file).concat(devOnlyCacheBusterQueryString),
                nonce: _this6.props.nonce,
                crossOrigin: _this6.props.crossOrigin || crossOrigin,
                "data-ampdevmode": true
              });
            }));
          }

          if (false) {}

          var files = getDocumentFiles(_this6.context.buildManifest, _this6.context.__NEXT_DATA__.page, inAmpMode);
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(function (file) {
            return /*#__PURE__*/_react["default"].createElement("script", {
              key: file,
              src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
              nonce: _this6.props.nonce,
              crossOrigin: _this6.props.crossOrigin || crossOrigin
            });
          }) : null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
            id: "__NEXT_DATA__",
            type: "application/json",
            nonce: _this6.props.nonce,
            crossOrigin: _this6.props.crossOrigin || crossOrigin,
            dangerouslySetInnerHTML: {
              __html: NextScript.getInlineScriptSource(_this6.context)
            }
          }), disableOptimizedLoading && !disableRuntimeJS && _this6.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && _this6.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && _this6.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && _this6.getScripts(files));
        }),
            _useMaybeDeferContent4 = (0, _slicedToArray2["default"])(_useMaybeDeferContent3, 2),
            content = _useMaybeDeferContent4[1];

        if (inAmpMode && true) {
          return null;
        }

        return content;
      };

      return /*#__PURE__*/_react["default"].createElement(DeferrableNextScript, null);
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(context) {
      var __NEXT_DATA__ = context.__NEXT_DATA__;

      try {
        var data = JSON.stringify(__NEXT_DATA__);

        if (false) { var prettyBytes, bytes; }

        return (0, _htmlescape).htmlEscapeJsonString(data);
      } catch (err) {
        if ((0, _isError)["default"](err) && err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://nextjs.org/docs/messages/circular-structure"));
        }

        throw err;
      }
    }
  }]);
  return NextScript;
}(_react.Component);

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

/***/ })

};
;
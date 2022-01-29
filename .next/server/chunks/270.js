exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 3124:
/***/ ((module) => {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1165:
/***/ ((module) => {

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

module.exports = _initializerDefineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7268:
/***/ ((module) => {

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}

module.exports = _initializerWarningHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;
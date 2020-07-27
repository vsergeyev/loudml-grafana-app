define(["@grafana/data","@grafana/runtime","app/core/app_events","app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./datasource/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./datasource/config_ctrl.ts":
/*!***********************************!*\
  !*** ./datasource/config_ctrl.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var runtime_1 = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");

var data_1 = __webpack_require__(/*! @grafana/data */ "@grafana/data");

var app_events_1 = tslib_1.__importDefault(__webpack_require__(/*! grafana/app/core/app_events */ "grafana/app/core/app_events"));

var config_html_1 = tslib_1.__importDefault(__webpack_require__(/*! ./partials/config.html */ "./datasource/partials/config.html"));

var types_1 = __webpack_require__(/*! ./types */ "./datasource/types.ts");

var LoudMLConfigCtrl = /*#__PURE__*/function () {
  function LoudMLConfigCtrl($scope) {
    _classCallCheck(this, LoudMLConfigCtrl);

    this.$scope = $scope;
    this.ACCESS_OPTIONS = [{
      key: 'proxy',
      value: 'Server (Default)'
    }, {
      key: 'direct',
      value: 'Browser'
    }];
    this.showAccessHelp = false;
    this.modelsList = [];
    this.jobsList = [];
    this.scheduledList = [];
    this.buckets = [];

    if (this.$scope.current === undefined) {
      this.$scope.current = {
        url: '',
        access: 'proxy'
      };
    }
  }

  _createClass(LoudMLConfigCtrl, [{
    key: "toggleAccessHelp",
    value: function toggleAccessHelp() {
      this.showAccessHelp = !this.showAccessHelp;
    }
    /**
     * Displays list of ML models and jobs on server
     */

  }, {
    key: "refreshModels",
    value: function refreshModels() {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$scope.ctrl.modelsList = [{
                  is_loading: true,
                  settings: {
                    name: 'Loading...'
                  },
                  state: {
                    trained: ''
                  }
                }];
                _context.next = 3;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 3:
                ds = _context.sent;

                try {
                  ds.query({
                    url: '/models',
                    params: {}
                  }).then(function (response) {
                    _this.$scope.ctrl.modelsList = response;

                    _this.$scope.$apply();
                  })["catch"](function (err) {
                    console.error(err.statusText);
                    console.error("Long time ago, in a galaxy far far away...");
                    console.log("https://www.google.com/search?q=parallel+worlds+michio+kaku");
                    app_events_1["default"].emit(data_1.AppEvents.alertError, [err.statusText]);
                  });
                  ds.query({
                    url: '/jobs',
                    params: {}
                  }).then(function (response) {
                    _this.$scope.ctrl.jobsList = response;

                    _this.$scope.$apply();
                  })["catch"](function (err) {
                    app_events_1["default"].emit(data_1.AppEvents.alertError, [err.statusText]);
                  });
                  ds.query({
                    url: '/scheduled_jobs',
                    params: {}
                  }).then(function (response) {
                    _this.$scope.ctrl.scheduledList = response;

                    _this.$scope.$apply();
                  })["catch"](function (err) {
                    app_events_1["default"].emit(data_1.AppEvents.alertError, [err.statusText]);
                  });
                  ds.query({
                    url: '/buckets',
                    params: {}
                  }).then(function (response) {
                    _this.$scope.ctrl.buckets = response;
                  })["catch"](function (err) {
                    app_events_1["default"].emit(data_1.AppEvents.alertError, [err.statusText]);
                  });
                } catch (err) {
                  console.error(err);
                  app_events_1["default"].emit(data_1.AppEvents.alertError, [err]);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
    /**
     * Displays new ML model dialog
     */

  }, {
    key: "addModel",
    value: function addModel() {
      this.model = Object.assign(Object.assign(Object.assign({}, types_1.DEFAULT_MODEL), {
        features: [Object.assign({}, types_1.DEFAULT_FEATURE)]
      }));
      app_events_1["default"].emit('show-modal', {
        src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
        modalClass: 'confirm-modal',
        model: this
      });
    }
  }, {
    key: "editModel",
    value: function editModel(name) {
      var model = this.$scope.ctrl.modelsList.find(function (el) {
        return el.settings.name === name;
      });
      this.model = model.settings; // appEvents.emit(CoreEvents.showModal, {

      app_events_1["default"].emit('show-modal', {
        src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
        modalClass: 'confirm-modal',
        model: this
      });
    }
    /**
     * Posts dialog data to LoudML server
     */

  }, {
    key: "addModelPost",
    value: function addModelPost() {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.model);

                if (this.model.features[0]["default"] != "previous") {
                  this.model.features[0]["default"] = 0;
                }

                delete this.model.features[0].$$hashKey;
                _context2.next = 5;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 5:
                ds = _context2.sent;
                ds.loudml.getModel(this.model.name).then(function (result) {
                  // Model already exists
                  // Let remove it and recreate
                  ds.loudml.deleteModel(_this2.model.name).then(function (response) {
                    ds.loudml.createModel(_this2.model).then(function (result) {
                      ds.loudml.createModelHook(_this2.model.name, ds.loudml.createHook(types_1.ANOMALY_HOOK, _this2.model.default_bucket)).then(function (result) {
                        app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Model has been updated on Loud ML server']);

                        _this2.refreshModels();
                      })["catch"](function (err) {
                        window.console.log('createModelHook error', err);
                        app_events_1["default"].emit(data_1.AppEvents.alertError, [err.message]);
                        return;
                      });
                    })["catch"](function (err) {
                      window.console.log('createModel error', err);
                      app_events_1["default"].emit(data_1.AppEvents.alertError, ['Model create error', err.data]);
                      return;
                    });
                  });
                })["catch"](function (err) {
                  // New model
                  ds.loudml.createModel(_this2.model).then(function (result) {
                    ds.loudml.createModelHook(_this2.model.name, ds.loudml.createHook(types_1.ANOMALY_HOOK, _this2.model.default_bucket)).then(function (result) {
                      app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Model has been created on Loud ML server']);

                      _this2.refreshModels();
                    })["catch"](function (err) {
                      window.console.log('createModelHook error', err);
                      app_events_1["default"].emit(data_1.AppEvents.alertError, [err.message]);
                      return;
                    });
                  })["catch"](function (err) {
                    window.console.log('createModel error', err);
                    app_events_1["default"].emit(data_1.AppEvents.alertError, ['Model create error', err.data]);
                    return;
                  });
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * Displays new job dialog
     */

  }, {
    key: "addJob",
    value: function addJob() {
      this.job = Object.assign({}, types_1.DEFAULT_JOB);
      app_events_1["default"].emit('show-modal', {
        src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
        modalClass: 'confirm-modal',
        model: this
      });
    }
    /**
     * Displays edit job dialog
     */

  }, {
    key: "editJob",
    value: function editJob(name) {
      this.job = this.$scope.ctrl.scheduledList.find(function (el) {
        return el.name === name;
      });

      if (this.job.params) {
        this.job.params = JSON.stringify(this.job.params);
      }

      if (this.job.json) {
        this.job.json = JSON.stringify(this.job.json);
      }

      app_events_1["default"].emit('show-modal', {
        src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
        modalClass: 'confirm-modal',
        model: this
      });
    }
    /**
     * Posts job data to LoudML server
     */

  }, {
    key: "scheduleJob",
    value: function scheduleJob() {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 2:
                ds = _context3.sent;
                ds.loudml.scheduleJob(this.job).then(function (response) {
                  window.console.log(response);
                  app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Job has been scheduled on Loud ML server']);

                  _this3.refreshModels();
                })["catch"](function (error) {
                  console.log(error);
                  app_events_1["default"].emit(data_1.AppEvents.alertError, ['Job schedule error', error.statusText]);
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
    /**
     * Deletes  job on LoudML server
     */

  }, {
    key: "deleteJob",
    value: function deleteJob(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this4 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 2:
                ds = _context4.sent;
                ds.loudml.deleteJob(name).then(function (response) {
                  window.console.log(response);
                  app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Scheduled job has been deleted on Loud ML server']);

                  _this4.refreshModels();
                })["catch"](function (error) {
                  app_events_1["default"].emit(data_1.AppEvents.alertError, ['Job delete error', error.statusText]);
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "startModel",
    value: function startModel(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this5 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 2:
                ds = _context5.sent;

                try {
                  ds.loudml.startModel(name).then(function (response) {
                    window.console.log(response);
                    app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Model has been started on Loud ML server']);

                    _this5.refreshModels();
                  });
                } catch (err) {
                  console.error(err);
                  app_events_1["default"].emit(data_1.AppEvents.alertError, ['Model start error', err]);
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "stopModel",
    value: function stopModel(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this6 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 2:
                ds = _context6.sent;

                try {
                  ds.loudml.stopModel(name).then(function (response) {
                    window.console.log(response);
                    app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Model has been stoped on Loud ML server']);

                    _this6.refreshModels();
                  });
                } catch (err) {
                  console.error(err);
                  app_events_1["default"].emit(data_1.AppEvents.alertError, ['Model stop error', err]);
                }

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "forecastModel",
    value: function forecastModel(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                window.console.log('FORECAST MODEL');

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
    }
  }, {
    key: "trainModel",
    value: function trainModel(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                window.console.log('TRAIN MODEL');

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));
    }
  }, {
    key: "deleteModel",
    value: function deleteModel(name) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _this7 = this;

        var ds;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return runtime_1.getDataSourceSrv().loadDatasource(this.current.name);

              case 2:
                ds = _context9.sent;

                try {
                  ds.loudml.deleteModel(name).then(function (response) {
                    window.console.log(response);
                    app_events_1["default"].emit(data_1.AppEvents.alertSuccess, ['Model has been deleted on Loud ML server']);

                    _this7.refreshModels();
                  });
                } catch (err) {
                  console.error(err);
                  app_events_1["default"].emit(data_1.AppEvents.alertError, ['Model delete error', err]);
                }

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }]);

  return LoudMLConfigCtrl;
}();

exports.LoudMLConfigCtrl = LoudMLConfigCtrl;
LoudMLConfigCtrl.template = config_html_1["default"];

/***/ }),

/***/ "./datasource/datasource.ts":
/*!**********************************!*\
  !*** ./datasource/datasource.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var loudml_api_1 = tslib_1.__importDefault(__webpack_require__(/*! ./loudml_api */ "./datasource/loudml_api.ts"));

var LoudMLDatasource = /*#__PURE__*/function () {
  LoudMLDatasource.$inject = ["instanceSettings", "backendSrv"];

  /** @ngInject */
  function LoudMLDatasource(instanceSettings, backendSrv) {
    _classCallCheck(this, LoudMLDatasource);

    this.bucket = (instanceSettings.jsonData || {}).bucket;
    this.loudml = new loudml_api_1["default"](instanceSettings, backendSrv);
  }

  _createClass(LoudMLDatasource, [{
    key: "query",
    value: function query(options) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, params, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = options.url, params = options.params;
                _context.next = 3;
                return this.loudml.get(url, params);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "testDatasource",
    value: function testDatasource() {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loudml.get('/');

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.version ? {
                  status: 'success',
                  message: 'Data source is working, Loud ML server version ' + response.version
                } : {
                  status: 'error',
                  message: response.error
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "metricFindQuery",
    value: function metricFindQuery(options) {
      return [];
    }
  }]);

  return LoudMLDatasource;
}();

exports["default"] = LoudMLDatasource;
exports.LoudMLDatasource = LoudMLDatasource;

/***/ }),

/***/ "./datasource/loudml_api.ts":
/*!**********************************!*\
  !*** ./datasource/loudml_api.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Loud ML API class
// Connects to Loud ML server
//
// https://loudml.io
// http://github.com/regel/loudml

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var types_1 = __webpack_require__(/*! ./types */ "./datasource/types.ts");

var LoudMLAPI = /*#__PURE__*/function () {
  function LoudMLAPI(instanceSettings, backendSrv) {
    var _this = this;

    _classCallCheck(this, LoudMLAPI);

    this.backendSrv = backendSrv;

    this.createAndGetBucket = function (database, retentionPolicy, measurement, source) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$splitAddr, host, port, bucketName, settings, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$splitAddr = this.splitAddr('http://localhost:8086', 8086), host = _this$splitAddr.host, port = _this$splitAddr.port; //source.url, 8086)

                bucketName = [database, retentionPolicy, measurement].join('_');
                settings = {
                  type: source.type,
                  name: bucketName,
                  retention_policy: retentionPolicy,
                  database: database,
                  measurement: measurement,
                  addr: "".concat(host, ":").concat(port),
                  username: source.username,
                  password: source.password
                };
                _context.next = 5;
                return this._query('POST', '/buckets', settings);

              case 5:
                _context.next = 7;
                return this._query('GET', "/buckets/".concat(bucketName));

              case 7:
                response = _context.sent;
                return _context.abrupt("return", response[0]);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    this.splitAddr = function (url, port) {
      // extract host and port from url address
      var re = /(https?:)?(\/\/)?([\w\.]*):?(\d*)?/;
      var res = re.exec(url);
      return {
        host: res[3],
        port: res[4] || port
      };
    };

    this.createModel = function (model) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this._query('POST', '/models', model));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    };

    this.getModel = function (name) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this._query('GET', "/models/".concat(name)));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    };

    this.deleteModel = function (name) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this._query('DELETE', "/models/".concat(name)));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    };

    this.createHook = function (hook, bucket) {
      var h = Object.assign({}, hook);
      h.config.bucket = bucket;
      return h;
    };

    this.createModelHook = function (name, hook) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this._query('POST', "/models/".concat(name, "/hooks"), hook));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    };

    this.trainAndStartModel = function (name, from, to, output_bucket) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var params;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = Object.assign(Object.assign({}, types_1.DEFAULT_START_OPTIONS), {
                  from: from,
                  to: to,
                  output_bucket: output_bucket
                });
                return _context6.abrupt("return", this._query('POST', "/models/".concat(name, "/_train"), params, true));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    };

    this.forecastModel = function (name, data, output_bucket) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _data$timeRange$raw, from, to, params;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _data$timeRange$raw = data.timeRange.raw, from = _data$timeRange$raw.from, to = _data$timeRange$raw.to;
                params = {
                  from: from,
                  to: to,
                  save_output_data: true,
                  output_bucket: output_bucket,
                  bg: true
                };
                return _context7.abrupt("return", this._query('POST', "/models/".concat(name, "/_forecast"), params, true));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    };

    this.trainModel = function (name, data, output_bucket) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this$convertTimeRang, lower, upper;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$convertTimeRang = this.convertTimeRange(data.timeRange), lower = _this$convertTimeRang.lower, upper = _this$convertTimeRang.upper;
                _context8.next = 3;
                return this.trainAndStartModel(name, lower, upper, output_bucket);

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    };

    this.startModel = function (name, output_bucket) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var params;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = Object.assign(Object.assign({}, types_1.DEFAULT_START_OPTIONS), {
                  output_bucket: output_bucket
                });
                return _context9.abrupt("return", this._query('POST', "/models/".concat(name, "/_start"), params, true));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    };

    this.stopModel = function (name) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var params;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = {};
                return _context10.abrupt("return", this._query('POST', "/models/".concat(name, "/_stop"), params, true));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    };

    this.scheduleJob = function (job) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var params;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                params = Object.assign({}, job);
                window.console.log(params);
                params.every.count = parseInt(params.every.count, 10) || 1;

                if (!params.params) {
                  delete params.params;
                } else {
                  params.params = JSON.parse(params.params);
                }

                if (!params.json) {
                  delete params.json;
                } else {
                  params.json = JSON.parse(params.json);
                }

                if (!params.every.at) {
                  delete params.every.at;
                }

                delete params['$$hashKey'];
                delete params.ok;
                delete params.error;
                delete params.status_code;
                delete params.last_run_timestamp;
                window.console.log(params);
                return _context11.abrupt("return", this._query('POST', "/scheduled_jobs", params));

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    };

    this.deleteJob = function (name) {
      return tslib_1.__awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this._query('DELETE', "/scheduled_jobs/".concat(name)));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    };

    this.convertTimeRange = function (timeRange) {
      var _timeRange$raw = timeRange.raw,
          from = _timeRange$raw.from,
          to = _timeRange$raw.to;
      return {
        lower: from,
        upper: to
      };
    };

    this.url = instanceSettings.url;
  }

  _createClass(LoudMLAPI, [{
    key: "get",
    value: function get(url, params) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this._query('GET', url, params));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "_query",
    value: function _query(method, url, data, data_as_params) {
      return tslib_1.__awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var options, response, responseData;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                method = method.toUpperCase();
                options = {
                  method: method,
                  url: this.url + url
                };

                if (method === 'GET' || method === 'DELETE' || data_as_params) {
                  options.params = data;
                } else {
                  options.data = data;
                }

                _context14.next = 5;
                return this.backendSrv.datasourceRequest(options);

              case 5:
                response = _context14.sent;
                responseData = response.data;
                return _context14.abrupt("return", responseData);

              case 8:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }]);

  return LoudMLAPI;
}();

exports["default"] = LoudMLAPI;

/***/ }),

/***/ "./datasource/module.ts":
/*!******************************!*\
  !*** ./datasource/module.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var datasource_1 = __webpack_require__(/*! ./datasource */ "./datasource/datasource.ts");

exports.Datasource = datasource_1.LoudMLDatasource;

var query_ctrl_1 = __webpack_require__(/*! ./query_ctrl */ "./datasource/query_ctrl.ts");

exports.QueryCtrl = query_ctrl_1.LoudMLQueryCtrl;

var config_ctrl_1 = __webpack_require__(/*! ./config_ctrl */ "./datasource/config_ctrl.ts");

exports.ConfigCtrl = config_ctrl_1.LoudMLConfigCtrl;

/***/ }),

/***/ "./datasource/partials/config.html":
/*!*****************************************!*\
  !*** ./datasource/partials/config.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gf-form-group\">\n  <h3 class=\"page-heading\">HTTP</h3>\n  <div class=\"gf-form-group\">\n    <div class=\"gf-form-inline\">\n      <div class=\"gf-form max-width-30\">\n        <span class=\"gf-form-label width-10\">Loud ML Server URL</span>\n        <input\n          class=\"gf-form-input\" type=\"text\"\n          placeholder=\"http://localhost:8077\"\n          ng-model='ctrl.current.url'\n          min-length=\"0\"\n          ng-pattern=\"/^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$/\"\n          required\n          ng-blur=\"\"\n        />\n        <info-popover mode=\"right-absolute\">\n          <p>Specify a complete Loud ML Server HTTP URL (for example http://your_loudml_server:8077)</p>\n          <span ng-show=\"ctrl.current.access === 'direct'\">\n            Your access method is <em>Browser</em>, this means the URL\n            needs to be accessible from the browser.\n          </span>\n          <span ng-show=\"ctrl.current.access === 'proxy'\">\n            Your access method is <em>Server</em>, this means the URL\n            needs to be accessible from the grafana backend/server.\n          </span>\n        </info-popover>\n      </div>\n    </div>\n\n    <div class=\"gf-form-inline\">\n      <div class=\"gf-form max-width-30\">\n        <span class=\"gf-form-label width-10\">Access</span>\n        <div class=\"gf-form-select-wrapper max-width-24\">\n          <select\n            class=\"gf-form-input\"\n            ng-model=\"ctrl.current.access\"\n            ng-options=\"f.key as f.value for f in ctrl.ACCESS_OPTIONS\"\n          />\n        </div>\n      </div>\n      <div class=\"gf-form\">\n        <label class=\"gf-form-label query-keyword pointer\" ng-click=\"ctrl.toggleAccessHelp()\">\n          Help&nbsp;\n          <i class=\"fa fa-caret-down\" ng-show=\"ctrl.showAccessHelp\"></i>\n          <i class=\"fa fa-caret-right\" ng-hide=\"ctrl.showAccessHelp\">&nbsp;</i>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.showAccessHelp\">\n      <p>\n        Access mode controls how requests to the data source will be handled.\n        <strong><i>Server</i></strong> access mode should be the preferred way if nothing else stated.\n      </p>\n      <div class=\"alert-title\">Server access mode (Default):</div>\n      <p>\n        All requests will be made from the browser to Grafana backend/server which in turn will\n        forward the requests to the data source and by that circumvent possible\n        Cross-Origin Resource Sharing (CORS) requirements.\n        The URL needs to be accessible from the grafana backend/server if you select this access mode.\n      </p>\n      <div class=\"alert-title\">Browser access mode:</div>\n      <p>\n        All requests will be made from the browser directly to the data source and may be subject to\n        Cross-Origin Resource Sharing (CORS) requirements. The URL needs to be accessible from the browser\n        if you select this access mode.\n      </p>\n    </div>\n\n    <div class=\"gf-form-inline\" ng-if=\"ctrl.current.access=='proxy'\">\n      <div class=\"gf-form\">\n        <span class=\"gf-form-label width-10\">Whitelisted Cookies</span>\n        <bootstrap-tagsinput\n          ng-model=\"ctrl.current.jsonData.keepCookies\"\n          width-class=\"width-20\" tagclass=\"label label-tag\"\n          placeholder=\"Add Name\"\n        />\n        <info-popover mode=\"right-absolute\">\n          Grafana Proxy deletes forwarded cookies by default. Specify cookies by name\n          that should be forwarded to the data source.\n        </info-popover>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"gf-form-group\">\n  <h3 class=\"page-heading\">Manage Machine Learning Tasks</h3>\n  <div class=\"gf-form-group\">\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.refreshModels()\">\n      <i class=\"fa fa-refresh fa-fw\"></i>\n      Refresh models and jobs from Loud ML server\n    </button>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.addModel()\">\n      <i class=\"fa fa-pencil fa-fw\"></i>\n      Add Model\n    </button>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.addJob()\">\n      <i class=\"fa fa-pencil fa-fw\"></i>\n      Schedule a Job\n    </button>\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Models</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"model in ctrl.modelsList\">\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.editModel(model.settings.name)\">\n                    <i class=\"fa fa-pencil fa-fw\"></i>\n                    {{model.settings.name}}\n                  </a>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <span ng-show=\"model.settings.run\">Running.</span>\n                  <span ng-show=\"model.state.trained\">Trained.</span>\n                  <span ng-hide=\"model.state.trained\">Not trained.</span>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.startModel(model.settings.name)\" ng-hide=\"model.settings.run\">\n                    <i class=\"fa fa-play\"></i> Play\n                  </a>\n\n                  <a href=\"#\" ng-click=\"ctrl.stopModel(model.settings.name)\" ng-show=\"model.settings.run\">\n                    <i class=\"fa fa-pause\"></i> Stop\n                  </a>\n                </td>\n                <!-- <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.trainModel(model.settings.name)\">\n                    <i class=\"fa fa-clock-o\"></i> Train\n                  </a>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.forecastModel(model.settings.name)\">\n                    <i class=\"fa fa-clock-o\"></i> Forecast\n                  </a>\n                </td> -->\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.deleteModel(model.settings.name)\">\n                    <i class=\"fa fa-trash-o fa-fw\"></i> Delete\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.modelsList.length===0\">\n      No models to show. Click refresh to update data from Loud ML server\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Scheduled Jobs</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"job in ctrl.scheduledList\">\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.editJob(job.name)\">\n                    <i class=\"fa fa-pencil fa-fw\"></i>\n                    {{job.name}}\n                  </a>\n                </td>\n                <td>\n                  {{job.method}}\n                </td>\n                <td>\n                  {{job.relative_url}}\n                </td>\n                <td>\n                  Every {{job.every.count}}\n                  {{job.every.unit}}\n\n                  <span ng-show=\"job.every.at\">\n                    at {{job.every.at}}\n                  </span>\n                </td>\n                <td>\n                  <span ng-show=\"job.last_run_timestamp\">\n                    OK: {{job.ok}}; Result: {{job.status_code}}\n                    <span ng-show=\"job.error\">\n                      <br />\n                      Error: {{job.error}}\n                    </span>\n                  </span>\n                </td>\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.deleteJob(job.name)\">\n                    <i class=\"fa fa-trash-o fa-fw\"></i> Delete\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.scheduledList.length===0\">\n      No scheduled jobs to show. Click refresh to update data from Loud ML server\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Jobs</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"job in ctrl.jobsList\">\n                <td>\n                  {{job.model}}\n                </td>\n                <td>\n                  {{job.start_date}}\n                </td>\n                <td>\n                  {{job.type}}\n                </td>\n                <td>\n                  {{job.state}}\n                  <br />\n                  {{job.error}}\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.jobsList.length===0\">\n      No jobs to show. Click refresh to update data from Loud ML server\n  </div>\n\n</div>\n";

/***/ }),

/***/ "./datasource/partials/query_ctrl.html":
/*!*********************************************!*\
  !*** ./datasource/partials/query_ctrl.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),

/***/ "./datasource/query_ctrl.ts":
/*!**********************************!*\
  !*** ./datasource/query_ctrl.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var query_ctrl_html_1 = tslib_1.__importDefault(__webpack_require__(/*! ./partials/query_ctrl.html */ "./datasource/partials/query_ctrl.html"));

var sdk_1 = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");

var LoudMLQueryCtrl = /*#__PURE__*/function (_sdk_1$QueryCtrl) {
  LoudMLQueryCtrl.$inject = ["$scope", "$injector"];

  _inherits(LoudMLQueryCtrl, _sdk_1$QueryCtrl);

  /** @ngInject */
  function LoudMLQueryCtrl($scope, $injector) {
    _classCallCheck(this, LoudMLQueryCtrl);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoudMLQueryCtrl).call(this, $scope, $injector));
  }

  return LoudMLQueryCtrl;
}(sdk_1.QueryCtrl);

exports.LoudMLQueryCtrl = LoudMLQueryCtrl;
LoudMLQueryCtrl.template = query_ctrl_html_1["default"];

/***/ }),

/***/ "./datasource/types.ts":
/*!*****************************!*\
  !*** ./datasource/types.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_LOUDML_RP = 'autogen';
exports.MODEL_TYPE_LIST = [{
  name: 'Donut',
  type: 'donut',
  "default": true
}];
exports.DEFAULT_MODEL = {
  bucket_interval: '20m',
  default_bucket: null,
  features: [],
  interval: '1m',
  max_evals: 20,
  name: '',
  offset: '10s',
  span: 10,
  type: exports.MODEL_TYPE_LIST[0].type
};
exports.DEFAULT_JOB = {
  name: '',
  method: 'get',
  relative_url: '',
  params: '',
  json: '',
  every: {
    count: 1,
    unit: '',
    at: ''
  }
};
exports.DEFAULT_FEATURE = {
  name: '',
  measurement: null,
  field: null,
  metric: 'mean',
  "default": null,
  io: 'io',
  anomaly_type: 'low_high',
  match_all: []
};
exports.DEFAULT_START_OPTIONS = {
  output_bucket: 'loudml',
  save_output_data: true,
  flag_abnormal_data: true
};
exports.MIN_INTERVAL_SECOND = 5;
exports.MIN_INTERVAL_UNIT = "".concat(exports.MIN_INTERVAL_SECOND, "s");
exports.MAX_INTERVAL_SECOND = 60;
exports.MAX_INTERVAL_UNIT = "".concat(exports.MAX_INTERVAL_SECOND, "s");
exports.MIN_SPAN = 10;
exports.MAX_SPAN = 100;
exports.DEFAULT_ANOMALY_TYPE = [{
  text: 'low',
  value: 'low'
}, {
  text: 'high',
  value: 'high'
}, {
  text: 'low/high',
  value: 'low_high'
}];
exports.ANOMALY_HOOK_NAME = 'add_annotation';
exports.ANOMALY_HOOK = {
  type: 'annotations',
  name: exports.ANOMALY_HOOK_NAME,
  config: {
    id: null,
    type: 'loudml',
    bucket: null
  }
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "grafana/app/core/app_events":
/*!**************************************!*\
  !*** external "app/core/app_events" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map
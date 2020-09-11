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
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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
/*! exports provided: LoudMLConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoudMLConfigCtrl", function() { return LoudMLConfigCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/core/app_events */ "grafana/app/core/app_events");
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_config_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/config.html */ "./datasource/partials/config.html");
/* harmony import */ var _partials_config_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_partials_config_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./datasource/types.ts");
 // @ts-nocheck






var POST_A_BUG_SAVE_PLANET = 'Be aware, it may be an alien bug. If so - save planet, post bug report at https://github.com/vsergeyev/loudml-grafana-app/issues (starship troopers will do the rest of bloody job for you)';

function sorry_its_error(err) {
  // Guys, it's really sorry
  window.console.log('Model update error.');
  window.console.log(POST_A_BUG_SAVE_PLANET);
  window.console.log(err);
  grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Model update error', err.data]);
}

var LoudMLConfigCtrl =
/** @class */
function () {
  function LoudMLConfigCtrl($scope) {
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

  LoudMLConfigCtrl.prototype.toggleAccessHelp = function () {
    this.showAccessHelp = !this.showAccessHelp;
  };
  /**
   * Displays list of ML models and jobs on server
   */


  LoudMLConfigCtrl.prototype.refreshModels = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
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
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();

            try {
              ds.query({
                url: '/models',
                params: {}
              }).then(function (response) {
                _this.$scope.ctrl.modelsList = response;

                _this.$scope.$apply();
              })["catch"](function (err) {
                console.error(err.statusText);
                console.error('Long time ago, in a galaxy far far away...');
                console.log('https://www.google.com/search?q=parallel+worlds+michio+kaku');
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err.statusText]);
              });
              ds.query({
                url: '/jobs',
                params: {}
              }).then(function (response) {
                _this.$scope.ctrl.jobsList = response;

                _this.$scope.$apply();
              })["catch"](function (err) {
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err.statusText]);
              });
              ds.query({
                url: '/scheduled_jobs',
                params: {}
              }).then(function (response) {
                _this.$scope.ctrl.scheduledList = response;

                _this.$scope.$apply();
              })["catch"](function (err) {
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err.statusText]);
              });
              ds.query({
                url: '/buckets',
                params: {}
              }).then(function (response) {
                _this.$scope.ctrl.buckets = response;
              })["catch"](function (err) {
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err.statusText]);
              });
            } catch (err) {
              console.error(err);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err]);
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Displays new ML model dialog
   */


  LoudMLConfigCtrl.prototype.addModel = function () {
    this.model = Object.assign(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _types__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MODEL"]), {
      features: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _types__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_FEATURE"])]
    }));
    grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
      modalClass: 'confirm-modal',
      model: this
    });
  };

  LoudMLConfigCtrl.prototype.editModel = function (name) {
    var model = this.$scope.ctrl.modelsList.find(function (el) {
      return el.settings.name === name;
    });
    this.model = model.settings; // appEvents.emit(CoreEvents.showModal, {

    grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_model.html',
      modalClass: 'confirm-modal',
      model: this
    });
  };
  /**
   * Posts dialog data to LoudML server
   */


  LoudMLConfigCtrl.prototype.addModelPost = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.log(this.model);

            if (this.model.features[0]["default"] !== 'previous') {
              this.model.features[0]["default"] = 0;
            }

            delete this.model.features[0].$$hashKey;
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();
            ds.loudml.getModel(this.model.name).then(function (result) {
              console.log('Model exists, updating it...');
              ds.loudml.patchModel(_this.model.name, _this.model).then(function (result) {})["catch"](function (err) {
                sorry_its_error(err);
                return;
              }); //   // Let remove it and recreate
              //   ds.loudml.deleteModel(this.model.name).then(response => {
              //     ds.loudml
              //       .createModel(this.model)
              //       .then(result => {
              //         ds.loudml
              //           .createModelHook(this.model.name, ds.loudml.createHook(ANOMALY_HOOK, this.model.default_bucket))
              //           .then(result => {
              //             appEvents.emit(AppEvents.alertSuccess, ['Model has been updated on Loud ML server']);
              //             this.refreshModels();
              //           })
              //           .catch(err => {
              //             window.console.log('createModelHook error', err);
              //             appEvents.emit(AppEvents.alertError, [err.message]);
              //             return;
              //           });
              //       })
              //       .catch(err => {
              //         window.console.log('Model create error', err);
              //         appEvents.emit(AppEvents.alertError, ['Model create error', err.data]);
              //         return;
              //       });
              //   });
            })["catch"](function (err) {
              // New model
              console.log('New model, creating it...');
              ds.loudml.createModel(_this.model).then(function (result) {
                ds.loudml.createModelHook(_this.model.name, ds.loudml.createHook(_types__WEBPACK_IMPORTED_MODULE_5__["ANOMALY_HOOK"], _this.model.default_bucket)).then(function (result) {
                  grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Model has been created on Loud ML server']);

                  _this.refreshModels();
                })["catch"](function (err) {
                  window.console.log('createModelHook error', err);
                  grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, [err.message]);
                  return;
                });
              })["catch"](function (err) {
                window.console.log('createModel error', err);
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Model create error', err.data]);
                return;
              });
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Displays new job dialog
   */


  LoudMLConfigCtrl.prototype.addJob = function () {
    this.job = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_JOB"]);
    grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
      modalClass: 'confirm-modal',
      model: this
    });
  };
  /**
   * Displays edit job dialog
   */


  LoudMLConfigCtrl.prototype.editJob = function (name) {
    this.job = this.$scope.ctrl.scheduledList.find(function (el) {
      return el.name === name;
    });

    if (this.job.params) {
      this.job.params = JSON.stringify(this.job.params);
    }

    if (this.job.json) {
      this.job.json = JSON.stringify(this.job.json);
    }

    grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit('show-modal', {
      src: '/public/plugins/loudml-grafana-app/datasource/partials/add_job.html',
      modalClass: 'confirm-modal',
      model: this
    });
  };
  /**
   * Posts job data to LoudML server
   */


  LoudMLConfigCtrl.prototype.scheduleJob = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();
            ds.loudml.scheduleJob(this.job).then(function (response) {
              window.console.log(response);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Job has been scheduled on Loud ML server']);

              _this.refreshModels();
            })["catch"](function (error) {
              console.log(error);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Job schedule error', error.statusText]);
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Deletes  job on LoudML server
   */


  LoudMLConfigCtrl.prototype.deleteJob = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();
            ds.loudml.deleteJob(name).then(function (response) {
              window.console.log(response);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Scheduled job has been deleted on Loud ML server']);

              _this.refreshModels();
            })["catch"](function (error) {
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Job delete error', error.statusText]);
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  LoudMLConfigCtrl.prototype.startModel = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();

            try {
              ds.loudml.startModel(name).then(function (response) {
                window.console.log(response);
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Model has been started on Loud ML server']);

                _this.refreshModels();
              });
            } catch (err) {
              console.error(err);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Model start error', err]);
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  LoudMLConfigCtrl.prototype.stopModel = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();

            try {
              ds.loudml.stopModel(name).then(function (response) {
                window.console.log(response);
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Model has been stoped on Loud ML server']);

                _this.refreshModels();
              });
            } catch (err) {
              console.error(err);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Model stop error', err]);
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  LoudMLConfigCtrl.prototype.forecastModel = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        window.console.log('FORECAST MODEL');
        return [2
        /*return*/
        ];
      });
    });
  };

  LoudMLConfigCtrl.prototype.trainModel = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        window.console.log('TRAIN MODEL');
        return [2
        /*return*/
        ];
      });
    });
  };

  LoudMLConfigCtrl.prototype.deleteModel = function (name) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var ds;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__["getDataSourceSrv"])().loadDatasource(this.current.name)];

          case 1:
            ds = _a.sent();

            try {
              ds.loudml.deleteModel(name).then(function (response) {
                window.console.log(response);
                grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertSuccess, ['Model has been deleted on Loud ML server']);

                _this.refreshModels();
              });
            } catch (err) {
              console.error(err);
              grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_3___default.a.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["AppEvents"].alertError, ['Model delete error', err]);
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  LoudMLConfigCtrl.template = _partials_config_html__WEBPACK_IMPORTED_MODULE_4___default.a;
  return LoudMLConfigCtrl;
}();



/***/ }),

/***/ "./datasource/datasource.ts":
/*!**********************************!*\
  !*** ./datasource/datasource.ts ***!
  \**********************************/
/*! exports provided: default, LoudMLDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoudMLDatasource", function() { return LoudMLDatasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loudml_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loudml_api */ "./datasource/loudml_api.ts");



var LoudMLDatasource =
/** @class */
function () {
  LoudMLDatasource.$inject = ["instanceSettings", "backendSrv"];

  /** @ngInject */
  function LoudMLDatasource(instanceSettings, backendSrv) {
    this.bucket = (instanceSettings.jsonData || {}).bucket;
    this.loudml = new _loudml_api__WEBPACK_IMPORTED_MODULE_1__["default"](instanceSettings, backendSrv);
  }

  LoudMLDatasource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var url, params, response;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            url = options.url, params = options.params;
            return [4
            /*yield*/
            , this.loudml.get(url, params)];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response];
        }
      });
    });
  };

  LoudMLDatasource.prototype.testDatasource = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var response;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.loudml.get('/')];

          case 1:
            response = _a.sent();
            return [2
            /*return*/
            , response.version ? {
              status: 'success',
              message: 'Data source is working, Loud ML server version ' + response.version
            } : {
              status: 'error',
              message: response.error
            }];
        }
      });
    });
  };

  LoudMLDatasource.prototype.metricFindQuery = function (options) {
    return [];
  };

  return LoudMLDatasource;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoudMLDatasource);


/***/ }),

/***/ "./datasource/loudml_api.ts":
/*!**********************************!*\
  !*** ./datasource/loudml_api.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./datasource/types.ts");
// @ts-nocheck
// Loud ML API class
// Connects to Loud ML server
//
// https://loudml.io
// http://github.com/regel/loudml



var LoudMLAPI =
/** @class */
function () {
  function LoudMLAPI(instanceSettings, backendSrv) {
    var _this = this;

    this.backendSrv = backendSrv;

    this.createAndGetBucket = function (database, retentionPolicy, measurement, source) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, host, port, bucketName, settings, response;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this.splitAddr('http://localhost:8086', 8086), host = _a.host, port = _a.port;
              bucketName = [database, retentionPolicy, measurement].join('_');
              settings = {
                type: source.type,
                name: bucketName,
                retention_policy: retentionPolicy,
                database: database,
                measurement: measurement,
                addr: host + ":" + port,
                username: source.username,
                password: source.password
              };
              return [4
              /*yield*/
              , this._query('POST', '/buckets', settings)];

            case 1:
              _b.sent();

              return [4
              /*yield*/
              , this._query('GET', "/buckets/" + bucketName)];

            case 2:
              response = _b.sent();
              return [2
              /*return*/
              , response[0]];
          }
        });
      });
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
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          // POST model JSON to /models
          return [2
          /*return*/
          , this._query('POST', '/models', model)];
        });
      });
    };

    this.patchModel = function (name, model) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          return [2
          /*return*/
          , this._query('PATCH', "/models/" + name, model)];
        });
      });
    };

    this.getModel = function (name) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          return [2
          /*return*/
          , this._query('GET', "/models/" + name)];
        });
      });
    };

    this.deleteModel = function (name) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          return [2
          /*return*/
          , this._query('DELETE', "/models/" + name)];
        });
      });
    };

    this.createHook = function (hook, bucket) {
      var h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hook);

      h.config.bucket = bucket;
      return h;
    };

    this.createModelHook = function (name, hook) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          // POST model hook to /models/${name}/hooks
          return [2
          /*return*/
          , this._query('POST', "/models/" + name + "/hooks", hook)];
        });
      });
    };

    this.trainAndStartModel = function (name, from, to, output_bucket) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var params;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _types__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_START_OPTIONS"]), {
            from: from,
            to: to,
            output_bucket: output_bucket
          });
          return [2
          /*return*/
          , this._query('POST', "/models/" + name + "/_train", params, true)];
        });
      });
    };

    this.forecastModel = function (name, data, output_bucket) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, from, to, params;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          _a = data.timeRange.raw, from = _a.from, to = _a.to;
          params = {
            from: from,
            to: to,
            save_output_data: true,
            output_bucket: output_bucket,
            bg: true
          };
          return [2
          /*return*/
          , this._query('POST', "/models/" + name + "/_forecast", params, true)];
        });
      });
    };

    this.trainModel = function (name, data, output_bucket) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _a, lower, upper;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this.convertTimeRange(data.timeRange), lower = _a.lower, upper = _a.upper;
              return [4
              /*yield*/
              , this.trainAndStartModel(name, lower, upper, output_bucket)];

            case 1:
              return [2
              /*return*/
              , _b.sent()];
          }
        });
      });
    };

    this.startModel = function (name, output_bucket) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var params;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _types__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_START_OPTIONS"]), {
            output_bucket: output_bucket
          });
          return [2
          /*return*/
          , this._query('POST', "/models/" + name + "/_start", params, true)];
        });
      });
    };

    this.stopModel = function (name) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var params;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          params = {};
          return [2
          /*return*/
          , this._query('POST', "/models/" + name + "/_stop", params, true)];
        });
      });
    };

    this.scheduleJob = function (job) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var params;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, job);
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
          return [2
          /*return*/
          , this._query('POST', "/scheduled_jobs", params)];
        });
      });
    };

    this.deleteJob = function (name) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          return [2
          /*return*/
          , this._query('DELETE', "/scheduled_jobs/" + name)];
        });
      });
    };

    this.convertTimeRange = function (timeRange) {
      var _a = timeRange.raw,
          from = _a.from,
          to = _a.to;
      return {
        lower: from,
        upper: to
      };
    };

    this.url = instanceSettings.url;
  }

  LoudMLAPI.prototype.get = function (url, params) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2
        /*return*/
        , this._query('GET', url, params)];
      });
    });
  };

  LoudMLAPI.prototype._query = function (method, url, data, data_as_params) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var options, response, responseData;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            method = method.toUpperCase();
            options = {
              method: method,
              url: this.url + url,
              headers: {}
            };

            if (method === 'GET' || method === 'DELETE' || data_as_params) {
              options.params = data;
            } else {
              options.data = data;
              options.headers['Content-Type'] = 'application/json';
            }

            return [4
            /*yield*/
            , this.backendSrv.datasourceRequest(options)];

          case 1:
            response = _a.sent();
            responseData = response.data;
            return [2
            /*return*/
            , responseData];
        }
      });
    });
  };

  return LoudMLAPI;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoudMLAPI);

/***/ }),

/***/ "./datasource/module.ts":
/*!******************************!*\
  !*** ./datasource/module.ts ***!
  \******************************/
/*! exports provided: LoudMLDatasource, Datasource, QueryCtrl, ConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./datasource/datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoudMLDatasource", function() { return _datasource__WEBPACK_IMPORTED_MODULE_0__["LoudMLDatasource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return _datasource__WEBPACK_IMPORTED_MODULE_0__["LoudMLDatasource"]; });

/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_ctrl */ "./datasource/query_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryCtrl", function() { return _query_ctrl__WEBPACK_IMPORTED_MODULE_1__["LoudMLQueryCtrl"]; });

/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config_ctrl */ "./datasource/config_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigCtrl", function() { return _config_ctrl__WEBPACK_IMPORTED_MODULE_2__["LoudMLConfigCtrl"]; });

 // import { LoudMLQueryCtrl as QueryCtrl } from './query_ctrl';
// import { LoudMLConfigCtrl as ConfigCtrl } from './config_ctrl';


 // export { LoudMLDatasource as Datasource, ConfigCtrl, QueryCtrl };



/***/ }),

/***/ "./datasource/partials/config.html":
/*!*****************************************!*\
  !*** ./datasource/partials/config.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gf-form-group\">\n  <h3 class=\"page-heading\">HTTP</h3>\n  <div class=\"gf-form-group\">\n    <div class=\"gf-form-inline\">\n      <div class=\"gf-form max-width-30\">\n        <span class=\"gf-form-label width-10\">Loud ML Server URL</span>\n        <input\n          class=\"gf-form-input\" type=\"text\"\n          placeholder=\"http://localhost:8077\"\n          ng-model='ctrl.current.url'\n          min-length=\"0\"\n          ng-pattern=\"/^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$/\"\n          required\n          ng-blur=\"\"\n        />\n        <info-popover mode=\"right-absolute\">\n          <p>Specify a complete Loud ML Server HTTP URL (for example http://your_loudml_server:8077)</p>\n          <span ng-show=\"ctrl.current.access === 'direct'\">\n            Your access method is <em>Browser</em>, this means the URL\n            needs to be accessible from the browser.\n          </span>\n          <span ng-show=\"ctrl.current.access === 'proxy'\">\n            Your access method is <em>Server</em>, this means the URL\n            needs to be accessible from the grafana backend/server.\n          </span>\n        </info-popover>\n      </div>\n    </div>\n\n    <div class=\"gf-form-inline\">\n      <div class=\"gf-form max-width-30\">\n        <span class=\"gf-form-label width-10\">Access</span>\n        <div class=\"gf-form-select-wrapper max-width-24\">\n          <select\n            class=\"gf-form-input\"\n            ng-model=\"ctrl.current.access\"\n            ng-options=\"f.key as f.value for f in ctrl.ACCESS_OPTIONS\">\n          </select>\n        </div>\n      </div>\n      <div class=\"gf-form\">\n        <label class=\"gf-form-label query-keyword pointer\" ng-click=\"ctrl.toggleAccessHelp()\">\n          Help&nbsp;\n          <i class=\"fa fa-caret-down\" ng-show=\"ctrl.showAccessHelp\"></i>\n          <i class=\"fa fa-caret-right\" ng-hide=\"ctrl.showAccessHelp\">&nbsp;</i>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.showAccessHelp\">\n      <p>\n        Access mode controls how requests to the data source will be handled.\n        <strong><i>Server</i></strong> access mode should be the preferred way if nothing else stated.\n      </p>\n      <div class=\"alert-title\">Server access mode (Default):</div>\n      <p>\n        All requests will be made from the browser to Grafana backend/server which in turn will\n        forward the requests to the data source and by that circumvent possible\n        Cross-Origin Resource Sharing (CORS) requirements.\n        The URL needs to be accessible from the grafana backend/server if you select this access mode.\n      </p>\n      <div class=\"alert-title\">Browser access mode:</div>\n      <p>\n        All requests will be made from the browser directly to the data source and may be subject to\n        Cross-Origin Resource Sharing (CORS) requirements. The URL needs to be accessible from the browser\n        if you select this access mode.\n      </p>\n    </div>\n\n    <div class=\"gf-form-inline\" ng-if=\"ctrl.current.access=='proxy'\">\n      <div class=\"gf-form\">\n        <span class=\"gf-form-label width-10\">Whitelisted Cookies</span>\n        <bootstrap-tagsinput\n          ng-model=\"ctrl.current.jsonData.keepCookies\"\n          width-class=\"width-20\" tagclass=\"label label-tag\"\n          placeholder=\"Add Name\"\n        />\n        <info-popover mode=\"right-absolute\">\n          Grafana Proxy deletes forwarded cookies by default. Specify cookies by name\n          that should be forwarded to the data source.\n        </info-popover>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"gf-form-group\">\n  <h3 class=\"page-heading\">Manage Machine Learning Tasks</h3>\n  <div class=\"gf-form-group\">\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.refreshModels()\">\n      <i class=\"fa fa-refresh fa-fw\"></i>\n      Refresh models and jobs from Loud ML server\n    </button>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.addModel()\">\n      <i class=\"fa fa-pencil fa-fw\"></i>\n      Add Model\n    </button>\n\n    <button type=\"button\" class=\"btn btn-secondary\" ng-click=\"ctrl.addJob()\">\n      <i class=\"fa fa-pencil fa-fw\"></i>\n      Schedule a Job\n    </button>\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Models</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"model in ctrl.modelsList\">\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.editModel(model.settings.name)\">\n                    <i class=\"fa fa-pencil fa-fw\"></i>\n                    {{model.settings.name}}\n                  </a>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <span ng-show=\"model.settings.run\">Running.</span>\n                  <span ng-show=\"model.state.trained\">Trained.</span>\n                  <span ng-hide=\"model.state.trained\">Not trained.</span>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.startModel(model.settings.name)\" ng-hide=\"model.settings.run\">\n                    <i class=\"fa fa-play\"></i> Play\n                  </a>\n\n                  <a href=\"#\" ng-click=\"ctrl.stopModel(model.settings.name)\" ng-show=\"model.settings.run\">\n                    <i class=\"fa fa-pause\"></i> Stop\n                  </a>\n                </td>\n                <!-- <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.trainModel(model.settings.name)\">\n                    <i class=\"fa fa-clock-o\"></i> Train\n                  </a>\n                </td>\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.forecastModel(model.settings.name)\">\n                    <i class=\"fa fa-clock-o\"></i> Forecast\n                  </a>\n                </td> -->\n                <td ng-hide=\"model.is_loading\">\n                  <a href=\"#\" ng-click=\"ctrl.deleteModel(model.settings.name)\">\n                    <i class=\"fa fa-trash-o fa-fw\"></i> Delete\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.modelsList.length===0\">\n      No models to show. Click refresh to update data from Loud ML server\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Scheduled Jobs</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"job in ctrl.scheduledList\">\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.editJob(job.name)\">\n                    <i class=\"fa fa-pencil fa-fw\"></i>\n                    {{job.name}}\n                  </a>\n                </td>\n                <td>\n                  {{job.method}}\n                </td>\n                <td>\n                  {{job.relative_url}}\n                </td>\n                <td>\n                  Every {{job.every.count}}\n                  {{job.every.unit}}\n\n                  <span ng-show=\"job.every.at\">\n                    at {{job.every.at}}\n                  </span>\n                </td>\n                <td>\n                  <span ng-show=\"job.last_run_timestamp\">\n                    OK: {{job.ok}}; Result: {{job.status_code}}\n                    <span ng-show=\"job.error\">\n                      <br />\n                      Error: {{job.error}}\n                    </span>\n                  </span>\n                </td>\n                <td>\n                  <a href=\"#\" ng-click=\"ctrl.deleteJob(job.name)\">\n                    <i class=\"fa fa-trash-o fa-fw\"></i> Delete\n                  </a>\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.scheduledList.length===0\">\n      No scheduled jobs to show. Click refresh to update data from Loud ML server\n  </div>\n\n  <div class=\"table-panel-container\">\n    <div class=\"table-panel-header-bg\">Jobs</div>\n      <div class=\"table-panel-scroll\">\n        <table class=\"table-panel-table\">\n          <tbody>\n            <tr ng-repeat=\"job in ctrl.jobsList\">\n                <td>\n                  {{job.model}}\n                </td>\n                <td>\n                  {{job.start_date}}\n                </td>\n                <td>\n                  {{job.type}}\n                </td>\n                <td>\n                  {{job.state}}\n                  <br />\n                  {{job.error}}\n                </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  <div class=\"grafana-info-box m-t-2\" ng-show=\"ctrl.jobsList.length===0\">\n      No jobs to show. Click refresh to update data from Loud ML server\n  </div>\n\n</div>\n";

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
/*! exports provided: LoudMLQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoudMLQueryCtrl", function() { return LoudMLQueryCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _partials_query_ctrl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/query_ctrl.html */ "./datasource/partials/query_ctrl.html");
/* harmony import */ var _partials_query_ctrl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_query_ctrl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__);
 // @ts-nocheck




var LoudMLQueryCtrl =
/** @class */
function (_super) {
  LoudMLQueryCtrl.$inject = ["$scope", "$injector"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoudMLQueryCtrl, _super);
  /** @ngInject */


  function LoudMLQueryCtrl($scope, $injector) {
    return _super.call(this, $scope, $injector) || this;
  }

  LoudMLQueryCtrl.template = _partials_query_ctrl_html__WEBPACK_IMPORTED_MODULE_1___default.a;
  return LoudMLQueryCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__["QueryCtrl"]);



/***/ }),

/***/ "./datasource/types.ts":
/*!*****************************!*\
  !*** ./datasource/types.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_LOUDML_RP, MODEL_TYPE_LIST, DEFAULT_MODEL, DEFAULT_JOB, DEFAULT_FEATURE, DEFAULT_START_OPTIONS, MIN_INTERVAL_SECOND, MIN_INTERVAL_UNIT, MAX_INTERVAL_SECOND, MAX_INTERVAL_UNIT, MIN_SPAN, MAX_SPAN, DEFAULT_ANOMALY_TYPE, ANOMALY_HOOK_NAME, ANOMALY_HOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOUDML_RP", function() { return DEFAULT_LOUDML_RP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODEL_TYPE_LIST", function() { return MODEL_TYPE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MODEL", function() { return DEFAULT_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_JOB", function() { return DEFAULT_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FEATURE", function() { return DEFAULT_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_START_OPTIONS", function() { return DEFAULT_START_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_INTERVAL_SECOND", function() { return MIN_INTERVAL_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_INTERVAL_UNIT", function() { return MIN_INTERVAL_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_INTERVAL_SECOND", function() { return MAX_INTERVAL_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_INTERVAL_UNIT", function() { return MAX_INTERVAL_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SPAN", function() { return MIN_SPAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SPAN", function() { return MAX_SPAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ANOMALY_TYPE", function() { return DEFAULT_ANOMALY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANOMALY_HOOK_NAME", function() { return ANOMALY_HOOK_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANOMALY_HOOK", function() { return ANOMALY_HOOK; });
var DEFAULT_LOUDML_RP = 'autogen';
var MODEL_TYPE_LIST = [{
  name: 'Donut',
  type: 'donut',
  "default": true
}];
var DEFAULT_MODEL = {
  bucket_interval: '20m',
  default_bucket: null,
  features: [],
  interval: '1m',
  max_evals: 20,
  name: '',
  offset: '10s',
  span: 10,
  type: MODEL_TYPE_LIST[0].type
};
var DEFAULT_JOB = {
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
var DEFAULT_FEATURE = {
  name: '',
  measurement: null,
  field: null,
  metric: 'mean',
  "default": null,
  io: 'io',
  anomaly_type: 'low_high',
  match_all: []
};
var DEFAULT_START_OPTIONS = {
  output_bucket: 'loudml',
  save_output_data: true,
  flag_abnormal_data: true
};
var MIN_INTERVAL_SECOND = 5;
var MIN_INTERVAL_UNIT = MIN_INTERVAL_SECOND + "s";
var MAX_INTERVAL_SECOND = 60;
var MAX_INTERVAL_UNIT = MAX_INTERVAL_SECOND + "s";
var MIN_SPAN = 10;
var MAX_SPAN = 100;
var DEFAULT_ANOMALY_TYPE = [{
  text: 'low',
  value: 'low'
}, {
  text: 'high',
  value: 'high'
}, {
  text: 'low/high',
  value: 'low_high'
}];
var ANOMALY_HOOK_NAME = 'add_annotation';
var ANOMALY_HOOK = {
  type: 'annotations',
  name: ANOMALY_HOOK_NAME,
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
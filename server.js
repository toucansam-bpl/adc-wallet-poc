/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/*! exports provided: user, password, default */
/***/ (function(module) {

module.exports = {"user":"audiocoinrpc","password":"2Qc575iBkLE9BntJoRT15ThVSzs8HdvuauKDMbSZUkCP"};

/***/ }),

/***/ "./public/img/adc-logo.png":
/*!*********************************!*\
  !*** ./public/img/adc-logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEVHcEw9sOU9sOU9sOU9sOU9sOU9sOU9sOU9sOU9sOU9sOX++flbvOltwuqj1/DB4vN/ye2R0O5JtebO6PXy9Pjm8PcEFIWxAAAACnRSTlMA7yBwWtoQtjyE5Y1DvQAAAfNJREFUSMfFVttyhSAMrFcugRBB//9XSz2KBPB4OtOZ5skRlmySTeDr6/9slrvNH26Xg+j0YZMY+sfjx0kXJsa3iKHTDZvuQXLSNyZu6A363rqmI6Hf2lAjJv1g4sGHMZ58gVEcodj+YGBDWNZgbP6fxSOzBXRxN6JB79CBzUBdlrf5CsSSg+tsixHeDCejtYI3nCQFU1Pr0y9ytJSZWjI/U+0kkqqza3EzpZtTWDFe06qIW30RzZh4gzs+LMfQRudnz3h5PKpnAAID0RXOyKRiAc+PaC7naBLjndmc/i8mgwDgpRg8T3vlLFUeNs0gsCY6npJPFr3DAgKw2VThc5fMoo91riApJHQtCAE2ILC+JNCE6DN6DgmFLGTW8vZY5ZAjbZZyLzLJpY4liThlUzMd48rrcuUrrp3HdUyVia8tqpILU/BJQc5fEPRNLSs+8gK8mPiVKyyryh59FoyhY6cp2mZdy7YUV89io8MopIqlWTZe6sNQ9aXJm7+vh6sDKjoytqptDMzkRnvDp50JS1JrLMrcnMj0MywX0iYmAQOy6PIJO+e3lw30M5IRtnxwVrNfFuOO4ox0i2a5mIoLeny6XirEM2ZqPAJk9/YOaz4b+je3pfrdtX9/h+/JVg2QkE8vEk5vUv1HDx+lxG5qkH/z8voGSTpIVXAI66wAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/server/adcApi.js":
/*!******************************!*\
  !*** ./src/server/adcApi.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_adc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-adc */ "node-adc");
/* harmony import */ var node_adc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_adc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../credentials.json */ "./credentials.json");
var _credentials_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../credentials.json */ "./credentials.json", 1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var adc = new node_adc__WEBPACK_IMPORTED_MODULE_1___default.a(_credentials_json__WEBPACK_IMPORTED_MODULE_2__.user, _credentials_json__WEBPACK_IMPORTED_MODULE_2__.password);

var apiResponder = function apiResponder(fn) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fn(req);

              case 3:
                response = _context.sent;
                res.json(response);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                next(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

app.get('/createNewAddress', apiResponder(function () {
  return adc.getNewAddress();
}));
app.get('/getInfo', apiResponder(function () {
  return adc.getInfo();
}));
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/server/middleware/renderer.js":
/*!*******************************************!*\
  !*** ./src/server/middleware/renderer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jss/lib/jss */ "react-jss/lib/jss");
/* harmony import */ var react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-jss/lib/JssProvider */ "react-jss/lib/JssProvider");
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/App */ "./src/shared/App.js");
/* harmony import */ var _shared_stores_AdcInfoStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/stores/AdcInfoStore */ "./src/shared/stores/AdcInfoStore.js");
/* harmony import */ var _shared_ui_createTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/ui/createTheme */ "./src/shared/ui/createTheme.js");
/* harmony import */ var _shared_domain_NodeApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/domain/NodeApi */ "./src/shared/domain/NodeApi.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var renderFullPage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(html, css) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var filePath = Object(path__WEBPACK_IMPORTED_MODULE_2__["resolve"])(__dirname, '..', '..', '..', 'public', 'index.html');
              Object(fs__WEBPACK_IMPORTED_MODULE_1__["readFile"])(filePath, 'utf8', function (err, page) {
                if (err) {
                  return reject(err);
                }

                resolve(page.replace('<div id="root"></div>', "<div id=\"root\">".concat(html, "</div>")).replace('<style id="jss-server-side"></style>', "<style id=\"jss-server-side\">".concat(css, "</style>")));
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function renderFullPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  // Create a sheetsRegistry instance.
  var sheetsRegistry = new react_jss_lib_jss__WEBPACK_IMPORTED_MODULE_5__["SheetsRegistry"]();
  console.log("Serving ".concat(req.url));
  var generateClassName = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createGenerateClassName"])();
  var nodeApi = new _shared_domain_NodeApi__WEBPACK_IMPORTED_MODULE_12__["default"]();
  var adcInfoStore = new _shared_stores_AdcInfoStore__WEBPACK_IMPORTED_MODULE_10__["default"](nodeApi);
  var stores = {
    adcInfoStore: adcInfoStore // Render the component to a string.

  };
  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_6___default.a, {
    registry: sheetsRegistry,
    generateClassName: generateClassName
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["MuiThemeProvider"], {
    theme: Object(_shared_ui_createTheme__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    sheetsManager: new Map()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], stores, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["StaticRouter"], {
    location: req.url,
    context: {}
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_9__["default"], null)))))); // Grab the CSS from our sheetsRegistry.

  var css = sheetsRegistry.toString();

  var runner =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var pageHtml;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return renderFullPage(html, css);

            case 3:
              pageHtml = _context2.sent;
              res.send(pageHtml);
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log("Error in server: ".concat(_context2.t0));
              res.status(500).end();

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    return function runner() {
      return _ref2.apply(this, arguments);
    };
  }();

  runner();
});
/* WEBPACK VAR INJECTION */}.call(this, "src/server/middleware"))

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adcApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adcApi */ "./src/server/adcApi.js");
/* harmony import */ var _middleware_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/renderer */ "./src/server/middleware/renderer.js");



var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.get('^/$', _middleware_renderer__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use('/adc', _adcApi__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));
app.get('*', _middleware_renderer__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_adc_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/adc-logo.png */ "./public/img/adc-logo.png");
/* harmony import */ var _public_img_adc_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_img_adc_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HomeScreen_HomeScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeScreen/HomeScreen */ "./src/shared/HomeScreen/HomeScreen.js");
/* harmony import */ var _WalletScreen_WalletScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WalletScreen/WalletScreen */ "./src/shared/WalletScreen/WalletScreen.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var styles = function styles(theme) {
  return {
    content: {
      height: '100%',
      padding: '70px 25px 0 25px'
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    headerLink: {
      color: '#fff',
      textDecoration: 'none'
    }
  };
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
        position: "fixed"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "title",
        color: "inherit",
        className: classes.flex
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_img_adc_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: "ADC logo",
        style: {
          height: '1.16667em',
          verticalAlign: 'bottom'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginLeft: '15px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/",
        className: classes.headerLink
      }, "AudioCoin Online Wallet"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
        smDown: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        color: "inherit"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.content
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/",
        exact: true,
        component: _HomeScreen_HomeScreen__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/:address",
        component: _WalletScreen_WalletScreen__WEBPACK_IMPORTED_MODULE_5__["default"]
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(App));

/***/ }),

/***/ "./src/shared/HomeScreen/CreateWallet.js":
/*!***********************************************!*\
  !*** ./src/shared/HomeScreen/CreateWallet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('adcInfoStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var adcInfoStore = _ref.adcInfoStore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "secondary",
    variant: "headline"
  }, "It looks like you have not yet set up a wallet")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick(evt) {
      return adcInfoStore.createWallet();
    },
    variant: "contained"
  }, "Create ADC Wallet")));
})));

/***/ }),

/***/ "./src/shared/HomeScreen/HomeScreen.js":
/*!*********************************************!*\
  !*** ./src/shared/HomeScreen/HomeScreen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom/Redirect */ "react-router-dom/Redirect");
/* harmony import */ var react_router_dom_Redirect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_Redirect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WalletStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletStatus */ "./src/shared/HomeScreen/WalletStatus.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HomeScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeScreen, _Component);

  function HomeScreen() {
    _classCallCheck(this, HomeScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeScreen).apply(this, arguments));
  }

  _createClass(HomeScreen, [{
    key: "render",
    value: function render() {
      var adcInfoStore = this.props.adcInfoStore;
      return adcInfoStore.hasAddress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom_Redirect__WEBPACK_IMPORTED_MODULE_2___default.a, {
        push: true,
        to: "/".concat(adcInfoStore.address)
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WalletStatus__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }]);

  return HomeScreen;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('adcInfoStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(HomeScreen)));

/***/ }),

/***/ "./src/shared/HomeScreen/WalletStatus.js":
/*!***********************************************!*\
  !*** ./src/shared/HomeScreen/WalletStatus.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CreateWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateWallet */ "./src/shared/HomeScreen/CreateWallet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var styles = function styles(theme) {
  return {
    container: {
      height: '100%'
    }
  };
};

var WalletLoading = function WalletLoading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "secondary",
    variant: "headline"
  }, "Connecting to AudioCoin..."));
};

var WalletUnavailable = function WalletUnavailable() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "secondary",
    variant: "headline"
  }, "AudioCoin wallet is unavailable. Please try again later."));
};

var WalletStatus =
/*#__PURE__*/
function (_Component) {
  _inherits(WalletStatus, _Component);

  function WalletStatus() {
    _classCallCheck(this, WalletStatus);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalletStatus).apply(this, arguments));
  }

  _createClass(WalletStatus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          adcInfoStore = _this$props.adcInfoStore,
          classes = _this$props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        alignItems: "center",
        className: classes.container,
        direction: "column",
        justify: "center"
      }, adcInfoStore.init.match({
        pending: WalletLoading,
        rejected: WalletUnavailable,
        resolved: function resolved() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateWallet__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
      }));
    }
  }]);

  return WalletStatus;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('adcInfoStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(WalletStatus))));

/***/ }),

/***/ "./src/shared/WalletScreen/WalletScreen.js":
/*!*************************************************!*\
  !*** ./src/shared/WalletScreen/WalletScreen.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WalletScreen =
/*#__PURE__*/
function (_Component) {
  _inherits(WalletScreen, _Component);

  function WalletScreen() {
    _classCallCheck(this, WalletScreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalletScreen).apply(this, arguments));
  }

  _createClass(WalletScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.adcInfoStore.loadAddressData();
    }
  }, {
    key: "render",
    value: function render() {
      var adcInfoStore = this.props.adcInfoStore;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        direction: "column",
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 6
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        color: "secondary",
        variant: "headline"
      }, "Address: ".concat(adcInfoStore.address)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "headline"
      }, "Balance: ".concat(adcInfoStore.balance.toFixed(8)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 6
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "headline"
      }, "Send ADC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "headline"
      }, "Transactions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, "Hi"))));
    }
  }]);

  return WalletScreen;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])('adcInfoStore')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(WalletScreen)));

/***/ }),

/***/ "./src/shared/domain/NodeApi.js":
/*!**************************************!*\
  !*** ./src/shared/domain/NodeApi.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NodeApi; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var api = '/adc';

function makeApiRequest(_x) {
  return _makeApiRequest.apply(this, arguments);
}

function _makeApiRequest() {
  _makeApiRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(url) {
    var _len,
        params,
        _key,
        _args5 = arguments;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            for (_len = _args5.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              params[_key - 1] = _args5[_key];
            }

            return _context5.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(resolve, reject) {
                var query, requestUrl, rawResponse, response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;
                        query = params ? "?".concat(querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)) : '';
                        requestUrl = "".concat(api, "/").concat(url).concat(query);
                        _context4.next = 5;
                        return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(requestUrl, {
                          method: 'GET'
                        });

                      case 5:
                        rawResponse = _context4.sent;
                        console.log(rawResponse.ok, rawResponse.status);

                        if (!rawResponse.ok) {
                          _context4.next = 14;
                          break;
                        }

                        _context4.next = 10;
                        return rawResponse.json();

                      case 10:
                        response = _context4.sent;
                        resolve(response);
                        _context4.next = 15;
                        break;

                      case 14:
                        reject(new Error("Request did not complete successfully."));

                      case 15:
                        _context4.next = 21;
                        break;

                      case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4["catch"](0);
                        console.log('ERROR: ', _context4.t0);
                        reject(_context4.t0);

                      case 21:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this, [[0, 17]]);
              }));

              return function (_x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _makeApiRequest.apply(this, arguments);
}

var NodeApi =
/*#__PURE__*/
function () {
  function NodeApi() {
    _classCallCheck(this, NodeApi);
  }

  _createClass(NodeApi, [{
    key: "createNewAddress",
    value: function () {
      var _createNewAddress = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (y, n) {
                  return y('Aev2bvXGeVEtqaBKXBM8xDPJ5BCLKCZvzB');
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createNewAddress() {
        return _createNewAddress.apply(this, arguments);
      }

      return createNewAddress;
    }()
  }, {
    key: "getInfo",
    value: function () {
      var _getInfo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", makeApiRequest('getInfo'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInfo() {
        return _getInfo.apply(this, arguments);
      }

      return getInfo;
    }()
  }, {
    key: "getBalance",
    value: function () {
      var _getBalance = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(address) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", makeApiRequest('getreceivedbyaddress', address));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getBalance(_x2) {
        return _getBalance.apply(this, arguments);
      }

      return getBalance;
    }()
  }]);

  return NodeApi;
}();



/***/ }),

/***/ "./src/shared/stores/AdcInfoStore.js":
/*!*******************************************!*\
  !*** ./src/shared/stores/AdcInfoStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdcInfoStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-task */ "mobx-task");
/* harmony import */ var mobx_task__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_task__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AdcInfoStore =
/*#__PURE__*/
function () {
  function AdcInfoStore(nodeApi) {
    _classCallCheck(this, AdcInfoStore);

    this.address = null;
    this.balance = 0;
    this.isNodeActive = false;
    this.nodeApi = nodeApi;
  }

  _createClass(AdcInfoStore, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.nodeApi.getInfo();

              case 2:
                info = _context.sent;
                console.log(info);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "createWallet",
    value: function () {
      var _createWallet = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var address;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.nodeApi.createNewAddress();

              case 2:
                address = _context2.sent;
                console.log(address);
                this.address = address;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createWallet() {
        return _createWallet.apply(this, arguments);
      }

      return createWallet;
    }()
  }, {
    key: "loadAddressData",
    value: function () {
      var _loadAddressData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var balance;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.nodeApi.getBalance(this.address);

              case 2:
                balance = _context3.sent;
                this.balance = balance;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadAddressData() {
        return _loadAddressData.apply(this, arguments);
      }

      return loadAddressData;
    }()
  }, {
    key: "hasAddress",
    get: function get() {
      return this.address !== null;
    }
  }]);

  return AdcInfoStore;
}();


Object(mobx__WEBPACK_IMPORTED_MODULE_0__["decorate"])(AdcInfoStore, {
  address: mobx__WEBPACK_IMPORTED_MODULE_0__["observable"],
  createWallet: mobx_task__WEBPACK_IMPORTED_MODULE_1__["task"],
  hasAddress: mobx__WEBPACK_IMPORTED_MODULE_0__["computed"],
  init: mobx_task__WEBPACK_IMPORTED_MODULE_1__["task"],
  loadAddressData: mobx_task__WEBPACK_IMPORTED_MODULE_1__["task"]
});

/***/ }),

/***/ "./src/shared/ui/createTheme.js":
/*!**************************************!*\
  !*** ./src/shared/ui/createTheme.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "@material-ui/core/colors/grey");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/lightBlue */ "@material-ui/core/colors/lightBlue");
/* harmony import */ var _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
    palette: {
      primary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_1___default.a['A900'],
      secondary: _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_2___default.a,
      accent: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default.a,
      type: 'light'
    }
  });
});

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi @babel/polyfill ./src/server/server.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/server/server.js */"./src/server/server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors/grey":
/*!************************************************!*\
  !*** external "@material-ui/core/colors/grey" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/grey");

/***/ }),

/***/ "@material-ui/core/colors/lightBlue":
/*!*****************************************************!*\
  !*** external "@material-ui/core/colors/lightBlue" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lightBlue");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-task":
/*!****************************!*\
  !*** external "mobx-task" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-task");

/***/ }),

/***/ "node-adc":
/*!***************************!*\
  !*** external "node-adc" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-adc");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/Redirect":
/*!********************************************!*\
  !*** external "react-router-dom/Redirect" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Redirect");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map
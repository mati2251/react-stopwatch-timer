module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = function Circle(props) {

    var circleCoordinates = function circleCoordinates(radius, steps, centerX, centerY) {
        var xValues = [centerX];
        var yValues = [centerY];
        for (var i = 0; i < steps; i++) {
            xValues[i] = centerX + radius * Math.cos(2 * Math.PI * i / steps);
            yValues[i] = centerY + radius * Math.sin(2 * Math.PI * i / steps);
        }
        return { x: xValues, y: yValues };
    };

    var coordinates = circleCoordinates(40, 60, 50, 50);
    var array = [];
    for (var i = 0; i < 60; i++) {
        var tmp = 30 - i;
        if (tmp < 0) {
            tmp = 60 + tmp;
        }
        var style = void 0;
        if (props.hint === tmp) {
            style = {
                left: coordinates.y[i].toString() + "%",
                top: coordinates.x[i].toString() + "%",
                transform: "rotate(" + (360 - i * 6).toString() + "deg)",
                backgroundColor: props.tintColor,
                width: "4px"
            };
        } else {
            style = {
                left: coordinates.y[i].toString() + "%",
                top: coordinates.x[i].toString() + "%",
                transform: "rotate(" + (360 - i * 6).toString() + "deg)",
                backgroundColor: props.color
            };
        }
        array.push(_react2.default.createElement('div', { style: style, className: 'react-stopwatch-timer__element', key: i }));
    }

    return array;
};

exports.default = Circle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = void 0;

var Time = function Time(props) {

    var getValidDisplayTime = function getValidDisplayTime(hours, minutes, seconds) {
        var tmp = '';
        if (props.displayHours !== false) {
            tmp = tmp + (hours / 100).toFixed(2).slice(2);
            if (props.displayMinutes !== false) {
                tmp = tmp + ":";
            }
        }
        if (props.displayMinutes !== false) {
            tmp = tmp + (minutes / 100).toFixed(2).slice(2);
            if (props.displaySeconds !== false) {
                tmp = tmp + ":";
            }
        }
        if (props.displaySeconds !== false) {
            tmp = tmp + (seconds / 100).toFixed(2).slice(2);
        }
        return tmp;
    };

    var defaultTime = void 0;

    if (props.fromTime !== undefined) {
        defaultTime = new Date(props.fromTime);
    } else {
        defaultTime = new Date(Date.now());
    }

    var _useState = (0, _react.useState)(getValidDisplayTime(defaultTime.getHours(), defaultTime.getMinutes(), defaultTime.getSeconds())),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        idInterval = _useState4[0],
        setIdInterval = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isCount = _useState6[0],
        setIsCount = _useState6[1];

    var startStopwatch = function startStopwatch() {
        if (time === undefined) {
            if (props.fromTime !== undefined) {
                time = new Date(props.fromTime);
            } else {
                time = new Date(2000, 0, 0, 0, 0, 0, 0);
            }
        }
        var start = Date.now();
        var id = setInterval(function () {
            var delta = Date.now() - start;
            time.setMinutes(defaultTime.getMinutes());
            time.setHours(defaultTime.getHours());
            time.setSeconds(Math.floor(delta / 1000) + defaultTime.getMinutes());
            props.hint(time.getSeconds());
            setText(getValidDisplayTime(time.getHours(), time.getMinutes(), time.getSeconds()));
        }, 1000);
        setIdInterval(id);
    };

    var startTimer = function startTimer() {
        var countDownDate = new Date(Date.now());
        countDownDate.setSeconds(countDownDate.getSeconds() + defaultTime.getSeconds() + 1);
        countDownDate.setMinutes(countDownDate.getMinutes() + defaultTime.getMinutes());
        countDownDate.setHours(countDownDate.getHours() + defaultTime.getHours());
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(x);
            }
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            props.hint(seconds);
            setText(getValidDisplayTime(hours, minutes, seconds));
        }, 1000);
    };
    if (props.isOn === true && isCount === false) {
        if (props.watchType === "timer") {
            startTimer();
        } else if (props.watchType === "stopwatch") {
            startStopwatch();
        }
        setIsCount(true);
    } else if (props.isOn === false && isCount === true) {
        clearInterval(idInterval);
    }

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            null,
            text
        )
    );
};

exports.default = Time;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(8);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(5);

var _Circle = __webpack_require__(3);

var _Circle2 = _interopRequireDefault(_Circle);

var _Time = __webpack_require__(4);

var _Time2 = _interopRequireDefault(_Time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactTimerStopwatch = function ReactTimerStopwatch(props) {
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        hint = _useState2[0],
        setHint = _useState2[1];

    var getHint = function getHint(h) {
        setHint(h);
    };

    return _react2.default.createElement(
        'div',
        { className: 'react-stopwatch-timer__table' },
        _react2.default.createElement(_Time2.default, { isOn: props.isOn, hint: getHint, watchType: props.watchType, displayHours: props.displayHours,
            displayMinutes: props.displayMinutes, displaySeconds: props.displaySeconds,
            fromTime: props.fromTime }),
        props.displayCircle === true ? _react2.default.createElement(_Circle2.default, { color: props.color, tintColor: props.hintColor, hint: hint }) : null,
        props.children !== undefined ? _react2.default.createElement(
            'div',
            { className: 'react-stopwatch-timer__container' },
            props.children
        ) : null
    );
};

exports.default = ReactTimerStopwatch;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".react-stopwatch-timer__element {\n    position: absolute;\n    height: 15px;\n    width: 2px;\n    transition: all 500ms ease;\n}\n\n", ""]);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".react-stopwatch-timer__table{\n  height: 200px;\n  width: 200px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.react-stopwatch-timer__container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}", ""]);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(7);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })
/******/ ]);
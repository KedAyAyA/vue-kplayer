(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["someLibName"] = factory();
	else
		root["someLibName"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_kedaya_jpg__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_kedaya_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_kedaya_jpg__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      img: __WEBPACK_IMPORTED_MODULE_0__assets_kedaya_jpg___default.a
    };
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AudioPlayer__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_AudioPlayer__["a" /* default */]);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AudioPlayer_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdd132d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AudioPlayer_vue__ = __webpack_require__(10);
function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6bdd132d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AudioPlayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdd132d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AudioPlayer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("503250e2", content, true);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n.audio-player[data-v-6bdd132d] {\n  height: 80px;\n  border: 1px solid #eee;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.audio-player__content[data-v-6bdd132d] {\n    color: yellow;\n}\n", "", {"version":3,"sources":["/Users/caoxun/Documents/work/mylib/vue-audio-player/src/components/AudioPlayer.vue"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,uBAAuB;EACvB,+BAA+B;UACvB,uBAAuB;CAChC;AACD;IACI,cAAc;CACjB","file":"AudioPlayer.vue","sourcesContent":["\n.audio-player[data-v-6bdd132d] {\n  height: 80px;\n  border: 1px solid #eee;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.audio-player__content[data-v-6bdd132d] {\n    color: yellow;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-player"},[_c('div',{staticClass:"audio-player__control"},[_c('img',{attrs:{"src":_vm.img,"alt":"","width":"80"}})]),_vm._v(" "),_c('div',{staticClass:"audio-player__progress"}),_vm._v(" "),_c('div',{staticClass:"audio-player__setting"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
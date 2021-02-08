(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/CollapseTransition.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/CollapseTransition.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CollapseTransition",
  props: {
    name: {
      type: String,
      required: false,
      "default": 'collapse'
    },
    dimension: {
      type: String,
      required: false,
      "default": 'height',
      validator: function validator(value) {
        return ['height', 'width'].includes(value);
      }
    },
    duration: {
      type: Number,
      required: false,
      "default": 300
    },
    easing: {
      type: String,
      required: false,
      "default": 'ease-in-out'
    }
  },
  watch: {
    dimension: function dimension() {
      this.clearCachedDimensions();
    }
  },
  data: function data() {
    return {
      cachedStyles: null
    };
  },
  computed: {
    transition: function transition() {
      var _this = this;

      var transitions = [];
      Object.keys(this.cachedStyles).forEach(function (key) {
        transitions.push("".concat(_this.convertToCssProperty(key), " ").concat(_this.duration, "ms ").concat(_this.easing));
      });
      return transitions.join(', ');
    }
  },
  methods: {
    enter: function enter(el, done) {
      // Because width and height may be 'auto',
      // first detect and cache the dimensions
      this.detectAndCacheDimensions(el); // The order of applying styles is important:
      // - 1. Set styles for state before transition
      // - 2. Force repaint
      // - 3. Add transition style
      // - 4. Set styles for state after transition
      // If the order is not right and you open any 2nd level submenu
      // for the first time, the transition will not work.

      this.setClosedDimensions(el);
      this.hideOverflow(el);
      this.forceRepaint(el);
      this.setTransition(el);
      this.setOpenedDimensions(el); // Call done() when the transition ends
      // to trigger the @after-enter event.

      setTimeout(done, this.duration);
    },
    afterEnter: function afterEnter(el) {
      // Clean up inline styles
      this.unsetOverflow(el);
      this.unsetTransition(el);
      this.unsetDimensions(el);
      this.clearCachedDimensions();
    },
    leave: function leave(el, done) {
      // For some reason, @leave triggered when starting
      // from open state on page load. So for safety,
      // check if the dimensions have been cached.
      this.detectAndCacheDimensions(el); // The order of applying styles is less important
      // than in the enter phase, as long as we repaint
      // before setting the closed dimensions.
      // But it is probably best to use the same
      // order as the enter phase.

      this.setOpenedDimensions(el);
      this.hideOverflow(el);
      this.forceRepaint(el);
      this.setTransition(el);
      this.setClosedDimensions(el); // Call done() when the transition ends
      // to trigger the @after-leave event.
      // This will also cause v-show
      // to reapply 'display: none'.

      setTimeout(done, this.duration);
    },
    afterLeave: function afterLeave(el) {
      // Clean up inline styles
      this.unsetOverflow(el);
      this.unsetTransition(el);
      this.unsetDimensions(el);
      this.clearCachedDimensions();
    },
    detectAndCacheDimensions: function detectAndCacheDimensions(el) {
      // Cache actual dimensions
      // only once to void invalid values when
      // triggering during a transition
      if (this.cachedStyles) return;
      var visibility = el.style.visibility;
      var display = el.style.display; // Trick to get the width and
      // height of a hidden element

      el.style.visibility = 'hidden';
      el.style.display = '';
      this.cachedStyles = this.detectRelevantDimensions(el); // Restore any original styling

      el.style.visibility = visibility;
      el.style.display = display;
    },
    clearCachedDimensions: function clearCachedDimensions() {
      this.cachedStyles = null;
    },
    detectRelevantDimensions: function detectRelevantDimensions(el) {
      // These properties will be transitioned
      if (this.dimension === 'height') {
        return {
          'height': el.offsetHeight + 'px',
          'paddingTop': el.style.paddingTop || this.getCssValue(el, 'padding-top'),
          'paddingBottom': el.style.paddingBottom || this.getCssValue(el, 'padding-bottom')
        };
      }

      if (this.dimension === 'width') {
        return {
          'width': el.offsetWidth + 'px',
          'paddingLeft': el.style.paddingLeft || this.getCssValue(el, 'padding-left'),
          'paddingRight': el.style.paddingRight || this.getCssValue(el, 'padding-right')
        };
      }

      return {};
    },
    setTransition: function setTransition(el) {
      el.style.transition = this.transition;
    },
    unsetTransition: function unsetTransition(el) {
      el.style.transition = '';
    },
    hideOverflow: function hideOverflow(el) {
      el.style.overflow = 'hidden';
    },
    unsetOverflow: function unsetOverflow(el) {
      el.style.overflow = '';
    },
    setClosedDimensions: function setClosedDimensions(el) {
      Object.keys(this.cachedStyles).forEach(function (key) {
        el.style[key] = '0';
      });
    },
    setOpenedDimensions: function setOpenedDimensions(el) {
      var _this2 = this;

      Object.keys(this.cachedStyles).forEach(function (key) {
        el.style[key] = _this2.cachedStyles[key];
      });
    },
    unsetDimensions: function unsetDimensions(el) {
      Object.keys(this.cachedStyles).forEach(function (key) {
        el.style[key] = '';
      });
    },
    forceRepaint: function forceRepaint(el) {
      // Force repaint to make sure the animation is triggered correctly.
      // Thanks: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
      getComputedStyle(el)[this.dimension];
    },
    getCssValue: function getCssValue(el, style) {
      return getComputedStyle(el, null).getPropertyValue(style);
    },
    convertToCssProperty: function convertToCssProperty(style) {
      // Example: convert 'paddingTop' to 'padding-top'
      // Thanks: https://gist.github.com/tan-yuki/3450323
      var upperChars = style.match(/([A-Z])/g);

      if (!upperChars) {
        return style;
      }

      for (var i = 0, n = upperChars.length; i < n; i++) {
        style = style.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
      }

      if (style.slice(0, 1) === '-') {
        style = style.slice(1);
      }

      return style;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/CollapseTransition.vue?vue&type=template&id=902300ca&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/CollapseTransition.vue?vue&type=template&id=902300ca& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: _vm.name },
      on: {
        enter: _vm.enter,
        "after-enter": _vm.afterEnter,
        leave: _vm.leave,
        "after-leave": _vm.afterLeave
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/CollapseTransition.vue":
/*!************************************!*\
  !*** ./src/CollapseTransition.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapseTransition.vue?vue&type=template&id=902300ca& */ "./src/CollapseTransition.vue?vue&type=template&id=902300ca&");
/* harmony import */ var _CollapseTransition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapseTransition.vue?vue&type=script&lang=js& */ "./src/CollapseTransition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CollapseTransition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/CollapseTransition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/CollapseTransition.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/CollapseTransition.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollapseTransition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!./CollapseTransition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/CollapseTransition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollapseTransition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/CollapseTransition.vue?vue&type=template&id=902300ca&":
/*!*******************************************************************!*\
  !*** ./src/CollapseTransition.vue?vue&type=template&id=902300ca& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./CollapseTransition.vue?vue&type=template&id=902300ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/CollapseTransition.vue?vue&type=template&id=902300ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CollapseTransition_vue_vue_type_template_id_902300ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, CollapseTransition, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _CollapseTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapseTransition */ "./src/CollapseTransition.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseTransition", function() { return _CollapseTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });


/* harmony default export */ __webpack_exports__["default"] = (_CollapseTransition__WEBPACK_IMPORTED_MODULE_0__["default"]);

function install(Vue) {
  Vue.component('CollapseTransition', _CollapseTransition__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
var plugin = {
  install: install
};
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan/Code/packages/vue-collapse-transition/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
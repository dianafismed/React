"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction HomePage() {\n    const estiloEscrita = {\n        color: \"red\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: estiloEscrita,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {}, void 0, false, {\n                fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TimeLine, {}, void 0, false, {\n                fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nfunction Menu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Menu\"\n    }, void 0, false, {\n        fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Menu;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Header\"\n    }, void 0, false, {\n        fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Header;\nfunction TimeLine() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"TimeLine\"\n    }, void 0, false, {\n        fileName: \"E:\\\\React\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c3 = TimeLine;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"Menu\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"TimeLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBLFNBQVNBLFdBQVc7SUFDbEIsTUFBTUMsZ0JBQWdCO1FBQUNDLE9BQU07SUFBSztJQUNsQyxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT0g7OzBCQUNWLDhEQUFDSTs7Ozs7MEJBQ0QsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7Ozs7Ozs7Ozs7O0FBR1A7S0FUU1A7QUFXVCwrREFBZUEsUUFBUUEsRUFBQTtBQUV2QixTQUFTSyxPQUFPO0lBQ2QscUJBQ0UsOERBQUNGO2tCQUFJOzs7Ozs7QUFJVDtNQU5TRTtBQVFULFNBQVNDLFNBQVM7SUFDaEIscUJBQ0UsOERBQUNIO2tCQUFJOzs7Ozs7QUFLVDtNQVBTRztBQVNULFNBQVNDLFdBQVc7SUFDbEIscUJBQ0UsOERBQUNKO2tCQUFJOzs7Ozs7QUFJVDtNQU5TSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGVzdGlsb0VzY3JpdGEgPSB7Y29sb3I6XCJyZWRcIn1cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXtlc3RpbG9Fc2NyaXRhfT5cclxuICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxUaW1lTGluZSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5mdW5jdGlvbiBNZW51KCkgeyBcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICBNZW51XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHsgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgXHJcbiAgICAgIEhlYWRlclxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lTGluZSgpIHsgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgVGltZUxpbmVcclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImVzdGlsb0VzY3JpdGEiLCJjb2xvciIsImRpdiIsInN0eWxlIiwiTWVudSIsIkhlYWRlciIsIlRpbWVMaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
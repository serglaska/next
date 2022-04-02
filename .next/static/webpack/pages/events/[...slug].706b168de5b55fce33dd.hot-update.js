webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.js\");\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dummy-data */ \"./pages/dummy-data.js\");\n/* harmony import */ var _components_events_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/results-title */ \"./components/events/results-title.js\");\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui */ \"./components/ui/index.js\");\n\n\nvar _jsxFileName = \"/home/lovelace/myOwnProjects/next/pages/events/[...slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n ///////////////////////////////////////////////////\n\nvar FilteredEvents = function FilteredEvents() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var urlData = router.query.slug;\n  if (!urlData) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 24\n  }, _this);\n  var year = Number(urlData[0]);\n  var month = Number(urlData[1]);\n  if (isNaN(year) || isNaN(month) || year < 2020 || year > 2030 || month < 1 || month > 12) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Invalid date... Please, try again\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_4__[\"getFilteredEvents\"])({\n    year: year,\n    month: month\n  });\n  if (!filteredEvents || filteredEvents.length === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Not valid Events\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n      children: \"Show all Events\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n  var date = new Date(year, month - 1);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_results_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      date: date\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__[\"EventList\"], {\n      events: filteredEvents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(FilteredEvents, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = FilteredEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEvents);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEvents\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXJsRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInllYXIiLCJOdW1iZXIiLCJtb250aCIsImlzTmFOIiwiZmlsdGVyZWRFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQTdCO0FBQ0EsTUFBSSxDQUFDRixPQUFMLEVBQWMsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNkLE1BQU1HLElBQUksR0FBR0MsTUFBTSxDQUFDSixPQUFPLENBQUMsQ0FBRCxDQUFSLENBQW5CO0FBQ0EsTUFBTUssS0FBSyxHQUFHRCxNQUFNLENBQUNKLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FBcEI7QUFFQSxNQUFJTSxLQUFLLENBQUNILElBQUQsQ0FBTCxJQUFlRyxLQUFLLENBQUNELEtBQUQsQ0FBcEIsSUFBK0JGLElBQUksR0FBRyxJQUF0QyxJQUE4Q0EsSUFBSSxHQUFHLElBQXJELElBQTZERSxLQUFLLEdBQUcsQ0FBckUsSUFBMEVBLEtBQUssR0FBRyxFQUF0RixFQUEwRixvQkFDeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0Y7QUFHMUYsTUFBTUUsY0FBYyxHQUFHQyxxRUFBaUIsQ0FBQztBQUFFTCxRQUFJLEVBQUpBLElBQUY7QUFBUUUsU0FBSyxFQUFMQTtBQUFSLEdBQUQsQ0FBeEM7QUFFQSxNQUFJLENBQUNFLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ0UsTUFBZixLQUEwQixDQUFqRCxFQUFvRCxvQkFDbEQscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEa0Q7QUFTcEQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU1IsSUFBVCxFQUFlRSxLQUFLLEdBQUcsQ0FBdkIsQ0FBYjtBQUVBLHNCQUFPLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0wscUVBQUMsd0VBQUQ7QUFBYyxVQUFJLEVBQUVLO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMLHFFQUFDLHVFQUFEO0FBQVcsWUFBTSxFQUFFSDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFJRCxDQTVCRDs7R0FBTVYsYztVQUNXRSxxRDs7O0tBRFhGLGM7QUE2QlNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnRMaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uL2R1bW15LWRhdGEnO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9yZXN1bHRzLXRpdGxlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWknO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IEZpbHRlcmVkRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB1cmxEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XG4gIGlmICghdXJsRGF0YSkgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBjb25zdCB5ZWFyID0gTnVtYmVyKHVybERhdGFbMF0pO1xuICBjb25zdCBtb250aCA9IE51bWJlcih1cmxEYXRhWzFdKTtcblxuICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpIHx8IHllYXIgPCAyMDIwIHx8IHllYXIgPiAyMDMwIHx8IG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSByZXR1cm4gKFxuICAgIDxwPkludmFsaWQgZGF0ZS4uLiBQbGVhc2UsIHRyeSBhZ2FpbjwvcD5cbiAgKTtcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyh7IHllYXIsIG1vbnRoIH0pO1xuXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxwPk5vdCB2YWxpZCBFdmVudHM8L3A+XG4gICAgICA8QnV0dG9uPlxuICAgICAgICBTaG93IGFsbCBFdmVudHNcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxKTtcblxuICByZXR1cm4gPEZyYWdtZW50PlxuICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cbiAgICA8RXZlbnRMaXN0IGV2ZW50cz17ZmlsdGVyZWRFdmVudHN9IC8+XG4gIDwvRnJhZ21lbnQ+XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/theme */ \"./src/js/theme.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Calculator */ \"./src/js/Calculator.js\");\n\r\n// import { Calculator } from \"./Calculator\";\r\n\r\n\r\nconst numberKeys = document.querySelectorAll('.js-number');\r\nconst operatorKeys = document.querySelectorAll('.js-operator');\r\nconst deleteKey = document.querySelector('.js-delete');\r\nconst resetKey = document.querySelector('.js-reset');\r\nconst equalsKey = document.querySelector('.js-equals');\r\nconst currentEl = document.querySelector('.js-current');\r\nconst previousEl = document.querySelector('.js-previous')\r\n\r\n\r\n\r\n;\r\n\r\n\r\nconst calc = new _js_Calculator__WEBPACK_IMPORTED_MODULE_1__.Calculator(currentEl, previousEl);\r\n\r\nnumberKeys.forEach((key) => {\r\n    key.addEventListener(\"click\", () => {\r\n        calc.appendNumber(key.innerText);\r\n        calc.updateDisplay();\r\n    })\r\n});\r\n\r\noperatorKeys.forEach((key) => {\r\n    key.addEventListener(\"click\", () => {\r\n        calc.selectOperation(key.innerText);\r\n        calc.updateDisplay();\r\n    });\r\n});\r\n\r\ndeleteKey.addEventListener(\"click\", () => {\r\n    calc.deleteOne();\r\n    calc.updateDisplay();\r\n});\r\n\r\nresetKey.addEventListener(\"click\", () => {\r\n    calc.clearScreen();\r\n    calc.updateDisplay();\r\n});\r\n\r\nequalsKey.addEventListener(\"click\", () => {\r\n    calc.calculate();\r\n    calc.updateDisplay();\r\n});\r\n\n\n//# sourceURL=webpack://09-calculator/./src/app.js?");

/***/ }),

/***/ "./src/js/Calculator.js":
/*!******************************!*\
  !*** ./src/js/Calculator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\nclass Calculator {\r\n    constructor(currentEl, previousEl) {\r\n        this.currentEl = currentEl;\r\n        this.previousEl = previousEl;\r\n\r\n        this.clearScreen();\r\n    }\r\n\r\n    clearScreen() {\r\n        this.current = \"\";\r\n        this.previous = \"\";\r\n        this.operation = undefined;\r\n    }\r\n\r\n    appendNumber(number) {\r\n        if (number === \".\" && this.current.toString().includes(\".\")) return;\r\n        this.current = this.current.toString() + number.toString();\r\n    }\r\n\r\n    selectOperation(operation) {\r\n        if (this.current === \"\") return;\r\n        if (this.previous !== \"\") {\r\n            this.calculate();\r\n        }\r\n        this.previous = this.current;\r\n        this.current = \"\";\r\n        this.operation = operation;\r\n    }\r\n\r\n    calculate() {\r\n        if (!this.current || !this.previous || !this.operation) return;\r\n        let result;\r\n        const curr = parseFloat(this.current);\r\n        const prev = parseFloat(this.previous);\r\n        switch (this.operation) {\r\n            case \"+\":\r\n                result = curr + prev;\r\n                break;\r\n            case \"-\":\r\n                result = prev - curr;\r\n                break;\r\n            case \"x\":\r\n                result = prev * curr;\r\n                break;\r\n            case \"/\":\r\n                result = prev / curr;\r\n                break;\r\n        }\r\n        this.current = result;\r\n        this.previous = \"\";\r\n        this.operation = undefined;\r\n        this.updateDisplay();\r\n    }\r\n\r\n    deleteOne() {\r\n        this.current = this.current.toString().slice(0, -1);\r\n    }\r\n\r\n    updateDisplay() {\r\n        this.currentEl.innerText = this.formatNumber(this.current);\r\n        if (this.previous !== \"\" && this.operation !== undefined) {\r\n            this.previousEl.innerText =\r\n                this.formatNumber(this.previous) + this.operation;\r\n        } else {\r\n            this.previousEl.innerText = this.previous;\r\n        }\r\n    }\r\n\r\n    formatNumber(number) {\r\n        if (number === \"\") return \"\";\r\n        if (number.toString().includes(\".\")) {\r\n            const [integerDigits, decimalDigits] = number.toString().split(\".\");\r\n            return (\r\n                Number(integerDigits).toLocaleString(undefined) + \".\" + decimalDigits\r\n            );\r\n        } else {\r\n            return Number(number).toLocaleString(undefined);\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://09-calculator/./src/js/Calculator.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

eval("const themes = document.querySelector('.js-theme-group');\r\n\r\n(function () {\r\n    const selectedTheme = localStorage.getItem(\"theme\");\r\n    if (selectedTheme) {\r\n        //select all radio buttons\r\n        const options = document.querySelectorAll('.js-theme__input-option');\r\n        //append selected theme as class on body element\r\n        document.body.className = `${selectedTheme}`;\r\n        const currentBtn = [...options].filter(\r\n            (option) => option.value === selectedTheme\r\n        );\r\n        currentBtn[0].checked = true;\r\n    }\r\n\r\n})();\r\n\r\n//add event listener to radio button group \r\nthemes.addEventListener('change', (e) => {\r\n    e.preventDefault();\r\n    let currentTheme = e.target.value;\r\n    document.body.className = `${currentTheme}`;\r\n    currentTheme = localStorage.setItem(\"theme\", currentTheme);\r\n})\r\n\r\n\n\n//# sourceURL=webpack://09-calculator/./src/js/theme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
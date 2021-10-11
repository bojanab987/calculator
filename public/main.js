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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  /*text*/\\n  --text-primary:#FFFFFF;\\n  --text-keypad-nums:hsl(221, 14%, 31%);\\n  --primary-white:var(--text-primary);\\n  --equals-text:var(--text-primary);\\n  /*backgrounds*/\\n  --main-background: hsl(222, 26%, 31%);\\n  --keypad-background: hsl(223, 31%, 20%);\\n  --screen-background: hsl(224, 36%, 15%);\\n  /*keys*/\\n  --text-key-bckg:hsl(225, 21%, 49%);\\n  --text-key-shadow:0px -4px 0px 0px hsl(224, 28%, 35%) inset;\\n  --text-key-hover: hsla(224, 51%, 76%, 1);\\n  --equals-key:hsl(6, 63%, 50%);\\n  --equals-shadow:0px -4px 0px 0px hsl(6, 70%, 34%) inset;\\n  --equals-key-hover:hsla(6, 93%, 67%, 1);\\n  --num-key-bckg: hsl(30, 25%, 89%);\\n  --num-key-shadow: 0px -4px 0px 0px hsl(28, 16%, 65%) inset;\\n  --num-key-hover: hsla(31, 100%, 100%, 1); }\\n\\nbody.light {\\n  /*text*/\\n  --primary-white:#FFFFFF;\\n  --text-primary:hsl(60, 10%, 19%);\\n  --text-keypad-nums:hsl(60, 10%, 19%);\\n  --equals-text:var(--primary-white);\\n  /*backgrounds*/\\n  --main-background: hsl(0, 0%, 90%);\\n  --keypad-background: hsl(0, 5%, 81%);\\n  --screen-background: hsl(0, 0%, 93%);\\n  /*keys*/\\n  --text-key-bckg:hsl(185, 42%, 37%);\\n  --text-key-shadow:0px -4px 0px 0px hsl(185, 58%, 25%) inset;\\n  --text-key-hover: hsla(184, 40%, 56%, 1);\\n  --equals-key:hsl(25, 98%, 40%);\\n  --equals-shadow:0px -4px 0px 0px hsl(25, 99%, 27%) inset;\\n  --equals-key-hover:hsla(25, 100%, 61%, 1);\\n  --num-key-bckg: hsl(45, 7%, 89%);\\n  --num-key-shadow: 0px -4px 0px 0px hsl(35, 11%, 61%) inset;\\n  --num-key-hover: var(--primary-white); }\\n\\nbody.purple {\\n  /*text*/\\n  --text-primary:hsl(52, 100%, 62%);\\n  --primary-white:#FFFFFF;\\n  --text-keypad-nums:var(--text-primary);\\n  --equals-text:hsl(198, 20%, 13%);\\n  /*backgrounds*/\\n  --main-background: hsl(268, 75%, 9%);\\n  --keypad-background: hsl(268, 71%, 12%);\\n  --screen-background: hsl(268, 71%, 12%);\\n  /*keys*/\\n  --text-key-bckg:hsl(281, 89%, 26%);\\n  --text-key-shadow:0px -4px 0px 0px hsl(285, 91%, 52%) inset;\\n  --text-key-hover: hsla(280, 56%, 44%, 1);\\n  --equals-key:hsl(176, 100%, 44%);\\n  --equals-shadow:0px -4px 0px 0px hsl(177, 92%, 70%) inset;\\n  --equals-key-hover: hsla(176, 100%, 79%, 1);\\n  --num-key-bckg: hsl(268, 47%, 21%);\\n  --num-key-shadow:0px -4px 0px 0px hsl(290, 70%, 36%) inset;\\n  --num-key-hover: hsla(268, 54%, 44%, 1); }\\n\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n  font-family: 'Spartan', sans-serif;\\n  font-weight: 700;\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  margin: 32px;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: var(--main-background); }\\n\\n.calculator__wrapper, .container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 1;\\n  max-width: 460px;\\n  max-height: 708px; }\\n\\n.calculator__wrapper {\\n  margin: 28px 24px;\\n  gap: 32px; }\\n\\n.header {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  width: 100%;\\n  align-items: flex-end;\\n  color: var(--text-primary); }\\n\\n.logo__container {\\n  justify-self: flex-start; }\\n\\n.logo {\\n  font-size: 32px;\\n  line-height: 1.125;\\n  letter-spacing: -0.53px;\\n  color: var(--text-primary); }\\n\\n.theme__group {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: flex-end;\\n  gap: 21px;\\n  font-size: 12px;\\n  line-height: 1.1; }\\n\\n.theme-text {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  letter-spacing: 1px; }\\n\\n.themes {\\n  display: inline-block;\\n  margin-left: 21px;\\n  width: 71px; }\\n\\n.labels {\\n  display: flex;\\n  justify-content: space-around; }\\n\\n.inputs {\\n  display: flex;\\n  justify-content: space-around;\\n  background-color: var(--keypad-background);\\n  padding-bottom: 5px;\\n  margin-top: 5px;\\n  border-radius: 13px; }\\n\\n.theme__input {\\n  cursor: pointer;\\n  height: 16px;\\n  width: 16px;\\n  background-color: var(--equals-key);\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  opacity: 0;\\n  margin-top: 5px; }\\n  .theme__input:hover::after {\\n    background-color: var(--equals-key-hover); }\\n  .theme__input:checked {\\n    opacity: 1;\\n    border-radius: 50%; }\\n  .theme__input::after {\\n    height: 16px;\\n    width: 16px;\\n    background: var(--equals-key);\\n    display: flex;\\n    content: \\\"\\\";\\n    border-radius: 50%; }\\n\\n.container {\\n  gap: 24px;\\n  font-size: 28px;\\n  max-width: 100%;\\n  flex: 1; }\\n\\n.screen__container {\\n  display: flex;\\n  flex-direction: column-reverse;\\n  justify-content: center;\\n  align-items: flex-end;\\n  width: 100%;\\n  gap: 5px;\\n  min-height: 88px;\\n  max-height: 128px;\\n  padding: 26px 24px;\\n  background-color: var(--screen-background);\\n  color: var(--text-primary);\\n  border-radius: 10px;\\n  font-size: 32px;\\n  line-height: 1.125;\\n  letter-spacing: -0.53px; }\\n\\n.previous {\\n  opacity: 0.5;\\n  font-size: 1.375rem; }\\n\\n.keypad__container {\\n  background-color: var(--keypad-background);\\n  padding: 24px;\\n  display: grid;\\n  width: 100%;\\n  grid-template-columns: repeat(4, minmax(5vw, 101px));\\n  grid-template-rows: repeat(5, minmax(5vw, 64px));\\n  grid-gap: 13px;\\n  border-radius: 10px; }\\n\\n.key {\\n  font-weight: 700;\\n  height: 64px;\\n  border-radius: 5px;\\n  border: none; }\\n\\n.span-two {\\n  grid-column: span 2;\\n  width: 100%; }\\n\\n.number, .operator {\\n  background-color: var(--num-key-bckg);\\n  box-shadow: var(--num-key-shadow);\\n  color: var(--text-keypad-nums);\\n  font-size: 28px;\\n  line-height: 1.1;\\n  letter-spacing: -0.47px; }\\n  .number:hover, .operator:hover {\\n    background-color: var(--num-key-hover); }\\n\\n.text-key {\\n  background-color: var(--text-key-bckg);\\n  box-shadow: var(--text-key-shadow);\\n  color: var(--primary-white); }\\n  .text-key:hover {\\n    background-color: var(--text-key-hover); }\\n\\n.equals {\\n  color: var(--equals-text);\\n  background-color: var(--equals-key);\\n  box-shadow: var(--equals-shadow); }\\n  .equals:hover {\\n    background-color: var(--equals-key-hover); }\\n\\n.text-key, .equals {\\n  font-size: 16px;\\n  line-height: 1.125;\\n  letter-spacing: -0.27px; }\\n\\n@media only screen and (max-width: 375px) {\\n  .calculator__wrapper {\\n    max-width: 327px; } }\\n\\n@media only screen and (min-width: 600px) {\\n  .screen__container {\\n    font-size: 48px;\\n    letter-spacing: -0.8px;\\n    height: 128px;\\n    padding: 36px 32px; }\\n  .keypad__container {\\n    padding: 32px; }\\n  .number, .operator {\\n    font-size: 32px;\\n    line-height: 1.125;\\n    letter-spacing: -0.53px; }\\n  .text-key, .equals {\\n    font-size: 20px;\\n    line-height: 1.1;\\n    letter-spacing: -0.33px; } }\\n\\n@media only screen and (min-width: 1024px) {\\n  body {\\n    margin: 96px; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://09-calculator/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://09-calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://09-calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://09-calculator/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://09-calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/theme */ \"./src/js/theme.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Calculator */ \"./src/js/Calculator.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\r\n\r\n\r\n\r\nconst numberKeys = document.querySelectorAll('.js-number');\r\nconst operatorKeys = document.querySelectorAll('.js-operator');\r\nconst deleteKey = document.querySelector('.js-delete');\r\nconst resetKey = document.querySelector('.js-reset');\r\nconst equalsKey = document.querySelector('.js-equals');\r\nconst currentEl = document.querySelector('.js-current');\r\nconst previousEl = document.querySelector('.js-previous');\r\n\r\nconst calc = new _js_Calculator__WEBPACK_IMPORTED_MODULE_1__.Calculator(currentEl, previousEl);\r\n\r\nnumberKeys.forEach((key) => {\r\n    key.addEventListener(\"click\", () => {\r\n        calc.appendNumber(key.innerText);\r\n        calc.updateDisplay();\r\n    })\r\n});\r\n\r\noperatorKeys.forEach((key) => {\r\n    key.addEventListener(\"click\", () => {\r\n        calc.selectOperation(key.innerText);\r\n        calc.updateDisplay();\r\n    });\r\n});\r\n\r\ndeleteKey.addEventListener(\"click\", () => {\r\n    calc.deleteOne();\r\n    calc.updateDisplay();\r\n});\r\n\r\nresetKey.addEventListener(\"click\", () => {\r\n    calc.clearScreen();\r\n    calc.updateDisplay();\r\n});\r\n\r\nequalsKey.addEventListener(\"click\", () => {\r\n    calc.calculate();\r\n    calc.updateDisplay();\r\n});\r\n\n\n//# sourceURL=webpack://09-calculator/./src/app.js?");

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
/******/ 			id: moduleId,
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
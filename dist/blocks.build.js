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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./src/blocks/blocks.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_block_block_js__ = __webpack_require__(/*! ./sample-block/block.js */ 1);\n/**\n * Blockart Blocks.\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2tzLmpzPzhiOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCbG9ja2FydCBCbG9ja3MuXG4gKi9cbmltcG9ydCAnLi9zYW1wbGUtYmxvY2svYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./src/blocks/sample-block/block.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\n\n// Banner-like block.\n\nregisterBlockType('blockart/sample-block', {\n\ttitle: 'Sample Block',\n\ticon: 'art',\n\tcategory: 'common',\n\tkeywords: ['Sample Block', 'Example Block'],\n\n\tattributes: {\n\t\ttext: {\n\t\t\ttype: 'string',\n\t\t\tselector: '.blkrt-sample-block',\n\t\t\tdefault: 'Hi! This is a sample block from the <strong>Blockart</strong> plugin.<br/>Nice to meet ya 😉'\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar text = attributes.text;\n\n\n\t\tvar onTextChange = function onTextChange(newText) {\n\t\t\tsetAttributes({ text: newText });\n\t\t};\n\n\t\treturn wp.element.createElement(RichText, {\n\t\t\tclassName: className + ' blkrt-sample-block',\n\t\t\ttagName: 'div',\n\t\t\tvalue: text,\n\t\t\tonChange: onTextChange,\n\t\t\tplaceholder: __('Enter some text here...', 'blockart')\n\t\t});\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className,\n\t\t    attributes = _ref2.attributes;\n\t\tvar text = attributes.text;\n\n\n\t\treturn wp.element.createElement(RichText.Content, {\n\t\t\tclassName: className + ' blkrt-sample-block',\n\t\t\ttagName: 'div',\n\t\t\tvalue: text,\n\t\t\tplaceholder: __('Enter some text here...', 'blockart')\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlLWJsb2NrL2Jsb2NrLmpzPzg0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBSaWNoVGV4dCA9IHdwLmVkaXRvci5SaWNoVGV4dDtcblxuLy8gQmFubmVyLWxpa2UgYmxvY2suXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdibG9ja2FydC9zYW1wbGUtYmxvY2snLCB7XG5cdHRpdGxlOiAnU2FtcGxlIEJsb2NrJyxcblx0aWNvbjogJ2FydCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFsnU2FtcGxlIEJsb2NrJywgJ0V4YW1wbGUgQmxvY2snXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy5ibGtydC1zYW1wbGUtYmxvY2snLFxuXHRcdFx0ZGVmYXVsdDogJ0hpISBUaGlzIGlzIGEgc2FtcGxlIGJsb2NrIGZyb20gdGhlIDxzdHJvbmc+QmxvY2thcnQ8L3N0cm9uZz4gcGx1Z2luLjxici8+TmljZSB0byBtZWV0IHlhIPCfmIknXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblx0XHR2YXIgdGV4dCA9IGF0dHJpYnV0ZXMudGV4dDtcblxuXG5cdFx0dmFyIG9uVGV4dENoYW5nZSA9IGZ1bmN0aW9uIG9uVGV4dENoYW5nZShuZXdUZXh0KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGV4dDogbmV3VGV4dCB9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnIGJsa3J0LXNhbXBsZS1ibG9jaycsXG5cdFx0XHR0YWdOYW1lOiAnZGl2Jyxcblx0XHRcdHZhbHVlOiB0ZXh0LFxuXHRcdFx0b25DaGFuZ2U6IG9uVGV4dENoYW5nZSxcblx0XHRcdHBsYWNlaG9sZGVyOiBfXygnRW50ZXIgc29tZSB0ZXh0IGhlcmUuLi4nLCAnYmxvY2thcnQnKVxuXHRcdH0pO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjIpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuXHRcdCAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblx0XHR2YXIgdGV4dCA9IGF0dHJpYnV0ZXMudGV4dDtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG5cdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICcgYmxrcnQtc2FtcGxlLWJsb2NrJyxcblx0XHRcdHRhZ05hbWU6ICdkaXYnLFxuXHRcdFx0dmFsdWU6IHRleHQsXG5cdFx0XHRwbGFjZWhvbGRlcjogX18oJ0VudGVyIHNvbWUgdGV4dCBoZXJlLi4uJywgJ2Jsb2NrYXJ0Jylcblx0XHR9KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL3NhbXBsZS1ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************!*\
  !*** ./src/blocks/sample-block/editor.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlLWJsb2NrL2VkaXRvci5zY3NzPzBkNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3Mvc2FtcGxlLWJsb2NrL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************************!*\
  !*** ./src/blocks/sample-block/style.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlLWJsb2NrL3N0eWxlLnNjc3M/Njg4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9zYW1wbGUtYmxvY2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
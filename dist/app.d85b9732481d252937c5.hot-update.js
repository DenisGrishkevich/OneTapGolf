"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateone_tap_golf"]("app",{

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! createjs-module */ \"./node_modules/createjs-module/createjs.js\");\n/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nclass Ball extends phaser__WEBPACK_IMPORTED_MODULE_0__.GameObjects.Sprite {\n    constructor(scene, props) {\n        const { x, y } = props;\n\n        super(scene, x, y, 'ball');\n\n        this.scene.add.existing(this);\n        this.setInteractive();\n        \n        this.pressTime = 0;\n    }\n\n    holdDown() {\n\n    }\n\n    release() {\n\n    }\n    \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmFsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25lLXRhcC1nb2xmLy4vc3JjL0JhbGwuanM/YTdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lT2JqZWN0cywgU2NlbmUsIFRpbWUsIEN1cnZlcyB9IGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgKiBhcyBjcmVhdGVqcyBmcm9tICdjcmVhdGVqcy1tb2R1bGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBCYWxsIGV4dGVuZHMgR2FtZU9iamVjdHMuU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgcHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBwcm9wcztcblxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgJ2JhbGwnKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcmVzc1RpbWUgPSAwO1xuICAgIH1cblxuICAgIGhvbGREb3duKCkge1xuXG4gICAgfVxuXG4gICAgcmVsZWFzZSgpIHtcblxuICAgIH1cbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Ball.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0229604911b6df35af1c")
/******/ })();
/******/ 
/******/ }
);
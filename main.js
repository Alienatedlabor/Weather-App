/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\nconst SEARCHBUTTON = document.querySelector('.search-button');\n\nasync function handleSubmit(e) {\n  e.preventDefault();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nSEARCHBUTTON.addEventListener('click', handleSubmit);\n\n// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature\n\n// const ftoc = function (farenheitInput) {\n//   let celsiusResult = ((farenheitInput - 32) * 5) / 9;\n//   celsiusResult = Math.round(celsiusResult * 10) / 10;\n//   return celsiusResult;\n// };\n\n// const ctof = function (celsiusInput) {\n//   let farenheitResult = (celsiusInput * 9) / 5 + 32;\n//   farenheitResult = Math.round(farenheitResult * 10) / 10;\n//   return farenheitResult;\n// };\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\n// query selectors\nconst currentCity = document.querySelector('.current-city');\nconst currentTemp = document.querySelector('.current-temp');\nconst feelsLike = document.querySelector('.feels-like');\nconst tempMax = document.querySelector('.temp-max');\nconst tempMin = document.querySelector('.temp-min');\nconst humidity = document.querySelector('.humidity');\nconst sunrise = document.querySelector('.sunrise');\nconst sunset = document.querySelector('.sunset');\n\n// function\nasync function updateView() {\n  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  currentCity.textContent = data.name;\n  currentTemp.textContent = data.main.temp;\n  feelsLike.textContent = data.feels_like;\n  tempMax.textContent = data.temp_max;\n  tempMin.textContent = data.temp_min;\n  humidity.textContent = data.humidity;\n  // sunrise.textContent = data.\n  // sunset.textContent = data.\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateView);\n\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SEARCHBAR = document.querySelector('.search-field');\n\n// getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API\n// Geocoding API documentation: https://openweathermap.org/api/geocoding-api\nasync function getCoordinates() {\n  const response = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${SEARCHBAR.value}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const data = await response.json();\n  const { lat, lon } = data[0];\n  return { lat, lon };\n}\n\n// getWeather() takes the latitude and longitude properties fetched by getCoordinates and retrieves current weather data for that location.\n// documentation: https://openweathermap.org/current\nasync function getWeather() {\n  const { lat, lon } = await getCoordinates();\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const weatherData = await response.json();\n  console.log(weatherData);\n  return weatherData;\n  // Set variable.textContent to weatherData.{whatever property we need to display (temperatures, etc, check console log for key names)}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
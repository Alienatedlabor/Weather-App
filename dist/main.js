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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\nconst SEARCHBUTTON = document.querySelector('.search-button');\n\nasync function handleSubmit(e) {\n  e.preventDefault();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateView)();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateWeeklyView)();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.changeBackgroundOnSearch)();\n}\n\nSEARCHBUTTON.addEventListener('click', handleSubmit);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBackgroundOnSearch\": () => (/* binding */ changeBackgroundOnSearch),\n/* harmony export */   \"updateView\": () => (/* binding */ updateView),\n/* harmony export */   \"updateWeeklyView\": () => (/* binding */ updateWeeklyView)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\n\n\n// query selectors\nconst currentCity = document.querySelector('.current-city');\nconst country = document.querySelector('.country');\nconst currentTemp = document.querySelector('.current-temp');\nconst feelsLike = document.querySelector('.feels-like');\nconst humidity = document.querySelector('.humidity');\nconst sunriseText = document.querySelector('.sunrise');\nconst sunsetText = document.querySelector('.sunset');\nconst description = document.querySelector('.description');\nconst container = document.querySelector('.grid-wrapper');\n\n// function\nasync function updateView() {\n  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();\n\n  const { convertedSunrise, convertedSunset } = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.timeConvert)(\n    data.sys.sunrise,\n    data.sys.sunset\n  );\n\n  currentCity.textContent = data.name;\n  currentTemp.textContent = data.main.temp;\n  feelsLike.textContent = data.main.feels_like;\n  description.textContent = data.weather[0].description;\n  humidity.textContent = data.main.humidity;\n  country.textContent = data.sys.country;\n  sunriseText.textContent = convertedSunrise;\n  sunsetText.textContent = convertedSunset;\n}\n\nasync function updateWeeklyView() {\n  const weeklyData = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeeklyWeather)();\n  console.log(weeklyData);\n}\nfunction setDefaultBackground() {}\n\nasync function changeBackgroundOnSearch() {\n  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();\n  const currentTime = data.dt;\n  const { sunrise, sunset } = data.sys;\n\n  if (currentTime >= sunrise && currentTime < sunset) {\n    // daytime image\n    container.style.backgroundImage =\n      'url(assets/aaron-burden-BTubi6qaY6Q-unsplash.jpg)';\n  } else {\n    // nighttime image\n    container.style.backgroundImage =\n      'url(assets/mason-field-efLEMOPlPW8-unsplash.jpg)';\n  }\n}\n// grab and insert icon on page:\n// let icon = \"https://openweathermap.org/img/wn/${iconCode}@2x.png\"\n\n// event listeners\nwindow.addEventListener('load', setDefaultBackground);\n\n\n\n//# sourceURL=webpack://weather-app/./src/ui.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cToF\": () => (/* binding */ cToF),\n/* harmony export */   \"fToC\": () => (/* binding */ fToC),\n/* harmony export */   \"getCurrentLocation\": () => (/* binding */ getCurrentLocation),\n/* harmony export */   \"timeConvert\": () => (/* binding */ timeConvert)\n/* harmony export */ });\n/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\n\nfunction timeConvert(sunriseUTC, sunsetUTC) {\n  const convertedSunrise = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sunriseUTC);\n  const convertedSunset = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sunsetUTC);\n  return { convertedSunrise, convertedSunset };\n}\n// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature\n// refactor for weather app\n\nconst fToC = (farenheitInput) => {\n  let celsiusResult = ((farenheitInput - 32) * 5) / 9;\n  celsiusResult = Math.round(celsiusResult * 10) / 10;\n  return celsiusResult;\n};\n\nconst cToF = (celsiusInput) => {\n  let farenheitResult = (celsiusInput * 9) / 5 + 32;\n  farenheitResult = Math.round(farenheitResult * 10) / 10;\n  return farenheitResult;\n};\n\nconst getCurrentLocation = () => {\n  const success = (position) => {\n    console.log(position);\n  };\n\n  const error = (err) => {\n    console.log(err);\n    alert('local weather cannot be displayed without location permissions');\n  };\n\n  navigator.geolocation.getCurrentPosition(success, error);\n};\n\nwindow.onload = () => {\n  getCurrentLocation();\n};\n\n\n// src=`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`\n\n\n//# sourceURL=webpack://weather-app/./src/utility.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather),\n/* harmony export */   \"getWeeklyWeather\": () => (/* binding */ getWeeklyWeather)\n/* harmony export */ });\nconst SEARCHBAR = document.querySelector('.search-field');\n\n// getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API\n// Geocoding API documentation: https://openweathermap.org/api/geocoding-api\nasync function getCoordinates() {\n  const response = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${SEARCHBAR.value}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const data = await response.json();\n  const { lat, lon } = data[0] || data;\n  return { lat, lon };\n}\n\n// getWeather() takes the latitude and longitude properties fetched by getCoordinates and retrieves current weather data for that location.\n// documentation: https://openweathermap.org/current\nasync function getWeather() {\n  const { lat, lon } = await getCoordinates();\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const weatherData = await response.json();\n  console.log(weatherData);\n  return weatherData;\n}\n// weeklyData.filter each list object that includes dt_txt: 13:00:00 and destructure for temp\nasync function getWeeklyWeather() {\n  const { lat, lon } = await getCoordinates();\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const weeklyData = await response.json();\n  console.log(weeklyData);\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
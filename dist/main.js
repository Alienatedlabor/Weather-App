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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let userSearch; // get element from DOM, we will set city to that on submit;\nconst SEARCHBAR = document.querySelector('.search-field');\nconst SEARCHBUTTON = document.getElementById('search-button');\n\n// getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API\n// Geocoding API documentation: https://openweathermap.org/api/geocoding-api\nasync function getCoordinates() {\n  const response = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${SEARCHBAR.value}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const data = await response.json();\n  const { lat, lon } = data[0];\n  return { lat, lon };\n}\n\n// getWeather() takes the latitude and longitude properties fetched by getCoordinates and retrieves current weather data for that location.\n// documentation: https://openweathermap.org/current\nasync function getWeather(lat, lon) {\n  getCoordinates(userSearch);\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  const weatherData = await response.json();\n  console.log(weatherData);\n  return weatherData;\n  // Set variable.textContent to weatherData.{whatever property we need to display (temperatures, etc, check console log for key names)}\n}\nasync function handleSubmit(e) {\n  e.preventDefault();\n  console.log(SEARCHBAR);\n  const { lat, lon } = await getCoordinates();\n  const weather = getWeather(lat, lon);\n  return weather;\n}\nSEARCHBUTTON.addEventListener('click', handleSubmit);\n\n// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature\n\n// const ftoc = function (farenheitInput) {\n//   let celsiusResult = ((farenheitInput - 32) * 5) / 9;\n//   celsiusResult = Math.round(celsiusResult * 10) / 10;\n//   return celsiusResult;\n// };\n\n// const ctof = function (celsiusInput) {\n//   let farenheitResult = (celsiusInput * 9) / 5 + 32;\n//   farenheitResult = Math.round(farenheitResult * 10) / 10;\n//   return farenheitResult;\n// };\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
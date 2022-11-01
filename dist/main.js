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

eval("//make dropdown menu to display full json array for city options\n//displays city with state, user clicks to get desired location weather\nlet userSearch; //get element from DOM, we will set city to that on submit;\nconst SEARCHBAR = document.querySelector('.search-field');\nconst SEARCHBUTTON = document.getElementById('search-button');\nSEARCHBUTTON.addEventListener('click', handleSubmit);\n\nfunction handleSubmit(e) {\n  e.preventDefault();\n  let city = getCity();\n  getCoordinates(city);\n}\n\nfunction getCity() {\n  return SEARCHBAR.value;\n}\n\n//getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API\n//Geocoding API documentation: https://openweathermap.org/api/geocoding-api\nasync function getCoordinates(city) {\n  let response = await fetch(\n    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  console.log(response);\n  let data = await response.json();\n  console.log(data);\n\n  const lat = data.coord.lat;\n  const lon = data.coord.lon;\n  console.log(lat);\n  console.log(lon);\n  let coordinates = { lat, lon };\n  return coordinates;\n}\n// console.log(data);\n//getWeather() takes the latitude and longitude properties fetched by getCoordinates and retrieves current weather data for that location.\n//documentation: https://openweathermap.org/current\nasync function getWeather(lat, lon) {\n  getCoordinates(userSearch);\n  let response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,\n    { mode: 'cors' }\n  );\n  console.log(response);\n  let weatherData = await response.json();\n  console.log(weatherData);\n  //Set variable.textContent to weatherData.{whatever property we need to display (temperatures, etc, check console log for key names)}\n}\n\n//test calls\n// getCoordinates('buffalo');\n// getWeather('42.8867166', '-78.8783922');\n\n// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature\n\nconst ftoc = function (farenheitInput) {\n  let celsiusResult = ((farenheitInput - 32) * 5) / 9;\n  celsiusResult = Math.round(celsiusResult * 10) / 10;\n  return celsiusResult;\n};\n\nconst ctof = function (celsiusInput) {\n  let farenheitResult = (celsiusInput * 9) / 5 + 32;\n  farenheitResult = Math.round(farenheitResult * 10) / 10;\n  return farenheitResult;\n};\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
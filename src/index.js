let userSearch; // get element from DOM, we will set city to that on submit;
const SEARCHBAR = document.querySelector('.search-field');
const SEARCHBUTTON = document.getElementById('search-button');

// getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API
// Geocoding API documentation: https://openweathermap.org/api/geocoding-api
async function getCoordinates() {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${SEARCHBAR.value}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  const data = await response.json();
  const { lat, lon } = data[0];
  return { lat, lon };
}

// getWeather() takes the latitude and longitude properties fetched by getCoordinates and retrieves current weather data for that location.
// documentation: https://openweathermap.org/current
async function getWeather(lat, lon) {
  getCoordinates(userSearch);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
  // Set variable.textContent to weatherData.{whatever property we need to display (temperatures, etc, check console log for key names)}
}
async function handleSubmit(e) {
  e.preventDefault();
  console.log(SEARCHBAR);
  const { lat, lon } = await getCoordinates();
  const weather = getWeather(lat, lon);
  return weather;
}
SEARCHBUTTON.addEventListener('click', handleSubmit);

// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature

// const ftoc = function (farenheitInput) {
//   let celsiusResult = ((farenheitInput - 32) * 5) / 9;
//   celsiusResult = Math.round(celsiusResult * 10) / 10;
//   return celsiusResult;
// };

// const ctof = function (celsiusInput) {
//   let farenheitResult = (celsiusInput * 9) / 5 + 32;
//   farenheitResult = Math.round(farenheitResult * 10) / 10;
//   return farenheitResult;
// };

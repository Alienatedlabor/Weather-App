const SEARCHBAR = document.querySelector('.search-field');

// getCoordinates() converts user city search into coordinates useable by the API call in getWeather() via Geocoding API
// Geocoding API documentation: https://openweathermap.org/api/geocoding-api
async function getCoordinates() {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${SEARCHBAR.value}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  const data = await response.json();
  const { lat, lon } = data[0] || data;
  return { lat, lon };
}

// getWeather() takes the latitude and longitude properties fetched by getCoordinates or getCurrentLocation and retrieves current weather data for that location.
// documentation: https://openweathermap.org/current
async function getWeather(lat, lon, units = 'metric') {
  // const { lat, lon } = await getCoordinates();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  return weatherData;
}
// weeklyData.filter each list object that includes dt_txt: 13:00:00 and destructure for temp
async function getWeeklyWeather() {
  const { lat, lon } = await getCoordinates();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  const weeklyData = await response.json();
  // console.log(weeklyData);
}
export { getWeather, getWeeklyWeather, getCoordinates };

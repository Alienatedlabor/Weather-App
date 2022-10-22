// let city = 'Buffalo';
// let state = '36';
// let country = '840';
//make dropdown menu to display full json array for city options
//displays city with state, user clicks to get desired location weather

let userSearch; //get element from DOM;
async function getCoordinates(city) {
  let response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
}

async function getWeather(lat, lon) {
  getCoordinates(userSearch);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9233d7d5b5dca12db8dc4eccb6554d50`,
    { mode: 'cors' }
  );
  console.log(response);
  let weatherData = await response.json();
  console.log(weatherData);
}
getCoordinates('buffalo');
getWeather('42.8867166', '-78.8783922');

import getWeather from './weather';

// query selectors
const currentCity = document.querySelector('.current-city');
const currentTemp = document.querySelector('.current-temp');
const feelsLike = document.querySelector('.feels-like');
const tempMax = document.querySelector('.temp-max');
const tempMin = document.querySelector('.temp-min');
const humidity = document.querySelector('.humidity');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

// function
async function updateView() {
  const data = await getWeather();

  currentCity.textContent = data.name;
  currentTemp.textContent = data.main.temp;
  feelsLike.textContent = data.feels_like;
  tempMax.textContent = data.temp_max;
  tempMin.textContent = data.temp_min;
  humidity.textContent = data.humidity;
  // sunrise.textContent = data.
  // sunset.textContent = data.
}

export default updateView;

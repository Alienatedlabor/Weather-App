import getWeather from './weather';
import { timeConvert } from './utility';

// query selectors
const currentCity = document.querySelector('.current-city');
const country = document.querySelector('.country');
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

  const { convertedSunrise, convertedSunset } = timeConvert(
    data.sys.sunrise,
    data.sys.sunset
  );

  currentCity.textContent = data.name;
  currentTemp.textContent = data.main.temp;
  feelsLike.textContent = data.main.feels_like;
  tempMax.textContent = data.main.temp_max;
  tempMin.textContent = data.main.temp_min;
  humidity.textContent = data.main.humidity;
  country.textContent = data.sys.country;
  sunrise.textContent = convertedSunrise;
  sunset.textContent = convertedSunset;
}

// grab and insert icon on page:
// let icon = "https://openweathermap.org/img/wn/${iconCode}@2x.png"

export default updateView;

import { getWeather, getWeeklyWeather } from './weather';
import { timeConvert } from './utility';

// query selectors
const currentCity = document.querySelector('.current-city');
const country = document.querySelector('.country');
const currentTemp = document.querySelector('.current-temp');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const sunriseText = document.querySelector('.sunrise');
const sunsetText = document.querySelector('.sunset');
const description = document.querySelector('.description');
const container = document.querySelector('.grid-wrapper');

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
  description.textContent = data.weather[0].description;
  humidity.textContent = data.main.humidity;
  country.textContent = data.sys.country;
  sunriseText.textContent = convertedSunrise;
  sunsetText.textContent = convertedSunset;
}

async function updateWeeklyView() {
  const weeklyData = await getWeeklyWeather();
  console.log(weeklyData);
}

async function changeBackground() {
  const data = await getWeather();
  const currentTime = data.dt;
  const { sunrise, sunset } = data.sys;
  if (currentTime >= sunrise && currentTime < sunset) {
    // daytime image
    container.style.backgroundImage =
      'url(../assets/aaron-burden-BTubi6qaY6Q-unsplash.jpg)';
  } else {
    // nighttime image
    container.style.backgroundImage =
      'url(assets/mason-field-efLEMOPlPW8-unsplash.jpg)';
  }
}
// grab and insert icon on page:
// let icon = "https://openweathermap.org/img/wn/${iconCode}@2x.png"

export { updateView, updateWeeklyView, changeBackground };

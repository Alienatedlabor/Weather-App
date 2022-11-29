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
const fiveDays = document.querySelectorAll('[data-weekday] .weekly-temp');
const iconContainer = document.querySelectorAll('.icon');
const weekdayContainer = document.querySelectorAll('.week-date');
// function
async function updateView(data) {
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

async function updateWeeklyView(weeklyData) {
  const results = weeklyData.list.filter((result) =>
    result.dt_txt.includes('12:00:00')
  );

  for (let i = 0; i <= 4; i++) {
    const iconCode = results[i].weather[0].icon;
    const imageURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconContainer[i].src = imageURL;

    // TEMP
    fiveDays[i].textContent = `${results[i].main.temp}`;

    // DAY
    const date = `${results[i].dt_txt.replaceAll('12:00:00', '')}`;
    const [year, month, day] = date.split('-');
    const formattedDate = [month, day, year].join('/ ');

    weekdayContainer[i].textContent = formattedDate;
  }
}

async function changeBackground(data) {
  const currentTime = data.dt;
  const { sunrise, sunset } = data.sys;

  if (currentTime >= sunrise && currentTime < sunset) {
    // daytime image
    container.style.backgroundImage =
      'url(assets/aaron-burden-BTubi6qaY6Q-unsplash.jpg)';
  } else {
    // nighttime image
    container.style.backgroundImage =
      'url(assets/mason-field-efLEMOPlPW8-unsplash.jpg)';
  }
}

// grab and insert icon on page:
// let icon = "https://openweathermap.org/img/wn/${iconCode}@2x.png"

// event listeners

export { updateView, updateWeeklyView, changeBackground };

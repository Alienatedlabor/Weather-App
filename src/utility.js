import fromUnixTime from 'date-fns/fromUnixTime';

function timeConvert(sunriseUTC, sunsetUTC) {
  const convertedSunrise = fromUnixTime(sunriseUTC);
  const convertedSunset = fromUnixTime(sunsetUTC);
  return { convertedSunrise, convertedSunset };
}
// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature
// refactor for weather app

const fToC = (farenheitInput) => {
  let celsiusResult = ((farenheitInput - 32) * 5) / 9;
  celsiusResult = Math.round(celsiusResult * 10) / 10;
  return celsiusResult;
};

const cToF = (celsiusInput) => {
  let farenheitResult = (celsiusInput * 9) / 5 + 32;
  farenheitResult = Math.round(farenheitResult * 10) / 10;
  return farenheitResult;
};
// geolocation API https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export { timeConvert, fToC, cToF, getCurrentLocation };

// src=`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

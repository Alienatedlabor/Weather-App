import { changeBackground, updateView, updateWeeklyView } from './ui';
import { getCoordinates, getWeather, getWeeklyWeather } from './weather';
import { getCurrentLocation } from './utility';

const SEARCHBAR = document.querySelector('.search-field');
const SEARCHBUTTON = document.querySelector('.search-button');
const unitSwitchButton = document.querySelector('.measurement-switch');
const unitSwitchText = document.querySelector('.measurement-switch span');
const currentTempUnit = document.querySelectorAll('.temp-unit');
let userLat;
let userLon;

async function handleUnitSwitch() {
  let units;

  if (unitSwitchText.textContent === 'F') {
    units = 'imperial';
    unitSwitchText.textContent = 'C';
    currentTempUnit.forEach((tempUnit) => {
      // eslint-disable-next-line no-param-reassign
      tempUnit.textContent = 'F';
    });
  } else if (unitSwitchText.textContent === 'C') {
    units = 'metric';
    unitSwitchText.textContent = 'F';
    currentTempUnit.textContent = 'C';
    currentTempUnit.forEach((tempUnit) => {
      // eslint-disable-next-line no-param-reassign
      tempUnit.textContent = 'C';
    });
  }

  const data = await getWeather(userLat, userLon, units);
  const weeklyData = await getWeeklyWeather(userLat, userLon, units);
  updateView(data);
  changeBackground(data);
  updateWeeklyView(weeklyData);
}

async function handleSubmit(e) {
  e.preventDefault();
  // lat lon is passed to updateView on submit
  const { lat, lon } = await getCoordinates();
  userLat = lat;
  userLon = lon;
  const data = await getWeather(userLat, userLon);

  updateView(data);
  changeBackground(data);
  const weeklyData = await getWeeklyWeather(userLat, userLon);
  handleUnitSwitch();
  updateWeeklyView(weeklyData);
  SEARCHBAR.value = '';
}

window.onload = async () => {
  const userLocation = await getCurrentLocation();
  userLat = userLocation.coords.latitude;
  userLon = userLocation.coords.longitude;
  const data = await getWeather(userLat, userLon);
  updateView(data);
  changeBackground(data);

  const weeklyData = await getWeeklyWeather(userLat, userLon);
  currentTempUnit.forEach((tempUnit) => {
    // eslint-disable-next-line no-param-reassign
    tempUnit.textContent = 'C';
  });
  updateWeeklyView(weeklyData);
};

unitSwitchButton.addEventListener('click', handleUnitSwitch);
SEARCHBUTTON.addEventListener('click', handleUnitSwitch);
SEARCHBUTTON.addEventListener('click', handleSubmit);
// TODO: style- main, and consider different background presentation

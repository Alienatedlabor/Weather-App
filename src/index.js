import { changeBackground, updateView, updateWeeklyView } from './ui';
import { getCoordinates, getWeather } from './weather';
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
  updateView(data);
  changeBackground(data);
}

async function handleSubmit(e) {
  e.preventDefault();
  // lat lon is passed to updateView on submit
  const { lat, lon } = await getCoordinates();
  userLat = lat;
  userLon = lon;
  const data = await getWeather(userLat, userLon);

  updateView(data);
  updateWeeklyView();
  changeBackground(data);
  SEARCHBAR.value = '';
}

window.onload = async () => {
  const userLocation = await getCurrentLocation();
  userLat = userLocation.coords.latitude;
  userLon = userLocation.coords.longitude;
  const data = await getWeather(userLat, userLon);
  updateView(data);
  changeBackground(data);
  currentTempUnit.forEach((tempUnit) => {
    // eslint-disable-next-line no-param-reassign
    tempUnit.textContent = 'C';
  });
};

unitSwitchButton.addEventListener('click', handleUnitSwitch);
SEARCHBUTTON.addEventListener('click', handleUnitSwitch);
SEARCHBUTTON.addEventListener('click', handleSubmit);

// TODO: attempt weekly weather
// TODO: style- main, and consider different background presentation

// maybe I can separate the userlocation call currently at bottom of handleUnitSwitch from the top half of handleUnitSwitch-
// handleUnitSwitch would only return and display correct unit based on button textContent,
// the onload and handleSubmit event  would take unit as argument

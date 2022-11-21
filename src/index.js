import { changeBackground, updateView, updateWeeklyView } from './ui';
import { getCoordinates, getWeather } from './weather';
import { getCurrentLocation } from './utility';

const SEARCHBAR = document.querySelector('.search-field');
const SEARCHBUTTON = document.querySelector('.search-button');
const unitSwitchButton = document.querySelector('.measurement-switch');
const unitSwitchText = document.querySelector('.measurement-switch span');
const currentTempUnit = document.querySelector('.current-temp-unit');
async function handleSubmit(e) {
  e.preventDefault();
  // lat lon is passed to updateView on submit
  const { lat, lon } = await getCoordinates();
  const data = await getWeather(lat, lon);

  updateView(data);
  updateWeeklyView();
  changeBackground(data);
  SEARCHBAR.value = '';
}

window.onload = async () => {
  const userLocation = await getCurrentLocation();
  const { latitude, longitude } = userLocation.coords;
  const data = await getWeather(latitude, longitude);
  updateView(data);
  changeBackground(data);
};

async function handleUnitSwitch() {
  let units;

  if (unitSwitchText.textContent === 'F') {
    units = 'imperial';
    unitSwitchText.textContent = 'C';
    currentTempUnit.textContent = 'F';
  } else if (unitSwitchText.textContent === 'C') {
    units = 'metric';
    unitSwitchText.textContent = 'F';
  }

  const userLocation = await getCurrentLocation();
  const { latitude, longitude } = userLocation.coords;
  const data = await getWeather(latitude, longitude, units);
  updateView(data);
  changeBackground(data);
}

unitSwitchButton.addEventListener('click', handleUnitSwitch);
SEARCHBUTTON.addEventListener('click', handleSubmit);

// TODO: refactor tempconversion in utility.js
// TODO: attempt weekly weather
// TODO: style- main, and consider different background presentation

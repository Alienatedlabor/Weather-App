import { changeBackground, updateView, updateWeeklyView } from './ui';
import { getCoordinates, getWeather } from './weather';

const SEARCHBAR = document.querySelector('.search-field');
const SEARCHBUTTON = document.querySelector('.search-button');

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

SEARCHBUTTON.addEventListener('click', handleSubmit);

// TODO: refactor tempconversion in utility.js
// TODO: attempt weekly weather
// TODO: style- main, and consider different background presentation

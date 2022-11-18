import { changeBackgroundOnSearch, updateView, updateWeeklyView } from './ui';
import { getCoordinates } from './weather';

const SEARCHBAR = document.querySelector('.search-field');
const SEARCHBUTTON = document.querySelector('.search-button');

async function handleSubmit(e) {
  e.preventDefault();
  // lat lon is passed to updateView on submit
  const { lat, lon } = await getCoordinates();

  updateView(lat, lon);
  updateWeeklyView();
  SEARCHBAR.value = '';
  // changeBackgroundOnSearch();
}

SEARCHBUTTON.addEventListener('click', handleSubmit);

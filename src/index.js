import { updateView, updateWeeklyView } from './ui';

const SEARCHBUTTON = document.querySelector('.search-button');

async function handleSubmit(e) {
  e.preventDefault();
  updateView();
  updateWeeklyView();
}

SEARCHBUTTON.addEventListener('click', handleSubmit);

import { changeBackground, updateView, updateWeeklyView } from './ui';

const SEARCHBUTTON = document.querySelector('.search-button');

async function handleSubmit(e) {
  e.preventDefault();
  updateView();
  updateWeeklyView();
  changeBackground();
}

SEARCHBUTTON.addEventListener('click', handleSubmit);

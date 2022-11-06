import updateView from './ui';

const SEARCHBUTTON = document.querySelector('.search-button');

async function handleSubmit(e) {
  e.preventDefault();
  updateView();
}

SEARCHBUTTON.addEventListener('click', handleSubmit);

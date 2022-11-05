import updateView from './ui';

const SEARCHBUTTON = document.querySelector('.search-button');

async function handleSubmit(e) {
  e.preventDefault();
  updateView();
}

SEARCHBUTTON.addEventListener('click', handleSubmit);

// these will run when the fahrenheit/celsius button is pressed and convert the fetched temperature

// const ftoc = function (farenheitInput) {
//   let celsiusResult = ((farenheitInput - 32) * 5) / 9;
//   celsiusResult = Math.round(celsiusResult * 10) / 10;
//   return celsiusResult;
// };

// const ctof = function (celsiusInput) {
//   let farenheitResult = (celsiusInput * 9) / 5 + 32;
//   farenheitResult = Math.round(farenheitResult * 10) / 10;
//   return farenheitResult;
// };

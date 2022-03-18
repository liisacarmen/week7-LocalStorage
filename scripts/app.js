const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const year = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const yearToDisplay = document.querySelector('.year');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if (titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    yearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(43, 43, 82, 0.733), rgba(95, 62, 62, 0.849)), url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearInput = year.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', yearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    yearToDisplay.textContent = yearInput;
    container.style.backgroundImage = `linear-gradient(rgba(43, 43, 82, 0.733), rgba(95, 62, 62, 0.849)), url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    year.value = '';
});
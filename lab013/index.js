const form = document.querySelector('form');

function addMovie(evt) {
    evt.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}


form.addEventListener('submit', addMovie);
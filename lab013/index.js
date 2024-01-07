const form = document.querySelector('form');
const message = document.querySelector('#message');

function addMovie(evt) {
    evt.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    movieTitle.addEventListener('click', crossOfMovie);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}

form.addEventListener('submit', addMovie);

function deleteMovie(evt) {
    evt.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
    revealMessage();
}

function crossOfMovie(evt) {
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')) message.textContent = 'Movie watched!';
    else message.textContent = 'Movie added back';
    revealMessage();
}

function revealMessage() {
    message.classList.remove('hide');
    setTimeout(() => { message.classList.add('hide') }, 1500)
}
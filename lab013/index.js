const form = document.querySelector('form');
const message = document.querySelector('#message');

function addMovie(evt) {
    evt.preventDefault();
    const inputField = document.querySelector('input');
    if (inputField.value.length == 0) return alert('Please enter valid name');
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
    message.textContent = `${evt.target.parentNode.firstChild.textContent} deleted!`;
    evt.target.parentNode.remove();
    revealMessage();
}

function crossOfMovie(evt) {
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')) message.textContent = `${evt.target.textContent} watched!`;
    else message.textContent = `${evt.target.textContent} added back`;
    revealMessage();
}

function revealMessage() {
    message.classList.remove('hide');
    setTimeout(() => { message.classList.add('hide') }, 1500)
}
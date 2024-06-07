const apiKey = '030c51c1604cc1c95d12ba9718b4826f'; 
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=it-IT&page=1`;


let allMovies = [];

function fetchPopularMovies() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            allMovies = data.results; 
            displayMovies(allMovies); 
        })
        .catch(error => {
            console.error('Errore nel recupero dei film:', error);
            displayError(error);
        });
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);

        moviesContainer.appendChild(movieCard);
    });
}

function displayError(error) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = `<p>Si è verificato un errore: ${error.message}</p>`;
}

function filterMovies(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

document.addEventListener('DOMContentLoaded', fetchPopularMovies);
document.getElementById('search-bar').addEventListener('input', filterMovies);

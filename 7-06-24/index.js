const apiKey = '030c51c1604cc1c95d12ba9718b4826f';
const baseApiUrl = 'https://api.themoviedb.org/3';
let allMovies = [];
let currentPage = 1;
let currentType = 'movie';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
        throw error;
    }
}

async function fetchPopularMovies(page = 1, type = 'movie') {
    const selectedGenre = document.getElementById('genre-selector').value;
    let apiUrl = `${baseApiUrl}/${type}/popular?api_key=${apiKey}&language=it-IT&page=${page}`;
    if (selectedGenre) {
        apiUrl += `&with_genres=${selectedGenre}`;
    }
    try {
        const data = await fetchData(apiUrl);
        allMovies = data.results;
        displayMovies(allMovies);
    } catch (error) {
        displayError(error);
    }
}

async function fetchGenres(type = 'movie') {
    const apiUrl = `${baseApiUrl}/genre/${type}/list?api_key=${apiKey}&language=it-IT`;
    try {
        const data = await fetchData(apiUrl);
        populateGenreSelector(data.genres);
    } catch (error) {
        console.error('Errore nel recupero dei generi:', error);
    }
}

function populateGenreSelector(genres) {
    const genreSelector = document.getElementById('genre-selector');
    genreSelector.innerHTML = '<option value="">Tutti i generi</option>';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;
        genreSelector.appendChild(option);
    });
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title || movie.name;

        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title || movie.name;

        const movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview;

        // Add star rating
        const starContainer = document.createElement('div');
        starContainer.className = 'star-container';
        const rating = Math.round(movie.vote_average / 2);
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = i < rating ? '★' : '☆';
            starContainer.appendChild(star);
        }

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);
        movieCard.appendChild(starContainer);

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
        (movie.title || movie.name).toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPopularMovies(currentPage, currentType);
    fetchGenres(currentType);
});

document.getElementById('search-bar').addEventListener('input', filterMovies);

document.getElementById('prev-page').addEventListener('click', async () => {
    if (currentPage > 1) {
        try {
            currentPage--;
            await fetchPopularMovies(currentPage, currentType);
        } catch (error) {
            console.error('Errore nel cambio di pagina:', error);
        }
    }
});

document.getElementById('next-page').addEventListener('click', async () => {
    try {
        currentPage++;
        await fetchPopularMovies(currentPage, currentType);
    } catch (error) {
        console.error('Errore nel cambio di pagina:', error);
    }
});

document.getElementById('type-selector').addEventListener('change', async (event) => {
    currentType = event.target.value;
    currentPage = 1;
    try {
        await fetchPopularMovies(currentPage, currentType);
        await fetchGenres(currentType);
    } catch (error) {
        console.error('Errore nel cambio di tipo:', error);
    }
});

document.getElementById('genre-selector').addEventListener('change', () => {
    fetchPopularMovies(currentPage, currentType);
});

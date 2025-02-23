async function getMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`);
    const movie = await response.json();

    document.getElementById("movie-details").innerHTML = `
        <h2>${movie.title}</h2>
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}">
        <p>${movie.overview}</p>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
    `;
}

getMovieDetails();

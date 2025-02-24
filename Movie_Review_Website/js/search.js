async function searchMovies() {
    const query = document.getElementById("search-box").value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8872a5e35bf341095d8158d8e449fa67&query=${query}`);
    const data = await response.json();

    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    data.results.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <p>Rating: ${movie.vote_average}</p>
            <a href="movie.html?id=${movie.id}">View Details</a>
        `;
        resultsContainer.appendChild(movieCard);
    });
}

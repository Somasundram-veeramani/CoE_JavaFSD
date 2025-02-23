const API_KEY = "8872a5e35bf341095d8158d8e449fa67"; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

document.addEventListener("DOMContentLoaded", fetchMovies);

async function fetchMovies() {
    const moviesContainer = document.getElementById("movies-container");

    try {
        const response = await fetch(API_URL);
        
       
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        moviesContainer.innerHTML = ""; 

        data.results.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
                <h3>${movie.title}</h3>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <p>Rating: ${movie.vote_average}</p>
                <a href="movie.html?id=${movie.id}">View Details</a>
            `;
            moviesContainer.appendChild(movieCard);
        });
    

    } catch (error) {
        console.error("Error fetching movies:", error);
        moviesContainer.innerHTML = "<p>⚠️ Failed to load movies. Check console for details.</p>";
    }
}

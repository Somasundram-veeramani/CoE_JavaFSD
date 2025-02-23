document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const movieName = document.getElementById("movie-name").value;
    const reviewText = document.getElementById("review-text").value;
    const rating = document.getElementById("rating").value;

    const review = {
        movieName,
        reviewText,
        rating
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.getElementById("review-form").reset();
    displayReviews();
});

function displayReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        reviewCard.innerHTML = `
            <h3>${review.movieName}</h3>
            <p>${review.reviewText}</p>
            <p><strong>Rating:</strong> ${review.rating}/10</p>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", displayReviews);

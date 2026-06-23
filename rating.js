document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const rating = parseInt(this.getAttribute("data-rating"));
            const starsContainer = this.parentElement;
            updateStars(starsContainer, rating);
        });
    });

    function updateStars(starsContainer, rating) {
        const stars = starsContainer.querySelectorAll(".star");

        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute("data-rating"));
            if (starRating <= rating) {
                star.classList.add("filled");
            } else {
                star.classList.remove("filled");
            }
        });
    }
});

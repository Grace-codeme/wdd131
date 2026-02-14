// review.js logic
document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current count from localStorage (convert string to number)
    let numReviews = Number(window.localStorage.getItem("reviews-submitted")) || 0;

    // 2. Increment the counter
    numReviews++;

    // 3. Store the updated total
    window.localStorage.setItem("reviews-submitted", numReviews);

    // 4. Display the total on the page
    const countDisplay = document.querySelector("#review-count-display");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }
});
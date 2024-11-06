// Scroll to the top of the page when called
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Flash the background color of an element
function flash(element) {
    element.style = "background-color: #9B9A6D;"; // Set initial background color
    var numberFlashes = 0; // Counter for flashes
    var highlighted = true; // Flag to toggle between highlighted and normal state

    // Toggle background color every 200ms
    var intervalId = setInterval(function() {
        if (highlighted) {
            element.style = ""; // Reset background color
            highlighted = false;
        } else {
            element.style = "background-color: #9B9A6D;"; // Highlight background color
            highlighted = true;
        }

        numberFlashes++; // Increment flash count

        // Stop flashing after 5 flashes
        if (numberFlashes === 5) {
            clearInterval(intervalId); // Clear interval to stop flashing
        }
    }, 200);
}

// Replace broken images with a placeholder image
document.querySelectorAll('img').forEach(img => {
    console.log("runs") // Log to indicate the function is running
    img.onerror = function() {
        this.onerror = null; // Remove error handler to prevent infinite loop
        this.src = '../js/placeholder-image.jpg'; // Set placeholder image as source
        this.alt = "" // Remove alt text for the placeholder
    };
});

// Scroll to the corresponding figure caption when athlete span is clicked
document.querySelectorAll("span.athlete").forEach(span => {
    span.onclick = function () {
        var element = Array.from(document.querySelectorAll("figcaption")).find(figcaption => figcaption.innerText === span.innerText);
        if (!element) {
            return; // Exit if no matching caption is found
        }
  
        element.scrollIntoView(); // Scroll to the figure caption
        flash(element); // Flash the caption background color
    };
});
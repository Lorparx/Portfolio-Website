// ===== CONTACT FORM FUNCTIONS =====

// Open the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the contact form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// ===== SLIDESHOW FUNCTIONS =====

// Display the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// Change the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Change the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // If n is greater than the number of slides, loop back to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // If n is less than 1, loop to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and activate its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// ===== EVENT LISTENERS =====

// Close the contact form when clicking outside of it
document.addEventListener("click", function(event) {
    if (
        event.target.matches(".cancel") ||
        (
            !event.target.closest(".form-popup") &&
            !event.target.closest(".Pop_Up_Button") &&
            !event.target.closest(".contact")
        )
    ) {
        closeForm();
    }
}, false);

// Prevent contact form from submitting and reloading the page
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form-container");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            closeForm();
            alert("Thank you for your message!");
        });
    }
});
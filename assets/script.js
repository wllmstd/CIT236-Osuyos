document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll("[data-testimonials-item]");

    testimonials.forEach(function (testimonial, index) {
        const images = testimonial.querySelectorAll(".zoomable-image");
        const overlay = testimonial.querySelector(".zoom-overlay");
        const zoomedImage = overlay.querySelector(".zoomed-image");
        const closeButton = overlay.querySelector(".close-button");

        images.forEach(function (image) {
            image.addEventListener("click", function () {
                overlay.style.display = "block";
                zoomedImage.src = image.getAttribute("data-zoom-src");
            });
        });

        closeButton.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    });
});

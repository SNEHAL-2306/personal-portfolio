const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const cross = document.getElementById('cross');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the navigation links
    menuToggle.classList.toggle('active'); // Toggle the active state for menu

    // Toggle the visibility of the cross icon and the hamburger bars
    if (navLinks.classList.contains('active')) {
        cross.style.display = 'block'; // Show cross icon
    } else {
        cross.style.display = 'none'; // Hide cross icon
    }
});
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Set the first image as active
images[currentIndex].classList.add('active');

// Change image every 3 seconds
setInterval(showNextImage, 3000);

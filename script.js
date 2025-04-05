/* script.js */
  // Image Carousel Logic
        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel img');
        
        function rotateImages() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        setInterval(rotateImages, 3000);  // Change image every 3 seconds

function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}
function toggleSearch() {
    document.getElementById('search-bar').classList.toggle('show');
}
function toggleNews(element) {
    element.querySelector('.full-content').classList.toggle('show');
}
// Hamburger Menu Toggle
        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }
function toggleNews(newsBox) {
    let fullContent = newsBox.querySelector(".full-content");
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "inline"; // Show full content
    } else {
        fullContent.style.display = "none"; // Hide full content
    }
}
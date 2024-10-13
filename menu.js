document.addEventListener("DOMContentLoaded", function() {
    // Fetch the content of 'menu.html' and insert it into the 'menu' div
    fetch('menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu').innerHTML = data;

            // Add the toggle functionality to the hamburger menu button
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('show');
                });
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

console.log("JavaScript is linked and running!");


document.addEventListener('DOMContentLoaded', (event) => {
    // Select all accordion items
    const accordions = document.querySelectorAll('.accordion h3');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle the "active" class on the clicked header
            this.classList.toggle('active');

            // Get the next sibling element (the panel)
            var panel = this.nextElementSibling;

            // Toggle the panel's display
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});


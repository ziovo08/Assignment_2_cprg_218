console.log("JavaScript is linked and running!");



document.addEventListener('DOMContentLoaded', (event) => {
    const accordions = document.querySelectorAll('.accordion h3');

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});

/* Icons */


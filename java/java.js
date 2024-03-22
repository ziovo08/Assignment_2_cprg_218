console.log("JavaScript is linked and running!");

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion h3');

    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');
            const panel = acc.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});

/* Attributions */
/* Accordion Code derived from w3schools https://www.w3schools.com/w3css/w3css_accordions.asp */
/* Reference to ES6 https://www.w3schools.com/js/js_es6.asp */
const dropdowns = document.querySelectorAll('.nav-links .dropdown');
function showDropdown(dropdown) {
    dropdown.classList.add('show');
}
function hideDropdown(dropdown) {
    dropdown.classList.remove('show');
}

dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    toggle.addEventListener('mouseenter', () => {
        setTimeout(() => showDropdown(dropdown), 200); 
    });

    dropdown.addEventListener('mouseleave', () => {
        setTimeout(() => hideDropdown(dropdown), 200);
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            hideDropdown(dropdown);
        }
    });
    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        if (dropdown.classList.contains('show')) {
            hideDropdown(dropdown);
        } else {
            showDropdown(dropdown);
        }
    });
});

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})
function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
    const text = "Connect with Your Roots";
    let i = 0;
    const speed = 100; 
    const delayBetweenRepeats = 1000; 

    function typeWriter() {
        if (i < text.length) {
            document.querySelector(".titleText").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.querySelector(".titleText").textContent = '';
                i = 0;
                typeWriter();
            }, delayBetweenRepeats);
        }
    }

    typeWriter();
});

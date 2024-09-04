
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
    const text = "Celebrate Artisan Excellence";
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


document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const postContainer = document.querySelector('.post.container');

    blogPosts.forEach((post, index) => {
        const postBox = document.createElement('div');
        postBox.classList.add('post-box', 'tech'); 

        postBox.innerHTML = `
            <img src="images/default.jpg" alt="" class="post-img">
            <h2 class="category">${post.category}</h2>
            <a href="#" class="post-title">${post.title}</a>
            <span class="post-date">${post.date}</span>
            <p class="post-description">${post.content}</p>
            <div class="profile">
                <img src="images/me.jpg" alt="" class="profile-img">
                <span class="profile-name">HM</span>
            </div>
        `;

        postBox.addEventListener('click', function() {
            openPopup(`popup${index + 1}`);
        });

        postContainer.appendChild(postBox);

        const popup = document.createElement('div');
        popup.id = `popup${index + 1}`;
        popup.classList.add('popup');

        popup.innerHTML = `
            <button class="close-btn" onclick="closePopup('popup${index + 1}')">Close</button>
            <img src="images/default.jpg" alt="" class="post-img">
            <h2 class="category">${post.category}</h2>
            <a href="#" class="post-title">${post.title}</a>
            <span class="post-date">${post.date}</span>
            <p class="post-description">${post.content}</p>
        `;

        postContainer.appendChild(popup);
    });

    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', function() {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
            document.querySelector('.overlay').style.display = 'none';
        });
    });
});

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
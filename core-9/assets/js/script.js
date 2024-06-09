// locomotive

let navscroll = document.getElementById("add-scroll-anim");

addEventListener("scroll", function () {
    // nav scroll BG COLOR

    if (window.scrollY > 80 && window.scrollY < 700) {
        navscroll.classList.add("d-none");
    } else {
        navscroll.classList.remove("d-none");
    }

    if (window.scrollY > 700) {
        navscroll.classList.add("after-scroll-nav");
    } else {
        navscroll.classList.remove("after-scroll-nav");
    }

    if (window.scrollY > 500) {
        this.document.getElementById("mti").classList.add("d-grid");
    } else {
        this.document.getElementById("mti").classList.remove("d-grid");
    }
});

// // Active 
const activeside = document.querySelectorAll(".nav-link");

// if we we click any link it will get active and the perticula function start working 
activeside.forEach((item) => item.addEventListener("click", activelink));

function activelink() {
    activeside.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

function navbg() {
    navscroll.classList.toggle("on-click-bg-color");
}

// Swiper js var swiper = new Swiper(".mySwiper", { watchSlidesProgress: true, slidesPerView: 3, });

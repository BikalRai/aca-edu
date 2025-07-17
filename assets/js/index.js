const hamburgerEl = document.querySelector("nav .hamburger");
const navEl = document.querySelector("nav .nav");

window.addEventListener("resize", () => {
  let viewWidth = window.innerWidth;

  if (viewWidth < 1130) {
    hamburgerEl.style.display = "block";
    navEl.style.display = "none";
    navEl.style.transform = "scale(0)";
  } else {
    hamburgerEl.style.display = "none";
    navEl.style.display = "flex";
    navEl.style.transform = "scale(1)";
  }
});

document.querySelector("header").addEventListener("click", function (e) {
  if (e.target.classList.contains("hamburger__bar")) {
    hamburgerEl.style.display = "none";
    navEl.style.display = "flex";
    navEl.style.transform = "scale(1)";
  }

  if (e.target.classList.contains("close__btn")) {
    hamburgerEl.style.display = "block";
    navEl.style.display = "none";
    navEl.style.transform = "scale(0)";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      slidesPerView: 9,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

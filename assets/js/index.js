const hamburgerEl = document.querySelector("nav .hamburger");
const navEl = document.querySelector("nav .nav");
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("resize", () => {
  let viewWidth = window.innerWidth;

  if (viewWidth >= 1200) {
    hamburgerEl.style.display = "none";
    navEl.classList.remove("show");
    navEl.style.display = "flex";
    navEl.style.width = "auto";
  } else {
    hamburgerEl.style.display = "block";
    navEl.classList.remove("show");
    navEl.style.display = "none";
    navEl.style.width = "0";
  }
});

document.querySelector("header").addEventListener("click", function (e) {
  if (e.target.classList.contains("hamburger__bar")) {
    navEl.classList.add("show");
    navEl.style.display = "flex";
    navEl.style.width = "100%";
  }

  if (e.target.classList.contains("close__btn")) {
    navEl.classList.remove("show");
    navEl.style.width = "0";
    setTimeout(() => {
      navEl.style.display = "none";
    }, 400);
  }
});

document.querySelector("main").addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    console.log(
      document.querySelectorAll(
        ".new__courses .new__courses_header--links li a"
      )
    );

    document
      .querySelectorAll(".new__courses .new__courses_header--links li a")
      .forEach((link) => {
        link.parentElement.classList.remove("active");
      });

    e.target.parentElement.classList.add("active");
  }
});

new WOW().init();

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  // Scroll smoothly to the header element
  const header = document.querySelector("header");
  if (header) {
    header.scrollIntoView({ behavior: "smooth" });
  } else {
    // fallback to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

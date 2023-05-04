const hamburgerBtn = document.querySelector(".header__hamburger");
const closeBtn = document.querySelector(".nav-mobile__closeBtn");
const navMobile = document.querySelector(".nav-mobile");

hamburgerBtn.addEventListener("click", (e) => {
  navMobile.style.display = "block";
  e.preventDefault();
});

closeBtn.addEventListener("click", (e) => {
  navMobile.style.display = "none";
  e.preventDefault();
});

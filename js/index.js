const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".nav-mobile-btn");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

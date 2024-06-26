const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".nav-mobile-btn");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Smooth Scrolling For Safari
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //
    const href = link.getAttribute("href");
    // console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //
    if (href !== "#" && href.startsWith("#")) {
      const selectedEl = document.querySelector(href);
      // console.log(selectedEl);
      selectedEl.scrollIntoView({ behavior: "smooth" });
    }
    //  For Mobile
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
      console.log("ok");
    }
  });
});

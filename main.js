
// =====================================
// MAZEN PORTFOLIO - MAIN JAVASCRIPT
// =====================================

// 1. Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.12
});

sections.forEach((section) => {
  observer.observe(section);
});


// 2. Highlight Active Navigation Link

const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        }
      });

    }

  });

}, {
  threshold: 0.5
});

sections.forEach((section) => {
  navObserver.observe(section);
});


// 3. Back To Top Button

const topButton = document.querySelector(".top");

if (topButton) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
      topButton.style.opacity = "1";
      topButton.style.pointerEvents = "auto";
    } else {
      topButton.style.opacity = "0";
      topButton.style.pointerEvents = "none";
    }

  });

}

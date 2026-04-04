const nav = document.getElementById("nav");
const reveals = document.querySelectorAll(".reveal");

function handleNavState() {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((section) => revealObserver.observe(section));
window.addEventListener("scroll", handleNavState);
handleNavState();

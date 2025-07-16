// Smooth scroll for navbar links (if not already handled in hero section)
const navLinks = document.querySelectorAll("nav a[href^='#']");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Scroll-based animation trigger
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-on-scroll");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hide-on-scroll");
  observer.observe(section);
});

// Optional: Dynamic current nav highlighting
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});

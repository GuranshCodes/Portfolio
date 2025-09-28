document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (!localStorage.getItem("theme")) {
    body.classList.add("dark-mode");
    body.style.background = "linear-gradient(135deg, #0a192f, #001f3f)";
    themeToggle.innerHTML = "☀️";
  } else if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    body.style.background = "#f5f5f5";
    themeToggle.innerHTML = "🌙";
  } else {
    body.classList.add("dark-mode");
    body.style.background = "linear-gradient(135deg, #0a192f, #001f3f)";
    themeToggle.innerHTML = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      body.style.background = "#f5f5f5";
      themeToggle.innerHTML = "🌙";
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      body.style.background = "linear-gradient(135deg, #0a192f, #001f3f)";
      themeToggle.innerHTML = "☀️";
    }
  });

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
});

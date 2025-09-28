document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  const setTheme = (mode) => {
    if (mode === "light") {
      body.classList.add("light-mode");
      toggleBtn.innerHTML = "🌞 Light Mode";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      toggleBtn.innerHTML = "🌙 Dark Mode";
      localStorage.setItem("theme", "dark");
    }
  };

  if (localStorage.getItem("theme") === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      setTheme("dark");
    } else {
      setTheme("light");
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

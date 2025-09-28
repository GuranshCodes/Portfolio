document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Default dark mode
    if (!localStorage.getItem("theme")) {
        body.classList.remove("light-mode");
        themeToggle.innerHTML = "🌙";
    } else {
        if (localStorage.getItem("theme") === "light") {
            body.classList.add("light-mode");
            themeToggle.innerHTML = "☀️";
        } else {
            body.classList.remove("light-mode");
            themeToggle.innerHTML = "🌙";
        }
    }

    // Toggle dark/light mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            themeToggle.innerHTML = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.innerHTML = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        body.classList.toggle("menu-open");
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest("header")) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            body.classList.remove("menu-open");
        }
    });
});

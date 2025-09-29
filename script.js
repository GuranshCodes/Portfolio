document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const customThemeBtn = document.getElementById("custom-theme-btn");
    const themeModal = document.getElementById("theme-modal");
    const cancelTheme = document.getElementById("cancel-theme");
    const applyTheme = document.getElementById("apply-theme");

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

    // Hamburger
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        body.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });

    // Custom Theme Modal
    customThemeBtn.addEventListener("click", () => {
        themeModal.classList.add("active");
    });
    cancelTheme.addEventListener("click", () => {
        themeModal.classList.remove("active");
    });

    applyTheme.addEventListener("click", () => {
        const bgStart = document.getElementById("bg-start").value;
        const bgEnd = document.getElementById("bg-end").value;
        const textPrimary = document.getElementById("text-primary").value;
        const textSecondary = document.getElementById("text-secondary").value;
        const accent = document.getElementById("accent").value;

        document.documentElement.style.setProperty('--dark-bg-start', bgStart);
        document.documentElement.style.setProperty('--dark-bg-end', bgEnd);
        document.documentElement.style.setProperty('--text-light', textPrimary);
        document.documentElement.style.setProperty('--text-dark', textSecondary);
        document.documentElement.style.setProperty('--primary-color', accent);

        themeModal.classList.remove("active");
    });
});

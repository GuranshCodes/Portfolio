document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const customThemeBtn = document.getElementById("theme-open");
    const themeModal = document.getElementById("theme-modal");
    const cancelTheme = document.getElementById("cancel-theme");
    const applyTheme = document.getElementById("apply-theme");
    const typedSubtitle = document.querySelector(".typed-subtitle");

    // Preset themes with dark and light variants
    const presetThemes = {
        moon: {
            dark: {
                bgStart: "#0a192f",
                bgEnd: "#001528",
                textPrimary: "#ffffff",
                textSecondary: "#8892b0",
                accent: "#00a8ff"
            },
            light: {
                bgStart: "#e0e7ff",
                bgEnd: "#c7d2fe",
                textPrimary: "#1e293b",
                textSecondary: "#475569",
                accent: "#3b82f6"
            }
        },
        neon: {
            dark: {
                bgStart: "#0f0f0f",
                bgEnd: "#1a1a1a",
                textPrimary: "#39ff14",
                textSecondary: "#0aff0a",
                accent: "#00ffea"
            },
            light: {
                bgStart: "#d0f0d0",
                bgEnd: "#a0e0a0",
                textPrimary: "#004400",
                textSecondary: "#006600",
                accent: "#00ffea"
            }
        },
        sunset: {
            dark: {
                bgStart: "#2c1a1a",
                bgEnd: "#4b2e2e",
                textPrimary: "#ffccbb",
                textSecondary: "#ff9988",
                accent: "#ff6655"
            },
            light: {
                bgStart: "#ffe6e1",
                bgEnd: "#ffccc7",
                textPrimary: "#663333",
                textSecondary: "#994d4d",
                accent: "#ff6655"
            }
        },
        ocean: {
            dark: {
                bgStart: "#00334d",
                bgEnd: "#005580",
                textPrimary: "#cce6ff",
                textSecondary: "#99ccff",
                accent: "#3399ff"
            },
            light: {
                bgStart: "#e6f2ff",
                bgEnd: "#cce6ff",
                textPrimary: "#00334d",
                textSecondary: "#005580",
                accent: "#3399ff"
            }
        },
        forest: {
            dark: {
                bgStart: "#0b2d0b",
                bgEnd: "#145214",
                textPrimary: "#b3e6b3",
                textSecondary: "#80cc80",
                accent: "#4d994d"
            },
            light: {
                bgStart: "#e6f2e6",
                bgEnd: "#ccf0cc",
                textPrimary: "#0b2d0b",
                textSecondary: "#145214",
                accent: "#4d994d"
            }
        }
    };

    // Current selected preset theme key
    let currentPreset = "moon";

    // Typed subtitle animation with more words and styling like the example website
    const words = ["Developer", "Programmer", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typedSubtitle.innerHTML = currentWord.substring(0, charIndex - 1) + '&nbsp;'.repeat(10);
            charIndex--;
        } else {
            typedSubtitle.innerHTML = currentWord.substring(0, charIndex + 1) + '&nbsp;'.repeat(10);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }

    typeWriter();

    // Apply a preset theme variant (dark or light)
    function applyPresetTheme(presetKey, variant) {
        const theme = presetThemes[presetKey][variant];
        document.documentElement.style.setProperty('--dark-bg-start', theme.bgStart);
        document.documentElement.style.setProperty('--dark-bg-end', theme.bgEnd);
        document.documentElement.style.setProperty('--text-light', theme.textPrimary);
        document.documentElement.style.setProperty('--text-dark', theme.textSecondary);
        document.documentElement.style.setProperty('--primary-color', theme.accent);
    }

    // Load theme from localStorage or default
    function loadTheme() {
        const savedPreset = localStorage.getItem("presetTheme");
        const savedVariant = localStorage.getItem("themeVariant");
        if (savedPreset && savedVariant && presetThemes[savedPreset]) {
            currentPreset = savedPreset;
            applyPresetTheme(currentPreset, savedVariant);
            if (savedVariant === "light") {
                body.classList.add("light-mode");
                themeToggle.innerHTML = "☀️";
            } else {
                body.classList.remove("light-mode");
                themeToggle.innerHTML = "🌙";
            }
        } else {
            // Default to moon dark
            currentPreset = "moon";
            applyPresetTheme(currentPreset, "dark");
            body.classList.remove("light-mode");
            themeToggle.innerHTML = "🌙";
        }
    }

    loadTheme();

    // Toggle dark/light mode with preset
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            // Switch to dark
            body.classList.remove("light-mode");
            applyPresetTheme(currentPreset, "dark");
            themeToggle.innerHTML = "🌙";
            localStorage.setItem("themeVariant", "dark");
        } else {
            // Switch to light
            body.classList.add("light-mode");
            applyPresetTheme(currentPreset, "light");
            themeToggle.innerHTML = "☀️";
            localStorage.setItem("themeVariant", "light");
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
        // Set current values to inputs
        const currentBgStart = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-start').trim();
        const currentBgEnd = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-end').trim();
        const currentTextPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim();
        const currentTextSecondary = getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim();
        const currentAccent = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        document.getElementById("bg-start").value = currentBgStart;
        document.getElementById("bg-end").value = currentBgEnd;
        document.getElementById("primary-text").value = currentTextPrimary;
        document.getElementById("secondary-text").value = currentTextSecondary;
        document.getElementById("accent-color").value = currentAccent;

        themeModal.classList.add("active");
    });

    cancelTheme.addEventListener("click", () => {
        // Restore previous theme
        loadTheme();
        themeModal.classList.remove("active");
    });

    // Live preview
    const inputs = document.querySelectorAll('#theme-modal input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const bgStart = document.getElementById("bg-start").value;
            const bgEnd = document.getElementById("bg-end").value;
            const textPrimary = document.getElementById("primary-text").value;
            const textSecondary = document.getElementById("secondary-text").value;
            const accent = document.getElementById("accent-color").value;

            document.documentElement.style.setProperty('--dark-bg-start', bgStart);
            document.documentElement.style.setProperty('--dark-bg-end', bgEnd);
            document.documentElement.style.setProperty('--text-light', textPrimary);
            document.documentElement.style.setProperty('--text-dark', textSecondary);
            document.documentElement.style.setProperty('--primary-color', accent);
        });
    });

    applyTheme.addEventListener("click", () => {
        const bgStart = document.getElementById("bg-start").value;
        const bgEnd = document.getElementById("bg-end").value;
        const textPrimary = document.getElementById("primary-text").value;
        const textSecondary = document.getElementById("secondary-text").value;
        const accent = document.getElementById("accent-color").value;

        const customThemeData = {
            bgStart,
            bgEnd,
            textPrimary,
            textSecondary,
            accent
        };

        localStorage.setItem("customTheme", JSON.stringify(customThemeData));
        localStorage.removeItem("presetTheme");
        localStorage.removeItem("themeVariant");

        themeModal.classList.remove("active");
    });

    // Preset theme buttons
    const presetButtons = document.querySelectorAll(".preset-btn");
    presetButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");
            currentPreset = selectedTheme;
            // Apply current variant or default to dark
            const variant = body.classList.contains("light-mode") ? "light" : "dark";
            applyPresetTheme(currentPreset, variant);
            localStorage.setItem("presetTheme", currentPreset);
            localStorage.setItem("themeVariant", variant);
            themeModal.classList.remove("active");
        });
    });
});

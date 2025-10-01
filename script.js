document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeSwitch = document.getElementById('theme-switch');
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const customThemeBtn = document.getElementById("theme-open");
    const themeModal = document.getElementById("theme-modal");
    const cancelTheme = document.getElementById("cancel-theme");
    const applyThemeBtn = document.getElementById("apply-theme");
    const typedSubtitle = document.querySelector(".typed-subtitle");

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
        },
        lavender: {
            dark: {
                bgStart: "#4b3f72",
                bgEnd: "#6a5d8f",
                textPrimary: "#e6e6fa",
                textSecondary: "#c8c8ff",
                accent: "#b497bd"
            },
            light: {
                bgStart: "#f3e8ff",
                bgEnd: "#dcd0ff",
                textPrimary: "#4b3f72",
                textSecondary: "#6a5d8f",
                accent: "#b497bd"
            }
        },
        coral: {
            dark: {
                bgStart: "#7f3f3f",
                bgEnd: "#a65a5a",
                textPrimary: "#ffe6e6",
                textSecondary: "#ffb3b3",
                accent: "#ff6666"
            },
            light: {
                bgStart: "#fff0f0",
                bgEnd: "#ffd6d6",
                textPrimary: "#7f3f3f",
                textSecondary: "#a65a5a",
                accent: "#ff6666"
            }
        },
        teal: {
            dark: {
                bgStart: "#004d4d",
                bgEnd: "#007373",
                textPrimary: "#ccffff",
                textSecondary: "#99ffff",
                accent: "#33cccc"
            },
            light: {
                bgStart: "#e0ffff",
                bgEnd: "#b3ffff",
                textPrimary: "#004d4d",
                textSecondary: "#007373",
                accent: "#33cccc"
            }
        },
        amber: {
            dark: {
                bgStart: "#664d00",
                bgEnd: "#997300",
                textPrimary: "#fff8cc",
                textSecondary: "#ffeb99",
                accent: "#ffcc33"
            },
            light: {
                bgStart: "#fff9e6",
                bgEnd: "#fff2b3",
                textPrimary: "#664d00",
                textSecondary: "#997300",
                accent: "#ffcc33"
            }
        },
        plum: {
            dark: {
                bgStart: "#4b004b",
                bgEnd: "#6a006a",
                textPrimary: "#e6ccff",
                textSecondary: "#c8aaff",
                accent: "#b366b3"
            },
            light: {
                bgStart: "#f3e6f3",
                bgEnd: "#dcd0dc",
                textPrimary: "#4b004b",
                textSecondary: "#6a006a",
                accent: "#b366b3"
            }
        }
    };

    let currentPreset = "moon";

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

    function applyPresetTheme(presetKey, variant) {
        const theme = presetThemes[presetKey][variant];
        document.documentElement.style.setProperty('--dark-bg-start', theme.bgStart);
        document.documentElement.style.setProperty('--dark-bg-end', theme.bgEnd);
        document.documentElement.style.setProperty('--text-light', theme.textPrimary);
        document.documentElement.style.setProperty('--text-dark', theme.textSecondary);
        document.documentElement.style.setProperty('--primary-color', theme.accent);
    }

    function updateThemePreview() {
        const bgStart = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-start').trim();
        const bgEnd = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-end').trim();
        const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim();
        const textSecondary = getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim();
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        const themePreview = document.querySelector('.theme-preview');
        if (themePreview) {
            themePreview.style.background = `linear-gradient(${bgStart}, ${bgEnd})`;
            themePreview.style.color = textPrimary;
            themePreview.style.border = `2px solid ${accent}`;
        }
    }

    function applyTheme(presetKey, variant) {
        console.log("Applying theme:", presetKey, variant);
        currentPreset = presetKey;
        localStorage.setItem("presetTheme", currentPreset);
        localStorage.setItem("themeVariant", variant);
        applyPresetTheme(currentPreset, variant);

        // Update the theme switch icon color to the current theme accent color
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        if (themeSwitch) {
            themeSwitch.querySelectorAll('svg').forEach(svg => {
                svg.style.fill = accentColor;
            });
        }

        updateThemePreview();

        if (variant === "light") {
            body.classList.add("light-mode");
            animateToSun();
        } else {
            body.classList.remove("light-mode");
            animateToMoon();
        }
    }

    function loadTheme() {
        const savedPreset = localStorage.getItem("presetTheme");
        const savedVariant = localStorage.getItem("themeVariant");
        if (savedPreset && savedVariant && presetThemes[savedPreset]) {
            applyTheme(savedPreset, savedVariant);
        } else {
            applyTheme("moon", "dark");
        }
    }

    // SVG path data for moon and sun shapes
    const moonPath = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";
    const sunPath = "M12 4.354a7.646 7.646 0 1 0 0 15.292 7.646 7.646 0 0 0 0-15.292zm0 13.292a5.646 5.646 0 1 1 0-11.292 5.646 5.646 0 0 1 0 11.292z";

    let themeIconPath;

    function animateToSun() {
        if (themeIconPath) {
            themeIconPath.setAttribute('d', sunPath);
        }
    }

    function animateToMoon() {
        if (themeIconPath) {
            themeIconPath.setAttribute('d', moonPath);
        }
    }

    themeIconPath = document.getElementById('theme-icon-path');

    // Initialize icon based on current theme
    if (localStorage.getItem('themeVariant') === 'light') {
        animateToSun();
    } else {
        animateToMoon();
    }

    loadTheme();

    themeSwitch.addEventListener('click', () => {
        console.log("Dark mode toggle clicked");
        const currentThemeVariant = localStorage.getItem('themeVariant') || 'dark';
        console.log("Current theme variant:", currentThemeVariant);
        const newVariant = currentThemeVariant === 'light' ? 'dark' : 'light';
        console.log("New variant:", newVariant);
        applyTheme(currentPreset, newVariant);
    });

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

    customThemeBtn.addEventListener("click", () => {
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
        console.log("Theme modal opened");
    });

    cancelTheme.addEventListener("click", () => {
        loadTheme();
        themeModal.classList.remove("active");
    });

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

            updateThemePreview();
        });
    });

    applyThemeBtn.addEventListener("click", () => {
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
        // Update themeVariant based on light-mode class
        const variant = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("themeVariant", variant);

        themeModal.classList.remove("active");
    });

    const presetButtons = document.querySelectorAll(".preset-btn");
    presetButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");
            currentPreset = selectedTheme;
            const variant = body.classList.contains("light-mode") ? "light" : "dark";
            applyTheme(currentPreset, variant);
            themeModal.classList.remove("active");
        });
    });
});

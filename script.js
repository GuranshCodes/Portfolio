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
                accent: "#00a8ff",
                borderColor: "#444",
                shadowColor: "rgba(0, 0, 0, 0.5)",
                buttonBgColor: "#007bff",
                buttonTextColor: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px"
            },
            light: {
                bgStart: "#e0e7ff",
                bgEnd: "#c7d2fe",
                textPrimary: "#1e293b",
                textSecondary: "#475569",
                accent: "#3b82f6",
                borderColor: "#ccc",
                shadowColor: "rgba(0, 0, 0, 0.1)",
                buttonBgColor: "#3b82f6",
                buttonTextColor: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px"
            }
        },
        neon: {
            dark: {
                bgStart: "#0f0f0f",
                bgEnd: "#1a1a1a",
                textPrimary: "#39ff14",
                textSecondary: "#0aff0a",
                accent: "#00ffea",
                borderColor: "#39ff14",
                shadowColor: "rgba(57, 255, 20, 0.3)",
                buttonBgColor: "#00ffea",
                buttonTextColor: "#0f0f0f",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px"
            },
            light: {
                bgStart: "#d0f0d0",
                bgEnd: "#a0e0a0",
                textPrimary: "#004400",
                textSecondary: "#006600",
                accent: "#00ffea",
                borderColor: "#00aa00",
                shadowColor: "rgba(0, 170, 0, 0.2)",
                buttonBgColor: "#00ffea",
                buttonTextColor: "#004400",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px"
            }
        },
        sunset: {
            dark: {
                bgStart: "#2c1a1a",
                bgEnd: "#4b2e2e",
                textPrimary: "#ffccbb",
                textSecondary: "#ff9988",
                accent: "#ff6655",
                borderColor: "#aa4444",
                shadowColor: "rgba(170, 68, 68, 0.3)",
                buttonBgColor: "#ff6655",
                buttonTextColor: "#ffffff",
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px"
            },
            light: {
                bgStart: "#ffe6e1",
                bgEnd: "#ffccc7",
                textPrimary: "#663333",
                textSecondary: "#994d4d",
                accent: "#ff6655",
                borderColor: "#cc9999",
                shadowColor: "rgba(204, 153, 153, 0.2)",
                buttonBgColor: "#ff6655",
                buttonTextColor: "#ffffff",
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px"
            }
        },
        ocean: {
            dark: {
                bgStart: "#00334d",
                bgEnd: "#005580",
                textPrimary: "#cce6ff",
                textSecondary: "#99ccff",
                accent: "#3399ff",
                borderColor: "#0066aa",
                shadowColor: "rgba(0, 102, 170, 0.3)",
                buttonBgColor: "#3399ff",
                buttonTextColor: "#ffffff",
                fontFamily: "'Lato', sans-serif",
                fontSize: "16px"
            },
            light: {
                bgStart: "#e6f2ff",
                bgEnd: "#cce6ff",
                textPrimary: "#00334d",
                textSecondary: "#005580",
                accent: "#3399ff",
                borderColor: "#99ccff",
                shadowColor: "rgba(153, 204, 255, 0.2)",
                buttonBgColor: "#3399ff",
                buttonTextColor: "#ffffff",
                fontFamily: "'Lato', sans-serif",
                fontSize: "16px"
            }
        },
        forest: {
            dark: {
                bgStart: "#0b2d0b",
                bgEnd: "#145214",
                textPrimary: "#b3e6b3",
                textSecondary: "#80cc80",
                accent: "#4d994d",
                borderColor: "#2d662d",
                shadowColor: "rgba(45, 102, 45, 0.3)",
                buttonBgColor: "#4d994d",
                buttonTextColor: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px"
            },
            light: {
                bgStart: "#e6f2e6",
                bgEnd: "#ccf0cc",
                textPrimary: "#0b2d0b",
                textSecondary: "#145214",
                accent: "#4d994d",
                borderColor: "#80cc80",
                shadowColor: "rgba(128, 204, 128, 0.2)",
                buttonBgColor: "#4d994d",
                buttonTextColor: "#ffffff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px"
            }
        },

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
        document.documentElement.style.setProperty('--border-color', theme.borderColor);
        document.documentElement.style.setProperty('--shadow-color', theme.shadowColor);
        document.documentElement.style.setProperty('--button-bg-color', theme.buttonBgColor);
        document.documentElement.style.setProperty('--button-text-color', theme.buttonTextColor);
        document.documentElement.style.setProperty('--font-family', theme.fontFamily);

        const introText = document.querySelector('.intro-text h1');
        if (introText) {
            introText.style.color = theme.textPrimary;
            introText.style.fontFamily = theme.fontFamily;
        }
    }

    function updateThemePreview() {
        const bgStart = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-start').trim();
        const bgEnd = getComputedStyle(document.documentElement).getPropertyValue('--dark-bg-end').trim();
        const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-light').trim();
        const textSecondary = getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim();
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        const buttonBgColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-color').trim();
        const buttonTextColor = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color').trim();
        const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();
        const fontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size').trim();

        const themePreview = document.querySelector('.theme-preview');
        if (themePreview) {
            themePreview.style.background = `linear-gradient(${bgStart}, ${bgEnd})`;
            themePreview.style.color = textPrimary;
            themePreview.style.border = `2px solid ${accent}`;
            themePreview.style.fontFamily = fontFamily;
            themePreview.style.fontSize = fontSize;
        }

        const previewBtn = document.querySelector('.preview-btn');
        if (previewBtn) {
            previewBtn.style.backgroundColor = buttonBgColor;
            previewBtn.style.color = buttonTextColor;
        }
    }

    function applyTheme(presetKey, variant) {
        console.log("Applying theme:", presetKey, variant);
        currentPreset = presetKey;
        localStorage.setItem("presetTheme", currentPreset);
        localStorage.setItem("themeVariant", variant);
        applyPresetTheme(currentPreset, variant);
        setTimeout(() => updateTimeCardTheme(), 50);

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
        applyTheme("moon", "dark");
    }

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
        const currentBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();
        const currentShadowColor = getComputedStyle(document.documentElement).getPropertyValue('--shadow-color').trim();
        const currentButtonBgColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-color').trim();
        const currentButtonTextColor = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color').trim();
        const currentFontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();
        const currentFontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--font-size').trim());

        document.getElementById("bg-start").value = currentBgStart;
        document.getElementById("bg-end").value = currentBgEnd;
        document.getElementById("primary-text").value = currentTextPrimary;
        document.getElementById("secondary-text").value = currentTextSecondary;
        document.getElementById("accent-color").value = currentAccent;
        document.getElementById("border-color").value = currentBorderColor;
        document.getElementById("shadow-color").value = currentShadowColor;
        document.getElementById("button-bg-color").value = currentButtonBgColor;
        document.getElementById("button-text-color").value = currentButtonTextColor;
        document.getElementById("font-family").value = currentFontFamily;
        document.getElementById("font-size").value = currentFontSize;

        themeModal.classList.add("active");
        document.body.classList.add('modal-open');
        console.log("Theme modal opened");
    });

    cancelTheme.addEventListener("click", () => {
        const saved = localStorage.getItem('customTheme');
        if (saved) {
            const data = JSON.parse(saved);
            document.documentElement.style.setProperty('--dark-bg-start', data.bgStart);
            document.documentElement.style.setProperty('--dark-bg-end', data.bgEnd);
            document.documentElement.style.setProperty('--text-light', data.textPrimary);
            document.documentElement.style.setProperty('--text-dark', data.textSecondary);
            document.documentElement.style.setProperty('--primary-color', data.accent);
            document.documentElement.style.setProperty('--border-color', data.borderColor);
            document.documentElement.style.setProperty('--shadow-color', data.shadowColor);
            document.documentElement.style.setProperty('--button-bg-color', data.buttonBgColor);
            document.documentElement.style.setProperty('--button-text-color', data.buttonTextColor);
            document.documentElement.style.setProperty('--font-family', data.fontFamily);
            document.documentElement.style.setProperty('--font-size', data.fontSize + 'px');
        } else {
            loadTheme();
        }
        themeModal.classList.remove("active");
        document.body.classList.remove('modal-open');
    });

    const inputs = document.querySelectorAll('#theme-modal input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const bgStart = document.getElementById("bg-start").value;
            const bgEnd = document.getElementById("bg-end").value;
            const textPrimary = document.getElementById("primary-text").value;
            const textSecondary = document.getElementById("secondary-text").value;
            const accent = document.getElementById("accent-color").value;
            const borderColor = document.getElementById("border-color").value;
            const shadowColor = document.getElementById("shadow-color").value;
            const buttonBgColor = document.getElementById("button-bg-color").value;
            const buttonTextColor = document.getElementById("button-text-color").value;
            const fontFamily = document.getElementById("font-family").value;
            const fontSize = document.getElementById("font-size").value;

            document.documentElement.style.setProperty('--dark-bg-start', bgStart);
            document.documentElement.style.setProperty('--dark-bg-end', bgEnd);
            document.documentElement.style.setProperty('--text-light', textPrimary);
            document.documentElement.style.setProperty('--text-dark', textSecondary);
            document.documentElement.style.setProperty('--primary-color', accent);
            document.documentElement.style.setProperty('--border-color', borderColor);
            document.documentElement.style.setProperty('--shadow-color', shadowColor);
            document.documentElement.style.setProperty('--button-bg-color', buttonBgColor);
            document.documentElement.style.setProperty('--button-text-color', buttonTextColor);
            document.documentElement.style.setProperty('--font-family', fontFamily);
            document.documentElement.style.setProperty('--font-size', fontSize + 'px');

            const fontFamilySelect = document.getElementById('font-family');
            if (fontFamilySelect) {
                fontFamilySelect.style.fontFamily = fontFamily;
            }

            updateThemePreview();
        });
    });
    const fontFamilySelect = document.getElementById("font-family");
    fontFamilySelect.addEventListener('change', () => {
        const fontFamily = fontFamilySelect.value;
        document.documentElement.style.setProperty('--font-family', fontFamily);
        fontFamilySelect.style.fontFamily = fontFamily;
        updateThemePreview();
    });

    applyThemeBtn.addEventListener("click", () => {
        const bgStart = document.getElementById("bg-start").value;
        const bgEnd = document.getElementById("bg-end").value;
        const textPrimary = document.getElementById("primary-text").value;
        const textSecondary = document.getElementById("secondary-text").value;
        const accent = document.getElementById("accent-color").value;
        const borderColor = document.getElementById("border-color").value;
        const shadowColor = document.getElementById("shadow-color").value;
        const buttonBgColor = document.getElementById("button-bg-color").value;
        const buttonTextColor = document.getElementById("button-text-color").value;
        const fontFamily = document.getElementById("font-family").value;
        const fontSize = document.getElementById("font-size").value;

        const customThemeData = {
            bgStart,
            bgEnd,
            textPrimary,
            textSecondary,
            accent,
            borderColor,
            shadowColor,
            buttonBgColor,
            buttonTextColor,
            fontFamily,
            fontSize
        };

        localStorage.setItem("customTheme", JSON.stringify(customThemeData));
        localStorage.removeItem("presetTheme");
        const variant = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("themeVariant", variant);

        themeModal.classList.remove("active");
        document.body.classList.remove('modal-open');
        setTimeout(() => updateTimeCardTheme(), 50);
    });

    const presetButtons = document.querySelectorAll(".preset-btn");
    presetButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");
            currentPreset = selectedTheme;
            const variant = body.classList.contains("light-mode") ? "light" : "dark";
            applyTheme(currentPreset, variant);
            setTimeout(() => updateTimeCardTheme(), 50);
            themeModal.classList.remove("active");
            document.body.classList.remove('modal-open');
        });
    });

    themeModal.addEventListener('click', (e) => {
        if (e.target === themeModal) {
            cancelTheme.click();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && themeModal.classList.contains('active')) {
            cancelTheme.click();
        }
    });

    function updateBramptonTime() {
        const timeElement = document.querySelector('.current-time');
        if (!timeElement) return;
        
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Toronto',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        timeElement.textContent = formatter.format(new Date());
    }
    
    function updateTimeCardTheme() {
    }
    
    updateBramptonTime();
    setInterval(updateBramptonTime, 1000);
    updateTimeCardTheme();

    const filterButtons = document.querySelectorAll('.filter-btn');
    const clearFilterBtn = document.querySelector('.filter-clear');
    const projectCards = document.querySelectorAll('.project-card');

    function updateProjectVisibility() {
        const active = Array.from(document.querySelectorAll('.filter-btn.active')).map(b => b.dataset.tech).filter(t => t && t !== 'all');
        if (active.length === 0) {
            projectCards.forEach(c => c.style.display = '');
            document.querySelector('.filter-btn[data-tech="all"]').classList.add('active');
            return;
        }
        document.querySelector('.filter-btn[data-tech="all"]').classList.remove('active');
        projectCards.forEach(card => {
            const techs = card.getAttribute('data-tech') || '';
            
            const matches = active.every(a => techs.split(/\s+/).includes(a));
            card.style.display = matches ? '' : 'none';
        });
    }

    filterButtons.forEach(b => {
        b.addEventListener('click', () => {
            const tech = b.dataset.tech;
            if (tech === 'all') {
                document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
            } else {
                b.classList.toggle('active');
                document.querySelector('.filter-btn[data-tech="all"]').classList.remove('active');
            }
            
            filterButtons.forEach(btn => btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false'));
            updateProjectVisibility();
        });
    });

    
    filterButtons.forEach(btn => btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false'));

    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
            document.querySelector('.filter-btn[data-tech="all"]').classList.add('active');
            updateProjectVisibility();
        });
    }
});
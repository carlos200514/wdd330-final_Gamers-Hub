import "./pages/home.js";

export function loadTheme() {
    const theme =
        localStorage.getItem(
            "theme"
        );
    if (theme === "dark") {
        document.body.classList.add(
            "dark"
        );
    }
}

export function toggleTheme() {
    document.body.classList.toggle(
        "dark"
    );
    const dark =
        document.body.classList.contains(
            "dark"
        );
    localStorage.setItem(
        "theme",
        dark
            ? "dark"
            : "light"
    );
}

loadTheme();

const themeButton =
    document.getElementById(
        "theme-toggle"
    );
if (themeButton) {
    themeButton.addEventListener(
        "click",
        toggleTheme
    );
}
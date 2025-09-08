
// =======================
// Elements
// =======================
const html = document.documentElement;
const overlay = document.querySelector(".overlay");
const navPart = document.querySelector(".navPart");
const cart = document.querySelector(".cart");
const submenu = document.querySelector(".submenu");
const submenuBtn = document.querySelector(".submenu-open-btn");

// =======================
// Theme toggle
// =======================
document.addEventListener("click", (e) => {
    if (e.target.closest(".toggle-theme")) {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }
});

// =======================
// Submenu toggle
// =======================
submenuBtn.addEventListener("click", () => {
    submenu.classList.toggle("submenu--open");
    submenuBtn.parentElement.classList.toggle("text-orange-300");
});

// =======================
// Open/close panels
// =======================
function openPanel(panel, showClass, hideClass) {
    panel.classList.remove(hideClass);
    panel.classList.add(showClass);
    overlay.classList.add("overlay--visible");
}

function closePanel(panel, showClass, hideClass) {
    panel.classList.add(hideClass);
    panel.classList.remove(showClass);
    overlay.classList.remove("overlay--visible");
}

// =======================
// Nav open/close
// =======================
document.addEventListener("click", (e) => {
    if (e.target.closest(".nav-icon")) {
        openPanel(navPart, "right-0", "-right-64");
    }
    if (e.target.closest(".navCloseBtn")) {
        closePanel(navPart, "right-0", "-right-64");
    }
});

// =======================
// Cart open/close
// =======================
document.addEventListener("click", (e) => {
    if (e.target.closest(".cart-icon")) {
        openPanel(cart, "left-0", "-left-64");
    }
    if (e.target.closest(".cartCloseBtn")) {
        closePanel(cart, "left-0", "-left-64");
    }
});

// =======================
// Overlay click closes both panels
// =======================
overlay.addEventListener("click", () => {
    closePanel(navPart, "right-0", "-right-64");
    closePanel(cart, "left-0", "-left-64");
});

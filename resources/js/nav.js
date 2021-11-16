const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-item");
const button = document.querySelector(".menu-button");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const links = document.querySelector(".link-list");

function buttonToggled() {
    if (!menu.classList.contains("hoverToggled")) {
        if (menu.classList.contains("buttonToggled")) {
            menu.classList.remove("buttonToggled");
            toggleMenu();
        } else {
            menu.classList.add("buttonToggled");
            toggleMenu();
        }
    } 
}

function hoverToggled() {
    if (!menu.classList.contains("buttonToggled")) {
        if (menu.classList.contains("hoverToggled")) {
            menu.classList.remove("hoverToggled");
            toggleMenu();
        } else {
            menu.classList.add("hoverToggled");
            toggleMenu();
        }
    } 
}

function toggleMenu() {
    if (menu.classList.contains("visibleMenu")) {
        menu.classList.remove("visibleMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        links.style.display = "none";
    } else {
        menu.classList.add("visibleMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        links.style.display = "block";
    }
}

button.addEventListener("click", buttonToggled);
menu.addEventListener("mouseenter", hoverToggled);
menu.addEventListener("mouseleave", hoverToggled);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


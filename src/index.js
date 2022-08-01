let img_profile = document.getElementById("img-profile"), menus = document.getElementById("menus"), btn_toggle_menu_nav = document.getElementById("toggle-btn-nav-menus"), nav_menus = document.getElementById("navigations-menus"), header_menu = document.getElementById("header-menu");

img_profile.addEventListener("click", function () {
    if (menus.classList.contains("hidden")) {
        menus.classList.remove("hidden");
        menus.classList.add("block");
    } else {
        menus.classList.add("hidden");
        menus.classList.remove("block");
    }
}, false);

document.addEventListener('click', function (e) {
    if (e.target.id !== "img-profile") {
        if (!menus.classList.contains("hidden")) menus.classList.add("hidden");
        if (menus.classList.contains("block")) menus.classList.remove("block");
    }
}, false);

btn_toggle_menu_nav.addEventListener("click", function () {
    if (nav_menus.classList.contains("w-2/12")) {
        nav_menus.classList.remove("w-2/12");
        if (!nav_menus.classList.contains("w-1/12")) nav_menus.classList.add("w-1/12");
        if (header_menu.classList.contains("w-10/12")) header_menu.classList.remove("w-10/12");
        if (!header_menu.classList.contains("w-11/12")) header_menu.classList.add("w-11/12");
        if (header_menu.classList.contains("ml-2/12")) header_menu.classList.remove("ml-2/12");
        if (!header_menu.classList.contains("ml-1/12")) header_menu.classList.add("ml-1/12");
    } else {
        nav_menus.classList.add("w-2/12");
        if (nav_menus.classList.contains("w-1/12")) nav_menus.classList.remove("w-1/12");
        if (header_menu.classList.contains("w-11/12")) header_menu.classList.remove("w-11/12");
        if (!header_menu.classList.contains("w-10/12")) header_menu.classList.add("w-10/12");
        if (header_menu.classList.contains("ml-1/12")) header_menu.classList.remove("ml-1/12");
        if (!header_menu.classList.contains("ml-2/12")) header_menu.classList.add("ml-2/12");
    }
});
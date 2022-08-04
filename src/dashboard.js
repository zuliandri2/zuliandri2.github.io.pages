import { chart1, chart2, chart3, chart4 } from './chartStyles';

let Dashboard = function () {
    let img_profile = document.getElementById("img-profile"), menus = document.getElementById("menus"), btn_toggle_menu_nav = document.getElementById("toggle-btn-nav-menus"), nav_menus = document.getElementById("navigations-menus"), header_menu = document.getElementById("header-menu"), side_content = document.getElementById("side-content"), body = document.querySelector("body");

    function initModule() {
        chart1();
        chart2();
        chart3();
        chart4();

        body.onload = function () {
            let spinner = document.querySelector("#load-spinner");
            if (!spinner.classList.contains("hidden")) spinner.classList.add("hidden");
            if (body.classList.contains("overflow-hidden")) body.classList.remove("overflow-hidden");
        };

        img_profile.addEventListener("click", function () {
            if (menus.classList.contains("hidden")) {
                menus.classList.remove("hidden");
                menus.classList.add("block");
            } else {
                menus.classList.add("hidden");
                menus.classList.remove("block");
            }
        }, false);

        btn_toggle_menu_nav.addEventListener("click", function () {
            if (nav_menus.classList.contains("w-[15%]")) {
                nav_menus.classList.remove("w-[15%]");
                if (!nav_menus.classList.contains("w-[10%]")) nav_menus.classList.add("w-[10%]");
                if (side_content.classList.contains("ml-[15%]")) side_content.classList.remove("ml-[15%]");
                if (!side_content.classList.contains("ml-[10%]")) side_content.classList.add("ml-[10%]");
                if (header_menu.classList.contains("w-[85%]")) header_menu.classList.remove("w-[85%]");
                if (!header_menu.classList.contains("w-[90%]")) header_menu.classList.add("w-[90%]");
            } else {
                nav_menus.classList.add("w-[15%]");
                if (nav_menus.classList.contains("w-[10%]")) nav_menus.classList.remove("w-[10%]");
                if (side_content.classList.contains("ml-[10%]")) side_content.classList.remove("ml-[10%]");
                if (!side_content.classList.contains("ml-[15%]")) side_content.classList.add("ml-[15%]");
                if (header_menu.classList.contains("w-[90%]")) header_menu.classList.remove("w-[90%]");
                if (!header_menu.classList.contains("w-[85%]")) header_menu.classList.add("w-[85%]");
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target.id !== "img-profile") {
                if (!menus.classList.contains("hidden")) menus.classList.add("hidden");
                if (menus.classList.contains("block")) menus.classList.remove("block");
            }
        }, false);
    }

    return {
        init: function () {
            initModule();
        }
    };
};

export { Dashboard };
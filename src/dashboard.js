import { chart1, chart2, chart3, chart4 } from './chartStyles';
import React from 'react';

export function Dashboard() {
    let img_profile = document.getElementById("img-profile"),
        menus = document.getElementById("menus"),
        btn_toggle_menu_nav = document.getElementById("toggle-btn-nav-menus"),
        body = document.querySelector("body");
    
    function bodyLoad() {
        let spinner = document.querySelector("#load-spinner");
        if (!spinner.classList.contains("hidden")) spinner.classList.add("hidden");
        if (body.classList.contains("overflow-hidden")) body.classList.remove("overflow-hidden");
    }

    function infoAccountPopUp(e) {
        if (e.target.id !== "img-profile") {
            if (!menus.classList.contains("hidden")) menus.classList.add("hidden");
            if (menus.classList.contains("block")) menus.classList.remove("block");
        }
    }

    body.onload = bodyLoad;
    document.addEventListener('click', infoAccountPopUp, false);
}
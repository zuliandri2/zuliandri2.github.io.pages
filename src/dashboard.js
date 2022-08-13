import React from 'react';

export function Dashboard() {
    function bodyLoad() {
        let body = document.querySelector("body");
        let spinner = document.querySelector("#load-spinner");
        if (!spinner.classList.contains("hidden")) spinner.classList.add("hidden");
        if (body.classList.contains("overflow-hidden")) body.classList.remove("overflow-hidden");
    }

    return bodyLoad;
}
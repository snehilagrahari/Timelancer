import sidebar from "../../Components/sidebar.js"

    document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun , Clients , Projects , Tasks } from "../sidebarFun.js"

    sidebarFun();


import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
        
    
import {navbarFun} from "../navbarFun.js";
    
navbarFun();

// JS for Dropdown button
let click = document.querySelector('.click');

let list = document.querySelector('.list');

click.addEventListener("click",()=>{

list.classList.toggle('newlist');

            });
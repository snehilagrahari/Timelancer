import sidebar from "./Components/sidebar.js"
document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun , Clients , Projects , Tasks } from "./Scripts/sidebarFun.js"
sidebarFun();

import navbar from "./Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
import {navbarFun} from "./Scripts/navbarFun.js";

navbarFun();


    window.onload = () => {
        document.getElementById("new-project").onclick = () =>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Projects();
        }
    }
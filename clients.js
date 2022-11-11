import sidebar from "./Components/sidebar.js"

document.getElementById("sidebar").innerHTML = sidebar();

import { sidebarFun, Clients, Projects, Tasks } from "./Scripts/sidebarFun.js"

sidebarFun();
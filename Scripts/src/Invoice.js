import sidebar from "../../Components/sidebar.js";

  document.getElementById("sidebar").innerHTML = sidebar();

  import {
    sidebarFun,
    Clients,
    Projects,
    Tasks,
  } from "../sidebarFun.js";

  sidebarFun();

  import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
    

import {navbarFun} from "../navbarFun.js";

navbarFun();
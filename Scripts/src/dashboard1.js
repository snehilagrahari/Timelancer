import sidebar from "../../Components/sidebar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun,Clients,Projects,Tasks} from "../sidebarFun.js";

sidebarFun();

import getTime from "../TimeGen.js";

window.onload = () => {
    let {day, date, month, time} = getTime();
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = day;
    document.getElementById("time").innerText = time;


    document.getElementById("show-dash").onclick = () => {
        document.getElementById("dash").style.display = "block" ;
        document.getElementById("dash-link").style.visibility = "hidden";
    }
    document.getElementById("hide-dash").onclick = () => {
        document.getElementById("dash").style.display = "none";
        document.getElementById('dash-link').style.visibility = "visible";
    }
    document.getElementById("new-client").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Clients();
    }
    document.getElementById("new-project").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Projects();
    }
    document.getElementById("new-task").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Tasks();
    }
}
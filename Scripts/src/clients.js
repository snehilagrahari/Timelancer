import sidebar from "../../Components/sidebar.js"

document.getElementById("sidebar").innerHTML = sidebar();

import { sidebarFun, Clients, clientSubmit, loader } from "../sidebarFun.js"

sidebarFun();
import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();


import { navbarFun } from "../navbarFun.js";

navbarFun();



window.onload = () => {
    document.getElementById("add-client-btn").onclick = () => {
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Clients();
        clientSubmit()
    }
    appendClients(getClients())

}










async function getClients() {

    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/clients`);

    let data = res.json();

    return data;
}

async function appendClients(d) {
    loader("tbody");
    let data = await d;
    let box = document.getElementById("tbody");
    let i = 0;

    box.innerHTML = null;


    data.forEach(function (el) {
        i++;

        let row = document.createElement("tr");


        let col1 = document.createElement("td");
        col1.innerText = i;

        let col2 = document.createElement("td");
        col2.innerText = el.name;

        let col3 = document.createElement("td");
        col3.innerText = el.email;

        let col4 = document.createElement("td");
        col4.innerText = `<i class="fa-solid fa-trash-can"style="color:red;cursor:pointer;"></i>`;
        col4.onclick = () => {
            deleteInvoice(el.id);
        }







        row.append(col1, col2, col3, col4);
        box.append(row);
    })
}

const deleteInvoice = async (id) => {
    loader("tbody");
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/clients/${id}`, {
        method: 'DELETE',
    })

    let data = await res.json();

    appendClients(getClients());
}








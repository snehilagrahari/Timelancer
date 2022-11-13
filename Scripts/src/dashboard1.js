import sidebar from "../../Components/sidebar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun, Clients, Projects, Tasks, Invoices, taskSubmit, invoiceSubmit, projectSubmit, clientSubmit, loader} from "../sidebarFun.js";

sidebarFun();

import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
    

import {navbarFun} from "../navbarFun.js";

navbarFun();


import getTime from "../TimeGen.js";


window.onload = () => {
    let {day, date, month, time} = getTime();
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = day;
    document.getElementById("time").innerText = time;

    getDetails();


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
        clientSubmit();
    }
    document.getElementById("new-project").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Projects();
        projectSubmit();
    }
    document.getElementById("new-task").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Tasks();
        taskSubmit();
    }
    document.getElementById("send-an-invoice").onclick = () => {
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Invoices();
        invoiceSubmit();
    }
    appendClients();
    appendProjects();
    appendTasks();
    appendInvoices();
}


async function getClients()
{
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/clients`);
    let data = await res.json();

    return data;
}
async function getProjects()
{
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/projects`);
    let data = await res.json();
    return data;
}
async function getTasks()
{
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/tasks`);
    let data = await res.json();
    return data;
}
async function getInvoices()
{
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/invoices`);
    let data = await res.json();
    return data;
}

async function appendClients()
{
    loader("clients-table");
    let data = await getClients();
    let box = document.getElementById("clients-table");
    box.innerHTML = null;
    let i=0;
    if(data!=null)
    {
        data.forEach(function(el){
            i++;
            let str = `<tr>
            <td>${i}.</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
        </tr>`
            box.innerHTML += str;
        })
    }
}
async function appendProjects()
{
    loader("projects-table");
    let data = await getProjects();
    let box = document.getElementById("projects-table");
    box.innerHTML = null;
    let i=0;
    if(data!=null)
    {
        data.forEach(function(el){
            i++;
            let str = `<tr>
            <td>${i}.</td>
            <td>${el.project}</td>
            <td>${el.client}</td>
            <td>${el.due_date}</td>
        </tr>`
            box.innerHTML += str;
        })
    }
}
async function appendTasks()
{
    loader("tasks-table");
    let data = await getTasks();
    let box = document.getElementById("tasks-table");
    box.innerHTML = null;
    let i=0;
    if(data!=null)
    {
        data.forEach(function(el){
            i++;
            let str = `<tr>
            <td>${i}.</td>
            <td>${el.task}</td>
            <td>${el.project}</td>
            <td>${el.due_date}</td>
        </tr>`
            box.innerHTML += str;
        })
    }
}
async function appendInvoices()
{
    loader("invoices-table");
    let data = await getInvoices();
    let box = document.getElementById("invoices-table");
    box.innerHTML = null;
    let i=0;
    if(data!=null)
    {
        data.forEach(function(el){
            i++;
            let str = `<tr>
            <td>${i}.</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
            <td>${el.gen_date}</td>
        </tr>`
            box.innerHTML += str;
        })
    }
}
async function getDetails(){

    mainLoaderON();

    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/user`);

    let data = await res.json();

    let nameArr = data.username.split(' ');
    let name = nameArr[0];
    document.getElementById("acc_name").innerText = name;
    mainLoaderOFF();
}
function mainLoaderON()
{
    document.getElementById("main_loader").style.display = "grid";
}
function mainLoaderOFF()
{
    document.getElementById("main_loader").style.display = "none";
}
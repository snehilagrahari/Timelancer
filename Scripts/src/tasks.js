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

// New task button onclick event

let newTask = document.getElementById("newTask");
newTask.addEventListener("click", function(){
    console.log("inside tasks");
    document.getElementById("new-data").style.display = "grid";
    document.getElementById("form").innerHTML = Tasks();
})

// JS for table appending


async function loadIntotable(url, table){

    const tableBody = table.querySelector("tbody");

    const response = await fetch(url);
    const data = await response.json();

   console.log(data)

   // appending the rows

   data.forEach(el => {

    const rowElement = document.createElement("tr");

    rowElement.style.backgroundColor = "#e8ebf1"

    let task_data = document.createElement("td");
    task_data.innerHTML = `<input id="checkbox" type="checkbox">${el.task}`;
    task_data.style.textAlign="left"

    let project_data = document.createElement("td")
    project_data.innerText = el.project;

    let due_date = document.createElement("td");
    due_date.innerText = el.due_date;

    let btn = document.createElement("td");
    btn.innerText = "ACTIVE";
    console.log("under btn")

    if(el.status=="active")
    {
        btn.innerText="ACTIVE";
        btn.onclick=()=>{
            markAsCompleted(el);
        }
    }
    else{
        btn.innerText="COMPLETED";
        btn.onclick = function() {
            masrkasactive(el.id);
        }
    }
//   trying to functionalize the 3 dot methods

  rowElement.append(task_data,project_data,due_date,btn)

    tableBody.appendChild(rowElement);
   });

}

loadIntotable("https://obscure-wave-86373.herokuapp.com/tasks", document.querySelector("table"));

// API key (heroku) - https://obscure-wave-86373.herokuapp.com/tasks

 
// Kindly DO NOT DELETE the below code --------------------------------------------
/*
function masrkasactive(el){
    alert("Task marked as active")

    if(el.status == "completed"){

        let send_this_data = {
            status : "active"
        }
    
        let res = await fetch(`https://obscure-wave-86373.herokuapp.com/tasks/${el}`, {
    
        method: 'PATCH',
    
        body: JSON.stringify(send_this_data),
        headers : {
            'Content-Type': 'application/json'
        }
        })
        let data = await res.json();
        console.log('data:', data)

        
    }

    
}

function markAsCompleted(el){
    alert("Task marked as completed")

    if(el.status == "completed"){
        let send_this_data = {
            status : "completed"
        }
    
        let res = await fetch(`https://obscure-wave-86373.herokuapp.com/tasks/${el}`, {
    
        method: 'PATCH',
    
        body: JSON.stringify(send_this_data),
        headers : {
            'Content-Type': 'application/json'
        }
        })
        let data = await res.json();
        console.log('data:', data)
    }
    
}

*/

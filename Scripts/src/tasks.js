import sidebar from "../../Components/sidebar.js"

    document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun , loader,  Tasks, taskSubmit } from "../sidebarFun.js"

    sidebarFun();


import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
        
    
import {navbarFun} from "../navbarFun.js";
    
navbarFun();


// New task button onclick event

window.onload = () =>{

    let newTask = document.getElementById("newTask");
newTask.addEventListener("click", function(){
   console.log("inside tasks");
    document.getElementById("new-data").style.display = "grid";
    document.getElementById("form").innerHTML = Tasks();
    taskSubmit();
})
appendTask();

document.getElementById("dropdown_activeBtn").onchange = () =>{
    console.log("yes printed")
    loadIntotable();
}
}

// JS for table appending


async function loadIntotable(){

    const tableBody = document.getElementById("tableBody");
    loader("tableBody");
    let status = document.getElementById("dropdown_activeBtn").value;
    if(status=="active" || status=="completed")
 {
    const response = await fetch(`https://timelancer-be.onrender.com/tasks?status=${status}`);
    const data = await response.json();
    let i = 0;
    tableBody.innerHTML = null;

   console.log(data)

   // appending the rows

   data.forEach(el => {
    i++;

    const rowElement = document.createElement("tr");
    
    let sr_no = document.createElement("td");
    sr_no.innerText = i;

    let task_data = document.createElement("td");
    task_data.innerText = el.task;

    let project_data = document.createElement("td")
    project_data.innerText = el.project;

    let due_date = document.createElement("td");
    due_date.innerText = el.due_date;

    let time = document.createElement("td");
    time.innerText = el.time+" sec";

    let col5 = document.createElement("td");
      col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
      col5.onclick = ()=>{
        deleteTask(el.id);
      }

    let btn = document.createElement("td");
    btn.style.cursor="pointer";
    
    //console.log("under btn")

    if(el.status=="active")
    {
        btn.innerText="ACTIVE";
        btn.style.color= "red";
        btn.onclick= async ()=>{
            markAsCompleted(el.id);
        }
    }
    else{
        btn.innerText="COMPLETED";
        btn.style.color = "green";
        btn.onclick = async ()=> {
            masrkasactive(el.id);
        }
    }

    rowElement.append(sr_no,task_data,project_data,due_date,time,col5,btn);
    tableBody.appendChild(rowElement);
   });
  }
else{
    appendTask();
}
}



async function getTask(){

    let res = await fetch(`https://timelancer-be.onrender.com/tasks`);
    let data = await res.json();
    return data;
}

async function appendTask(){

    let i = 0;
    loader("tableBody");
    let data = await getTask();
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML=null;

    data.forEach(function(el){
        i++;

    
    const rowElement = document.createElement("tr");

    let sr_no = document.createElement("td");
    sr_no.innerText = i;

    let task_data = document.createElement("td");
    task_data.innerText = el.task;
    // task_data.style.textAlign="left"

    let project_data = document.createElement("td")
    project_data.innerText = el.project;

    let due_date = document.createElement("td");
    due_date.innerText = el.due_date;

    let time = document.createElement("td");
    time.innerText = el.time+" sec";

    let col5 = document.createElement("td");
      col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
      col5.onclick = ()=>{
        deleteTask(el.id);
      }

    let btn = document.createElement("td");
    btn.style.cursor="pointer";
    
    //console.log("under btn")

    if(el.status=="active")
    {
        btn.innerText="ACTIVE";
        btn.style.color= "red";
        btn.onclick= async ()=>{
            markAsCompleted(el.id);
        }
    }
    else{
        btn.innerText="COMPLETED";
        btn.style.color = "green";
        btn.onclick = async () => {
            masrkasactive(el.id);
        }
    }


    rowElement.append(sr_no,task_data,project_data,due_date,time,col5,btn)
    tableBody.append(rowElement);
   });
         
}

// delete task

const deleteTask = async (id) =>{
    loader("tableBody");
    let res = await fetch(`https://timelancer-be.onrender.com/tasks/${id}`,{
      method : 'DELETE',
    })
  
    let data = await res.json();
  
    appendTask();
}

const markAsCompleted = async (id)=>
{
    loader("tableBody");

    let send_data = {
        status: 'completed'
    }
    let res = await fetch(`https://timelancer-be.onrender.com/tasks/${id}`, {
        method : 'PATCH',
        body : JSON.stringify(send_data),
        headers :{
            'Content-Type' : 'application/json'
          }
    })
    let data = await res.json();

    appendTask();
}

const masrkasactive = async (id)=>{
    loader("tableBody");
  
    let send_data = {
      status : 'active'
    }
    let res = await fetch(`https://timelancer-be.onrender.com/tasks/${id}`,{
      method : 'PATCH',
      body : JSON.stringify(send_data),
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    let data = await res.json();
  
  
    appendTask();
  }

































// loadIntotable(document.querySelector("table"));

// API key (heroku) - https://timelancer-be.onrender.com/tasks

 
// Kindly DO NOT DELETE the below code --------------------------------------------
/*
function masrkasactive(el){
    alert("Task marked as active")

    if(el.status == "completed"){

        let send_this_data = {
            status : "active"
        }
    
        let res = await fetch(`https://timelancer-be.onrender.com/tasks/${el}`, {
    
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
    
        let res = await fetch(`https://timelancer-be.onrender.com/tasks/${el}`, {
    
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

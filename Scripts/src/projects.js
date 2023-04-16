import sidebar from "../../Components/sidebar.js"
document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun , Projects, projectSubmit, loader} from "../sidebarFun.js"
sidebarFun();

import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
import {navbarFun} from "../navbarFun.js";

navbarFun();


window.onload = () => {
    document.getElementById("new-project").onclick = () =>{
        document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Projects();
        projectSubmit();
    }
    appendProjects();
    document.getElementById("filter-btn").onchange = ()=>{
        appendFilter();
        }
}

async function getProjects()
{
    let res = await fetch(`https://timelancer-be.onrender.com/projects`);
    let data = await res.json();
    return data;
}
async function appendProjects()
{
    loader("pro-table");
    let data = await getProjects();
    let box = document.getElementById("pro-table");
    let i=0;
    box.innerHTML = null;

    data.forEach(function(el){
    i++;
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = i ;

    let col2 = document.createElement("td");
    col2.innerText = el.project ;

    let col3 = document.createElement("td");
    col3.innerText = el.client ;
    
    let col4 = document.createElement("td");
    col4.innerText = el.due_date ;

    let col5 = document.createElement("td");
    col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
    col5.onclick = ()=>{
        deleteProject(el.id);
    }

    let col6 = document.createElement("td");
    col6.style.cursor="pointer";
    if(el.status == "active")
    {
        col6.innerText = "ACTIVE";
        col6.style.color= "red";
        col6.onclick = async ()=>{
        markAsCompleted(el.id);
        }
    } 
    else
    {
        col6.innerText = "COMPLETED";
        col6.style.color = "green";
        col6.onclick = async ()=>{
        markAsActive(el.id);
        }
    }


    row.append(col1,col2,col3,col4,col5,col6);
    box.append(row);
    })
}

const deleteProject = async (id) =>{
    loader("pro-table");
    let res = await fetch(`https://timelancer-be.onrender.com/projects/${id}`,{
      method : 'DELETE',
    })
  
    let data = await res.json();
  
    appendProjects();
}
const markAsCompleted = async (id)=>{
    loader("pro-table");
  
    let send_data = {
      status : 'completed'
    }
    let res = await fetch(`https://timelancer-be.onrender.com/projects/${id}`,{
      method : 'PATCH',
      body : JSON.stringify(send_data),
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    let data = await res.json();
  
    appendProjects();
}
const markAsActive = async (id)=>{
    loader("pro-table");
  
    let send_data = {
      status : 'active'
    }
    let res = await fetch(`https://timelancer-be.onrender.com/projects/${id}`,{
      method : 'PATCH',
      body : JSON.stringify(send_data),
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    let data = await res.json();
  
  
    appendProjects();
}

async function appendFilter(){
    loader("pro-table");
    let status = document.getElementById("filter-btn").value;
    if(status=="active"||status=="completed")
    {
      let res = await fetch(`https://timelancer-be.onrender.com/projects?status=${status}`);
      let data = await res.json();
      let box = document.getElementById("pro-table");
      let i=0;
      box.innerHTML = null;
  
      data.forEach(function(el){
        i++;
        let row = document.createElement("tr");
  
        let col1 = document.createElement("td");
        col1.innerText = i ;
  
        let col2 = document.createElement("td");
        col2.innerText = el.project ;
  
        let col3 = document.createElement("td");
        col3.innerText = el.client ;
        
        let col4 = document.createElement("td");
        col4.innerText = el.due_date ;
  
        let col5 = document.createElement("td");
        col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
        col5.onclick = ()=>{
          deleteProject(el.id);
        }
  
        let col6 = document.createElement("td");
        col6.style.cursor="pointer";
        if(el.status == "active")
        {
          col6.innerText = "ACTIVE";
          col6.style.color= "red";
          col6.onclick = async ()=>{
            markAsCompleted(el.id);
          }
        } 
        else
        {
          col6.innerText = "COMPLETED";
          col6.style.color = "green";
          col6.onclick = async ()=>{
            markAsActive(el.id);
          }
        }
  
  
        row.append(col1,col2,col3,col4,col5,col6);
        box.append(row);
      })
  
    }
    else{
      appendProjects();
    }
  }
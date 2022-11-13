import sidebar from "../../Components/sidebar.js";

document.getElementById("sidebar").innerHTML = sidebar();

import {sidebarFun,loader} from "../sidebarFun.js";

sidebarFun();

import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
    

import {navbarFun} from "../navbarFun.js";

navbarFun();

document.getElementById("upass").onclick = ()=>{
    if(document.getElementById("dropdown").style.display == "none")
    {
        document.getElementById("dropdown").style.display = "block";
    }
    else
    {
        document.getElementById("dropdown").style.display = "none";
    }
}

document.getElementById("update_password").onsubmit = async (event)=>{
    event.preventDefault();
    document.getElementById("new-data").style.display = "grid";
    loader("form");
    
    let res = await fetch(`https://obscure-wave-86373.herokuapp.com/user`);

    let data = await res.json();

    updatePass(data.id);
}

const updatePass = async (id)=>{
    let password = document.getElementById("new_password").value;

    let send_data={
        password
    }
    try{
        let res = await fetch(`https://obscure-wave-86373.herokuapp.com/profiles/${id}`,{
            method : 'PATCH',
            body : JSON.stringify(send_data),
            headers: {
                'Content-Type' : 'application/json'
            }

        });

        let data = res.json();

        document.getElementById("form").innerHTML = `<div id="success">
        <i class="fa-solid fa-check"></i>
                <br>
        Submit Successful! Redirecting...
        </div>`;
        setTimeout(()=>{
            location.assign("dashboard.html");
        },1200);
    }
    catch(err){
        console.log(err);
    }
}
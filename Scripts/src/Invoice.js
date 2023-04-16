import sidebar from "../../Components/sidebar.js";

  document.getElementById("sidebar").innerHTML = sidebar();

  import {
    sidebarFun,
    Invoices,
    invoiceSubmit,
    loader
  } from "../sidebarFun.js";

  sidebarFun();

  import navbar from "../../Components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
    

import {navbarFun} from "../navbarFun.js";

navbarFun();


window.onload = ()=>{
  document.getElementById("newinvoice").onclick = ()=>{
    document.getElementById("new-data").style.display = "grid";
        document.getElementById("form").innerHTML = Invoices();
        invoiceSubmit();
  }
  appendInvoices();

  document.getElementById("dropdown").onchange = ()=>{
    appendFilter();
  }
}

async function appendFilter(){
  loader("inv-table");
  let status = document.getElementById("dropdown").value;
  if(status=="paid"||status=="unpaid")
  {
    let res = await fetch(`https://timelancer-be.onrender.com/invoices?status=${status}`);
    let data = await res.json();
    let box = document.getElementById("inv-table");
    let i=0;
    box.innerHTML = null;

    data.forEach(function(el){
      i++;
      let row = document.createElement("tr");

      let col1 = document.createElement("td");
      col1.innerText = i ;

      let col2 = document.createElement("td");
      col2.innerText = el.gen_date ;

      let col3 = document.createElement("td");
      col3.innerText = el.name ;
      
      let col4 = document.createElement("td");
      col4.innerText = el.email ;

      let col5 = document.createElement("td");
      col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
      col5.onclick = ()=>{
        deleteInvoice(el.id);
      }

      let col6 = document.createElement("td");
      col6.style.cursor="pointer";
      if(el.status == "paid")
      {
        col6.innerText = "PAID";
        col6.style.color= "green";
        col6.onclick = async ()=>{
          markAsUnpaid(el.id);
        }
      } 
      else
      {
        col6.innerText = "UNPAID";
        col6.style.color = "red";
        col6.onclick = async ()=>{
          markAsPaid(el.id);
        }
      }


      row.append(col1,col2,col3,col4,col5,col6);
      box.append(row);
    })

  }
  else{
    appendInvoices();
  }
}


async function getInvoices()
{
    let res = await fetch(`https://timelancer-be.onrender.com/invoices`);
    let data = await res.json();
    return data;
}
async function appendInvoices()
{
  loader("inv-table");
  let data = await getInvoices();
  let box = document.getElementById("inv-table");
  let i=0;
  box.innerHTML = null;

  data.forEach(function(el){
    i++;
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = i ;

    let col2 = document.createElement("td");
    col2.innerText = el.gen_date ;

    let col3 = document.createElement("td");
    col3.innerText = el.name ;
    
    let col4 = document.createElement("td");
    col4.innerText = el.email ;

    let col5 = document.createElement("td");
    col5.innerHTML = `<i class="fa-solid fa-trash-can" style="color:red;cursor:pointer;"></i>`;
    col5.onclick = ()=>{
      deleteInvoice(el.id);
    }

    let col6 = document.createElement("td");
    col6.style.cursor="pointer";
    if(el.status == "paid")
    {
      col6.innerText = "PAID";
      col6.style.color= "green";
      col6.onclick = async ()=>{
        markAsUnpaid(el.id);
      }
    } 
    else
    {
      col6.innerText = "UNPAID";
      col6.style.color = "red";
      col6.onclick = async ()=>{
        markAsPaid(el.id);
      }
    }


    row.append(col1,col2,col3,col4,col5,col6);
    box.append(row);
  })
}

const deleteInvoice = async (id) =>{
  loader("inv-table");
  let res = await fetch(`https://timelancer-be.onrender.com/invoices/${id}`,{
    method : 'DELETE',
  })

  let data = await res.json();

  appendInvoices();
}
const markAsPaid = async (id)=>{
  loader("inv-table");

  let send_data = {
    status : 'paid'
  }
  let res = await fetch(`https://timelancer-be.onrender.com/invoices/${id}`,{
    method : 'PATCH',
    body : JSON.stringify(send_data),
    headers :{
      'Content-Type' : 'application/json'
    }
  })
  let data = await res.json();

  appendInvoices();
}
const markAsUnpaid = async (id)=>{
  loader("inv-table");

  let send_data = {
    status : 'unpaid'
  }
  let res = await fetch(`https://timelancer-be.onrender.com/invoices/${id}`,{
    method : 'PATCH',
    body : JSON.stringify(send_data),
    headers :{
      'Content-Type' : 'application/json'
    }
  })
  let data = await res.json();


  appendInvoices();
}
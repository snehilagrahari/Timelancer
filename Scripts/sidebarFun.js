import getTime from "./TimeGen.js"

let {date,month_num,year} = getTime();
let today_date = `${year}-${month_num}-${date}`;

function sidebarFun()
    {
        
        document.getElementById("slider").onclick = ()=>{
            if(document.getElementById("slider").className == "show")
            {
                document.getElementById("slider").className="hide";
                document.getElementById("side-slider").className="show-sec";
            }    
            else
            {
                document.getElementById("slider").className="show";
                document.getElementById("side-slider").className="hide-sec";
            }        
        }
        document.getElementById("close-box").onclick = ()=>{
            document.getElementById("new-data").style.display="none";
        }
        document.getElementById("add-client").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Clients();
            clientSubmit();
        }
        document.getElementById("add-project").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Projects();
            projectSubmit();
            
        }
        document.getElementById("add-task").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Tasks();
            taskSubmit();
        }
        document.getElementById("add-invoice").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Invoices();
            invoiceSubmit();
        }
    }


    function Clients(){
        return `<h2>Create Client</h2>
        <form id="create-client" class="create">
            <label>Client Name</label>
            <input type="text" id="client-name" placeholder="Client Name" required>
            <label>Client Email</label>
            <input type="email" id="client-email" placeholder="Client Email" required>
            <input type="submit" value="Create Client">
        </form>`;
    }

    function Projects(){
        return `<h2>Create Project</h2>
        <form id="create-project" class="create">
        <label>Client Name</label>
        <select id="client-name" required></select>
        <label>Project Name</label>
        <input type="text" id="project-name" placeholder="Project Name" required>
        <label>Due Date</label>
        <input type="date" id="due-date" min="${today_date}" required>
        <input type="submit" value="Create Project">
        </form>`;
    }
    function Tasks(){
        return `<h2>Create Task</h2>
        <form id="create-task" class="create">
        <label>Task Name</label>
        <input type="text" id="task-name" placeholder="Task Name" required>
        <label>Description</label>
        <input type="text" id="task-desc" placeholder="Task Description" required>
        <label>Project Name</label>
        <select id="project-name" required></select>
        <label>Due-date</label>
        <input type="date" id="due-date" min="${today_date}" required>
        <input type="submit" value="Create Task">
        </form>`;
    }
    function Invoices(){
        return `<h2>Create Invoice</h2>
        <form id="create-invoice" class="create">
        <label>Client Name</label>
        <select id="client-name" required></select>
        <label>Client Email</label>
        <input type="email" id="client-email" placeholder="Client Email">
        <input type="submit" value="Create Invoice">
        </form>`
    }
    function clientSubmit(){
        let form = document.getElementById("create-client");
        form.onsubmit= async (event)=>{
            event.preventDefault();
            let name = document.getElementById("client-name").value;
            let email = document.getElementById("client-email").value;
            let status = "active";

            let send_data = {
                name,
                email,
                status
            }
            loader("form");
            try{
                let res = await fetch(`https://timelancer-be.onrender.com/clients`,{
                    method : 'POST',
                    body : JSON.stringify(send_data),
                    headers : {
                        'Content-type' : 'application/json'
                    }
                })
                let data = await res.json();
                success();
                setTimeout(() => {
                   location.reload(); 
                }, 500);
            }
            catch(err){
                console.log(err);
            }
        }
    }
    function projectSubmit(){
        appendClientsOptions();
        let form = document.getElementById("create-project");
        form.onsubmit= async (event)=>{
            event.preventDefault();
            let client = document.getElementById("client-name").value;
            let project = document.getElementById("project-name").value;
            let due_date = document.getElementById("due-date").value;
            let status = "active";

            let send_data = {
                project,
                client,
                due_date,
                status
            }
            try{
                loader("form");
                let res = await fetch(`https://timelancer-be.onrender.com/projects`,{
                    method : 'POST',
                    body : JSON.stringify(send_data),
                    headers : {
                        'Content-type' : 'application/json'
                    }
                })
                let data = await res.json();
                success();
                setTimeout(() => {
                    location.reload(); 
                 }, 500);
            }
            catch(err){
                console.log(err);
            }
        }
    }
    function taskSubmit(){
        appendProjectsOptions();
        let form = document.getElementById("create-task");
        form.onsubmit= async (event)=>{
            event.preventDefault();
            let task = document.getElementById("task-name").value;
            let desc = document.getElementById("task-desc").value;
            let project = document.getElementById("project-name").value;
            let due_date = document.getElementById("due-date").value;
            let time = "0";
            let status = "active";

            let send_data = {
                task,
                desc,
                project,
                time,
                due_date,
                status
            }
            loader("form");
            try{
                let res = await fetch(`https://timelancer-be.onrender.com/tasks`,{
                    method : 'POST',
                    body : JSON.stringify(send_data),
                    headers : {
                        'Content-type' : 'application/json'
                    }
                })
                let data = await res.json();
                success();
                setTimeout(() => {
                    location.reload(); 
                 }, 500);
            }
            catch(err){
                console.log(err);
            }
        }
    }

    function invoiceSubmit(){
        appendClientsOptions();
        let form = document.getElementById("create-invoice");
        form.onsubmit= async (event)=>{
            event.preventDefault();
            let {date,month,year} = getTime();
            let gen_date = `${month} ${date}, ${year}`; 
            let name = document.getElementById("client-name").value;
            let email = document.getElementById("client-email").value;
            let status = "unpaid";

            let send_data = {
                name,
                email,
                status,
                gen_date
            }
            loader("form");
            try{
                let res = await fetch(`https://timelancer-be.onrender.com/invoices`,{
                    method : 'POST',
                    body : JSON.stringify(send_data),
                    headers : {
                        'Content-type' : 'application/json'
                    }
                })
                let data = await res.json();
                success();
                setTimeout(() => {
                    location.reload(); 
                 }, 500);
            }
            catch(err){
                console.log(err);
            }
        }
    }
    async function getClients(){
        
        let res = await fetch(`https://timelancer-be.onrender.com/clients`);

        let data = res.json();

        return data;
    }
    async function appendClientsOptions(){

        let data = await getClients();
        let box = document.getElementById("client-name");
        data.forEach(function(el){
            let str = `<option value="${el.name}">${el.name}</option>`;
            box.innerHTML += str;
        })
    }
    async function getProjects(){
        
        let res = await fetch(`https://timelancer-be.onrender.com/projects`);

        let data = res.json();

        return data;
    }
    async function appendProjectsOptions(){

        let data = await getProjects();
        let box = document.getElementById("project-name");
        data.forEach(function(el){
            let str = `<option value="${el.project}">${el.project}</option>`;
            box.innerHTML += str;
        })
    }
    function success()
    {
        document.getElementById("form").innerHTML =`<div id="success">
        <i class="fa-solid fa-check"></i>
                <br>
        Submit Successful! Reloading Page..
    </div>`;
    }
    function loader(ch)
    {
        document.getElementById(ch).innerHTML =`<div id="loader">
        <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952am5ju0r8dn0b2kehmpuxw9rf5fo8qgv2s8ntxexr&rid=200w.gif&ct=g" alt="">
    </div>`;
    }
export {sidebarFun, Clients, Projects, Tasks, Invoices, taskSubmit, invoiceSubmit, projectSubmit, clientSubmit, loader};
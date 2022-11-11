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
        }
        document.getElementById("add-project").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Projects();
        }
        document.getElementById("add-task").onclick = ()=>{
            document.getElementById("new-data").style.display = "grid";
            document.getElementById("form").innerHTML = Tasks();
        }
    }


    function Clients(){

        return `<h2>Create Client</h2>
        <form id="create-client" class="create">
            <label>Client Name</label>
            <input type="text" id="client-name" placeholder="Client Name" required>
            <label>Client Email</label>
            <input type="email" id="client-email"placeholder="Client Email" required>
            <input type="submit" value="Create Client">
        </form>`;
    }

    function Projects(){
        return `<h2>Create Project</h2>
        <form id="create-project" class="create">
        <label>Client Name</label>
        <input type="text" id="client-name" placeholder="Client Name" required>
        <label>Client Email</label>
        <input type="email" id="client-email"placeholder="Client Email" required>
        <label>Project Name</label>
        <input type="text" id="project-name" placeholder="Project Name">
        <input type="submit" value="Create Project">
        </form>`;
    }
    function Tasks(){
        return `<h2>Create Task</h2>
        <form id="create-task" class="create">
        <label>Task Name</label>
        <input type="text" id="task-name" placeholder="Task Name" required>
        <label>Description</label>
        <input type="text" id="task-desc"placeholder="Task Description" required>
        <label>Project Name</label>
        <input type="text" id="project-name" placeholder="Project Name">
        <input type="submit" value="Create Task">
        </form>`;
    }

export {sidebarFun, Clients, Projects, Tasks};
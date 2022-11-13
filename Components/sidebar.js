function sidebar(){
    return `<button id="slider" class="show">+</button>
    <div id="top-logo">
        <img src="Images/logo.jpeg" alt="None" id="logo">
    </div>
    <div class="sidebar-sec">
        <ul>
            <li><a href="dashboard.html" class="category"><i class="fas fa-home"></i> &nbsp;Dashboard</a></li>
            <li><a href="clients.html" class="category"><i class="fas fa-users"></i> &nbsp;Clients</a></li>
            <li><a href="projects.html" class="category"><i class="fa-solid fa-folder"></i> &nbsp;Projects</a></li>
            <li><a href="tasks.html" class="category"><i class="fa-solid fa-list-check"></i> &nbsp;Tasks</a></li>
        </ul>
    </div>
    <div class="sidebar-sec">
        <p class="sidebar-head">Tools</p>
        <ul>
            <li><a href="Invoice.html" class="category"><i class="fa-solid fa-file-invoice-dollar"></i> &nbsp;Invoices</a></li>
            <li><a href="#" class="category"><i class="fas fa-file-invoice"></i> &nbsp;Proposals</a></li>
            <li><a href="#" class="category"><i class="fa-sharp fa-solid fa-file"></i> &nbsp;Contracts</a></li>
            <li><a href="#" class="category"><i class="fa-solid fa-clock"></i> &nbsp;Time Tracking</a></li>
            <li><a href="#" class="category"><i class="fas fa-briefcase"></i> &nbsp;Services</a></li>
            <li><a href="#" class="category"><i class="fas fa-file-contract"></i> &nbsp;Forms</a></li>
        </ul>
    </div>
    <div class="sidebar-sec">
        <p class="sidebar-head">Finances</p>
        <ul>
            <li><a href="#" class="category"><i class="fas fa-money-bill"></i> &nbsp;Cash</a></li>
            <li><a href="#" class="category"><i class="fas fa-file-lines"></i> &nbsp;Accounting</a></li>
            <li><a href="#" class="category"><i class="fas fa-file-invoice-dollar"></i> &nbsp;Taxes</a></li>
        </ul>
    </div>
    <div id="side-slider" class="hide-sec">
        <h3>Menu</h3>
        <div id="add-client" class="add-new">
            <h3>Add Client</h3>
            <button class="add-btn">+</button>
        </div>
        <div class="add-new" id="add-project">
            <h3>Add Project</h3>
            <button class="add-btn">+</button>
        </div>
        <div class="add-new" id="add-task">
            <h3>Add Task</h3>
            <button class="add-btn">+</button>
        </div>
        <div class="add-new" id="add-invoice">
            <h3>Invoice</h3>
            <button class="add-btn">+</button>
        </div>
    </div>`;
}

export default sidebar;
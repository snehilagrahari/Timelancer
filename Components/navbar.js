const navbar = () =>{
    return `<section id="nav">
    <div id="left">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="search" placeholder="Search">
    </div>
    <div id="right">
        <a href="trial.html" id="trial-div">
            <button id="trial-btn"><i class="fa-solid fa-crown"></i> Start Your Free Trial</button>
        </a>
        <div id="timer-div"class="relative">
            <button id="timer-btn"><i class="fa-solid fa-play"></i> Start Timer</button>
            <button class="toggle"><i class="fa-solid fa-caret-down"></i></button>
            <div id="timer">
                <div id="timer-box">
                    <div id="timer-clock">
                        <p style="color:grey;font-size:14px;margin-bottom:0;" id="timer-mess">START NEW TIMER</p>
                        <h1 id="timer-time" style="font-size:35px;margin:10px 0px 40px 0px;"><span id="displayHours">00</span>:<span id="displayMinutes">00</span>:<span id="displaySeconds">00</span></h1>
                    </div>
                    <div id="timer-space" class="relative">
                        <button id="timer-control" class="play"><i class="fas fa-play"></i></button>
                    </div>
                    <div id="timer-activity">
                        <div id="timer-list">
                            <div id="timer-list-box">
                
                            </div>
                        </div>
                        <div id="timer-form">
                            <form id="create-timer" class="create">
                                <label>Project Name</label>
                                <input type="text" id="project_name" placeholder="Project Name" required>
                                <label>Task Name</label>
                                <input type="text" id="task_name "placeholder="Task Name" required>
                                <input type="submit" value="Add Hours">
                            </form>
                        </div>
                    </div>
                    <button id="reset-timer"> <i class="fa-regular fa-trash-can"></i></button>
                    <button id="timer-list-back"> < </button>
                </div>
            </div>
        </div>
        <div id="account-div" class="relative">
            <button id="account-name">SA</button>
            <button class="toggle"><i class="fa-solid fa-caret-down"></i></button>
            <div id="account-set">
                <p><a href="trial.html">Get bonsai free</a></p>
                <hr color="#eee">
                <p>Help Center</p>
                <p>What's New</p>
                <hr color="#eee">
                <p>My Subscription</p>
                <p>Apps & Integrations</p>
                <p>Payments</p>
                <p><a href="profile.html">Profile</a></p>
                <p id="logout">Logout</p>
            </div>
        </div>
    </div>
</section>`;
}
export default navbar;
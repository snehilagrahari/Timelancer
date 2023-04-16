import {loader} from "./sidebarFun.js";


const navbarFun = ()=>{
    let myTimer;
    let myCounter=0;
    let myMinutes=0;
    let myHours=0;
    let mySeconds=0;
    var title = document.querySelector("title").innerText;
    document.getElementById("timer-control").onclick= ()=>{
        if(document.getElementById("timer-control").className == "play")
        {
            myTimer = setInterval(() => {
                myCounter++;
                mySeconds= myCounter;
                if(mySeconds> 59){
    
                    displaySeconds.innerHTML= "00";
                    myCounter = 0;
                    myMinutes++;
            
                } 
                else if (mySeconds>9){
            
                    displaySeconds.innerHTML = mySeconds;
                } 
                else{
            
                    displaySeconds.innerHTML = "0"+ mySeconds
                }
            
                // start counting minutes
            
                if(myMinutes> 59){
            
                    myMinutes.innerHTML="00";
                    myMinutes=0;
                    myHours++;
                }
                else if (myMinutes>9){
            
                    displayMinutes.innerHTML = myMinutes;
                } 
                else {
                    displayMinutes.innerHTML = "0"+ myMinutes;
            
                }
                if (myHours>9){
            
                    displayHours.innerHTML=myHours;
                }
                else{
                    displayHours.innerHTML= "0"+ myHours;
                }
                let variable = document.getElementById("timer-time").innerText;
                document.querySelector("title").innerText = variable;
                }, 1000);
            document.getElementById("timer-control").innerHTML=`<i class="fa-solid fa-pause"></i>`;
            document.getElementById("timer-control").className = "pause";
            document.getElementById("timer-mess").innerText = "ACTIVE TIMER";
            document.getElementById("timer-mess").style.color = "red";
            document.getElementById("reset-timer").style.display = "block";
            document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-pause"></i> Stop Timer`;
            document.getElementById("timer-list").style.display = "none";
            document.getElementById("timer-form").style.display = "block";
        }
        else
        {
            document.getElementById("timer-control").innerHTML=`<i class="fa-solid fa-play"></i>`;
            document.getElementById("timer-control").className = "play";
            document.getElementById("timer-mess").innerText = "RESUME TIMER";
            document.getElementById("timer-mess").style.color = "grey";
            document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-play"></i> Resume Timer`;
            clearInterval(myTimer);
        }
    }
    document.getElementById("reset-timer").onclick = ()=>{
        
        clearInterval(myTimer);
        document.querySelector("title").innerText = title;
        displayHours.innerHTML= "00";
        displayMinutes.innerHTML = "00";
        displaySeconds.innerHTML = "00";
        myHours = 0;
        myMinutes = 0;
        mySeconds = 0;
        myCounter = 0;



        document.getElementById("timer-control").innerHTML=`<i class="fa-solid fa-play"></i>`;
        document.getElementById("timer-control").className = "play";
        document.getElementById("timer-mess").innerText = "START NEW TIMER";
        document.getElementById("timer-mess").style.color = "grey";
        document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-play"></i> Start Timer`;
        document.getElementById("reset-timer").style.display = "none";
        document.getElementById("timer-list").style.display = "block";
        document.getElementById("timer-form").style.display = "none";
        
    }
    document.getElementById("logout").onclick = ()=>{
        location.assign("index.html");
    }

    document.getElementById("create-timer").onsubmit = (event)=>{
        event.preventDefault();
        clearInterval(myTimer);
        document.querySelector("title").innerText = title;
        
        setTaskTimer();
        myHours = 0;
        myMinutes = 0;
        mySeconds = 0;
        myCounter = 0;
        document.getElementById("timer-control").innerHTML=`<i class="fa-solid fa-play"></i>`;
        document.getElementById("timer-control").className = "play";
        document.getElementById("timer-mess").innerText = "START NEW TIMER";
        document.getElementById("timer-mess").style.color = "grey";
        document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-play"></i> Start Timer`;
        document.getElementById("reset-timer").style.display = "none";
        document.getElementById("timer-list").style.display = "block";
        document.getElementById("timer-form").style.display = "none";
    }

    appendTasksOptions();
}

async function getTasks(){
        
    let res = await fetch(`https://timelancer-be.onrender.com/tasks`);

    let data = res.json();

    return data;
}
async function appendTasksOptions(){

    let data = await getTasks();
    let box = document.getElementById("task_name");
    data.forEach(function(el){
        let str = `<option value="${el.task}">${el.task}</option>`;
        box.innerHTML += str;
    })
}
async function setTaskTimer()
{

    document.getElementById("timer-form").style.display = "none";
    document.getElementById("timer-list").style.display = "block";
    loader("timer-list");
    let taskName = document.getElementById("task_name").value;

    let addTime = (parseInt(displayHours.innerText)*3600)+(parseInt(displayMinutes.innerText)*60)+(parseInt(displaySeconds.innerText));    
    displayHours.innerHTML= "00";
    displayMinutes.innerHTML = "00";
    displaySeconds.innerHTML = "00";
    let res = await fetch(`https://timelancer-be.onrender.com/tasks?task=${taskName}`);

    let data = await res.json();

    let time = parseInt(data[0].time) + addTime;

    let send_data = {
        time
    }     

    let id = data[0].id;

    let response = await fetch(`https://timelancer-be.onrender.com/tasks/${id}`,{
        method : 'PATCH',
        body : JSON.stringify(send_data),
        headers:{
            'Content-Type':'application/json'
        }
    })

    let data2 = await response.json();
    document.getElementById("timer-list").innerHTML = `<div id="success">
    <i class="fa-solid fa-check"></i>
            <br>
    Submit Successful!
</div>`;

setTimeout(() => {
   document.getElementById("timer-list").innerHTML = null; 
}, 1200);

}

export {
    navbarFun
};
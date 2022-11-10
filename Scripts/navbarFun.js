
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
            document.getElementById("timer-list-back").style.display = "none";
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
            document.getElementById("timer-list-back").style.display = "block";
            document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-play"></i> Resume Timer`;
            clearInterval(myTimer);
        }
    }
    document.getElementById("reset-timer").onclick = ()=>{
        
        // resettimer
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
        document.getElementById("timer-list-back").style.display = "none";
        document.getElementById("timer-btn").innerHTML = `<i class="fa-solid fa-play"></i> Start Timer`;
        document.getElementById("reset-timer").style.display = "none";
        document.getElementById("timer-list").style.display = "block";
        document.getElementById("timer-list-back").style.display = "none";
        document.getElementById("timer-form").style.display = "none";
    }
    document.getElementById("timer-list-back").onclick = ()=>{
        document.getElementById("timer-list-back").style.display = "none";
        document.getElementById("timer-list").style.display = "block";
        document.getElementById("timer-form").style.display = "none";    
    }
    document.getElementById("logout").onclick = ()=>{
        location.assign("index.html");
    }
}
export {
    navbarFun
};
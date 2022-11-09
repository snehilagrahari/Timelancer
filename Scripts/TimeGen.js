const getTime = ()=>{
    let today = new Date();
    let day_num = today.getDay();
    let day;
    switch(day_num)
    {
        case 0 : day = "Sunday";break;
        case 1 : day = "Monday";break;
        case 2 : day = "Tuesday";break;
        case 3 : day = "Wednesday";break;
        case 4 : day = "Thursday";break;
        case 5 : day = "Friday";break;
        case 6 : day = "Saturday";break;
    }
    let date = today.getDate();
    let month_num = today.getMonth()+1;
    let month;
    switch(month_num)
    {
        case 1 : month = "January";break;
        case 2 : month = "February";break;
        case 3 : month = "March";break;
        case 4 : month = "April";break;
        case 5 : month = "May";break;
        case 6 : month = "June";break;
        case 7 : month = "July";break;
        case 8 : month = "August";break;
        case 9 : month = "September";break;
        case 10 : month = "October";break;
        case 11: month = "November";break;
        case 12 : month = "December";break;
    }
    let time_num = today.getHours();
    let time;
    if(time_num>5 && time_num<12)
        time = "Morning";
    else if(time_num>=12 && time_num< 16)
        time = "Afternoon";
    else
        time = "Evening";
    return {day, date, month_num, month, time};
}

export default getTime;
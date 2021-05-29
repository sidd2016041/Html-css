const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secsE1 = document.getElementById("seconds");



//const newYear = "1 Jan 2022";
const dateget = prompt("Enter the date", "1 Jan 2022");
 
function countdown() {

    const userDate = new Date(dateget);
    const currentDate = new Date();
    const totalseconds = (userDate - currentDate)/1000;

    const days = Math.floor(totalseconds / 3600 / 24 );
    const hours = Math.floor(totalseconds  / 3600) % 24;
    const mins = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    console.log(days,hours,mins,seconds);

    daysE1.innerHTML = inputatTime(days) + " : ";
    hoursE1.innerHTML = inputatTime(hours) + " : ";
    minsE1.innerHTML = inputatTime(mins)+  " : ";
    secsE1.innerHTML = inputatTime(seconds) ;
}

function inputatTime(time){
    return time < 10 ? (`0${time}`) : time ; 
}

countdown();

setInterval(countdown , 1000)
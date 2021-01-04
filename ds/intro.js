function clock() {
const fullTime = new Date();
const hours = fullTime.getHours();
const mins = fullTime.getMinutes();
const secs = fullTime.getSeconds();

document.getElementById("hours").innerHTML=hours;
document.getElementById("mins").innerHTML= mins;
document.getElementById("secs").innerHTML=secs;
}

setInterval(clock,1000);
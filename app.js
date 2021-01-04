function clock() {
    const fullTime = new Date();
    const hours = fullTime.getHours();
    const mins = fullTime.getMinutes();
    const secs = fullTime.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = ":" + mins;
    document.getElementById("secs").innerHTML = ":" + secs;
}

setInterval(clock, 1000);

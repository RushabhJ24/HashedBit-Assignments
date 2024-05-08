let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isPaused = false;

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;

    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        displayTime();
    }, 1000);
}

function pause() {
    if (!isPaused) {
        clearInterval(timer);
        document.getElementById("pause").textContent = "Continue";
    } else {
        start();
        document.getElementById("pause").textContent = "Pause";
    }
    isPaused = !isPaused;
}

function stop() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
}

function displayTime() {
    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("time").textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

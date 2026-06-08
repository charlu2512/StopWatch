const display = document.getElementById("time");

let timer = 0;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updatetimer() {
    const currenttimer = Date.now() - startTime;
    const sec = Math.floor(currenttimer / 1000 % 60).toString().padStart(2, 0);
    const min = Math.floor(currenttimer / (1000 * 60) % 60).toString().padStart(2, 0);
    const hr = Math.floor(currenttimer / (1000 * 60 * 60)).toString().padStart(2, 0);
    const mili = Math.floor(currenttimer % 1000 / 10).toString().padStart(2, 0);
    // console.log(mili);
    const str = `${hr}:${min}:${sec}:${mili}`;
    display.textContent = str;
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    display.textContent = `00:00:00:00`;
    isRunning = false;
}

function stop() {
    if (isRunning) {
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
        isRunning = false;
    }
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updatetimer, 10);
        isRunning = true;
    }
}
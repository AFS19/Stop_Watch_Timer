let timerDisplay = document.querySelector("#timer");
let stopTimer = document.querySelector("#stop-timer");
let playTimer = document.querySelector("#play-timer");
let resetTimer = document.querySelector("#reset-timer");
let timer = null;
let stopwatchBG = document.querySelector(".stopwatch");

let [hours, minutes, seconds] = [0, 0, 0];

playTimer.addEventListener("click", function () {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(startTimer, 1000);
});

function startTimer() {
  seconds++;
  if (seconds == 59) {
    seconds = 0;
    minutes++;
    if (minutes == 59) {
      minutes = 0;
      hours++;
    }
  }

  let nHours = hours < 10 ? `0${hours}` : hours;
  let nMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let nSeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerDisplay.innerHTML = `${nHours} : ${nMinutes} : ${nSeconds}`;
}

stopTimer.addEventListener("click", () => {
  clearInterval(timer);
});

resetTimer.addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];

  let nHours = hours < 10 ? `0${hours}` : hours;
  let nMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let nSeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerDisplay.innerHTML = `${nHours} : ${nMinutes} : ${nSeconds}`;
});

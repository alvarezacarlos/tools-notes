const startPauseButton = document.querySelector("#startPause");
const restart = document.querySelector("#restart");

let cronometerInterval;

let hours = 0,
  minutes = 0,
  seconds = 0;

function incrementCronometer() {
  if (seconds == 59) {
    seconds = 0;
    if (minutes == 59) {
      minutes = 0;
      hours++;
    } else {
      minutes++;
    }
  } else {
    seconds++;
  }

  const timeText = document.querySelector("#timeText");
  timeText.textContent = `${
    hours.toString().length > 1 ? hours : "0" + hours
  }:${minutes.toString().length > 1 ? minutes : "0" + minutes}:${
    seconds.toString().length > 1 ? seconds : "0" + seconds
  }`;
}

startPauseButton.addEventListener("click", () => {
  const startPauseButton = document.querySelector("#startPause");
  if (cronometerInterval) {
    console.log("hey");
    clearInterval(cronometerInterval);
    cronometerInterval = null;
    startPauseButton.innerHTML = '<i class="bi bi-play-fill"></i>';
    return;
  }
  cronometerInterval = setInterval(incrementCronometer, 1000);
  startPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
});

restart.addEventListener("click", () => {
  clearInterval(cronometerInterval);
  (hours = 0), (minutes = 0), (seconds = 0); 
  cronometerInterval = setInterval(incrementCronometer, 1000);
  startPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
});

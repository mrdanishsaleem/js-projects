document.addEventListener("DOMContentLoaded", function () {
  var timerInterval;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); // update every 1 second
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
  }

  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    var formattedTime =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    document.getElementById("timer").innerText = formattedTime;
  }

  document.getElementById("startBtn").addEventListener("click", startTimer);
  document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
  document.getElementById("resetBtn").addEventListener("click", resetTimer);
});

let scoreA = 0;
let scoreB = 0;

function changeScore(team, value) {
  if (team === 'A') {
    scoreA = Math.max(0, scoreA + value);
    document.getElementById('scoreA').innerText = scoreA;
  } else {
    scoreB = Math.max(0, scoreB + value);
    document.getElementById('scoreB').innerText = scoreB;
  }
}

let timer;
let timeLeft = 30 * 60; // 30 minutes
let running = false;

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.getElementById("timer").innerText =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!running) {  
    running = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        running = false;
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30 * 60;
  updateTimerDisplay();
  running = false;
}

updateTimerDisplay(); // Affichage initial



export default function TimerHandler({ minutesDisplay, secondsDisplay }) {
  let clicked = false;
  let idInterval;
  let minutes = Number(minutesDisplay.textContent);

  function checkClick() {
    if (clicked === false) {
      clicked = true;
      countdown();
    } else {
      return;
    }
  }

  function updateDisplay(newMinutes, seconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    console.log(slider.value);
  }

  function countdown() {
    idInterval = setInterval(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;
      updateDisplay(minutes, 0);

      if (isFinished) {
        reset();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));
    }, 1000);
  }

  function reset() {
    clicked = false;
    clearInterval(idInterval);
    updateDisplay(minutes, 0);
  }

  function add() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    updateDisplay(minutes + 5, seconds);
  }

  function subtract() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    if (minutes <= 5) {
      updateDisplay(minutes - minutes, seconds);
      return;
    }
    updateDisplay(minutes - 5, seconds);
  }
  return {
    countdown,
    reset,
    checkClick,
    add,
    subtract,
    updateDisplay,
  };
}

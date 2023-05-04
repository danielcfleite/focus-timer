import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  minutesDisplay,
  secondsDisplay,
  cafeteria,
  rain,
  forest,
  fireplace,
} from "./config.js";
import Timer from "./timer.js";
import Events from "./events.js";
import Sounds from "./sounds.js";

const sounds = Sounds();
const timer = Timer({ minutesDisplay, secondsDisplay });
Events({ timer, buttonPlay, sounds });

const buttonSounds = document.querySelectorAll(".sounds");
const body = document.querySelector("#body");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const dots = document.querySelector(".dots");
const darkToggle = document.querySelector("#darkToggle");
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
  minutesDisplay.classList.toggle("font-light");
  secondsDisplay.classList.toggle("font-light");
  dots.classList.toggle("font-light");
});

function opacityReset() {
  bar.style.opacity = "0.2";
  slider.style.opacity = "0.2";
}

const fill = document.querySelector(".fill");
const bar = document.querySelector(".bar");
const slider = document.querySelector(".slider");
slider.addEventListener("change", function () {
  forest.volume = slider.value / 100;
  cafeteria.volume = slider.value / 100;
  rain.volume = slider.value / 100;
  fireplace.volume = slider.value / 100;
  bar.style.opacity = "1";
  slider.style.opacity = "1";
  fill.style.width = `${slider.value}%`;
  setTimeout(opacityReset, 3000);
});

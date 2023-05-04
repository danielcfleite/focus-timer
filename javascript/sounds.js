import { cafeteria, rain, forest, fireplace } from "./config.js";

const forestConfig = document.querySelector(".volume-bar");
function showVolume() {
  if (forest.paused && rain.paused && cafeteria.paused && fireplace.paused) {
    forestConfig.style.display = "none";
  } else {
    forestConfig.style.display = "flex";
  }
}

export default function Sounds() {
  function playRain() {
    rain.paused ? rain.play() : rain.pause();
    rain.loop = true;
    showVolume();
  }

  function playForest() {
    forest.paused ? forest.play() : forest.pause();
    forest.loop = true;
    showVolume();
  }

  function playCafeteria() {
    cafeteria.paused ? cafeteria.play() : cafeteria.pause();
    cafeteria.loop = true;
    showVolume();
  }

  function playFireplace() {
    fireplace.paused ? fireplace.play() : fireplace.pause();
    fireplace.loop = true;
    showVolume();
  }

  return {
    playRain,
    playFireplace,
    playForest,
    playCafeteria,
  };
}

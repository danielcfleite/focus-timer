import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  ButtonForest,
  ButtonRain,
  ButtonCafeteria,
  ButtonCampfire,
} from "./config.js";

export default function events({ timer, sounds }) {
  buttonPlay.addEventListener("click", timer.checkClick);
  buttonStop.addEventListener("click", timer.reset);
  buttonAdd.addEventListener("click", timer.add);
  buttonSubtract.addEventListener("click", timer.subtract);
  ButtonRain.addEventListener("click", sounds.playRain);
  ButtonForest.addEventListener("click", sounds.playForest);
  ButtonCafeteria.addEventListener("click", sounds.playCafeteria);
  ButtonCampfire.addEventListener("click", sounds.playFireplace);
}

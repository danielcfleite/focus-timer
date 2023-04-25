import {cafeteria, rain, forest, fireplace,} from './config.js'

export default function Sounds() {

    function playRain() {
        rain.paused ? rain.play(): rain.pause();
        rain.loop = true
    }
  
    function playForest() {
        forest.paused ? forest.play() : forest.pause();
        forest.loop = true
    }
  
    function playCafeteria() {
        cafeteria.paused ? cafeteria.play() : cafeteria.pause();
        cafeteria.loop = true
    }

    function playFireplace(){
        fireplace.paused ? fireplace.play() : fireplace.pause();
        fireplace.loop = true
    }

    return {
      playRain,
      playFireplace,
      playForest,
      playCafeteria,
    }
  
  }

 
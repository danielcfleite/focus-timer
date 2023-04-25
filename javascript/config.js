const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.plus')
const buttonSubtract = document.querySelector('.minus')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const ButtonForest = document.querySelector('.forest')
const ButtonRain = document.querySelector('.rain')
const ButtonCafeteria = document.querySelector('.cafeteria')
const ButtonCampfire = document.querySelector('.campfire')
const cafeteria = new Audio("./sounds/Cafeteria.wav")
const rain = new Audio("./sounds/Chuva.wav")
const forest = new Audio("./sounds/Floresta.wav")
const fireplace = new Audio("./sounds/Lareira.wav")

export { buttonPlay,
buttonStop,
buttonAdd,
buttonSubtract,
minutesDisplay,
secondsDisplay,
ButtonForest,
ButtonRain,
ButtonCafeteria,
ButtonCampfire,
cafeteria,
rain,
forest,
fireplace,}
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSettings = document.querySelector('.settings')

const buttonDarkModeOff = document.querySelector('.darkModeOff')
const buttonDarkModeOn = document.querySelector('.darkModeOn')

const checkbox = document.querySelector("input")
const main = document.querySelector('main')
const svg = document.querySelector('.timerButtons')
const fill = document.querySelector('.boxRight')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeShop')
const buttonFireplace = document.querySelector('.fireplace')

const inputForest = document.getElementById('volumeForest')
const inputRain = document.getElementById('volumeRain')
const inputCoffeShop = document.getElementById('volumeCoffeShop')
const inputFireplace = document.getElementById('volumeFireplace')

const cardForest = document.querySelector('.cardForest')
const cardRain = document.querySelector('.cardRain')
const cardCoffeeShop = document.querySelector('.cardCoffeShop')
const cardFireplace = document.querySelector('.cardFireplace')

const moreFive = document.querySelector('.moreFive')
const minusFive = document.querySelector('.minusFive')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

export {
    buttonPlay, buttonPause, buttonStop, buttonSettings, buttonForest,
    buttonRain, buttonCoffeeShop, buttonFireplace, moreFive, minusFive,
    minutesDisplay, secondsDisplay, buttonPressAudio, kitchenTimer,
    buttonDarkModeOff, buttonDarkModeOn, checkbox, main, svg, fill,
    inputForest, inputRain, inputCoffeShop, inputFireplace, cardForest,
    cardRain, cardCoffeeShop, cardFireplace
}
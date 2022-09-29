import {
    buttonPlay, buttonPause, buttonStop, buttonSettings, buttonForest,
    buttonRain, buttonCoffeeShop, buttonFireplace, moreFive, minusFive,
    buttonPressAudio, checkbox, main, svg, fill, inputForest, inputRain,
    inputCoffeShop, inputFireplace, cardForest, cardRain, cardCoffeeShop,
    cardFireplace
} from "./src/variables.js"

import {
    getMinutes, updateDisplay, countdown, timerTimeOut, updateMinutes,
    play, pause, resetControls, resetTimer, addTimer, reduceTimer,
    darkModeOff, darkModeOn
} from './src/timer.js'

import { Card } from './src/cards.js'

buttonSettings.addEventListener('click', function () {
    buttonPressAudio.play()
    let newMinutes = getMinutes()

    if (!newMinutes) {
        resetTimer()
        return
    }

    updateDisplay(newMinutes, 0)
    updateMinutes(newMinutes)
})

buttonPlay.addEventListener('click', function () {
    play()
    countdown()
    buttonPressAudio.play()
})

buttonPause.addEventListener('click', function () {
    pause()
    clearTimeout(timerTimeOut)
    buttonPressAudio.play()
})

buttonStop.addEventListener('click', function () {
    resetControls()
    resetTimer()
    buttonPressAudio.play()
})

checkbox.addEventListener("change", (e) => {
    buttonForest.classList.toggle("dark", e.target.checked)
    buttonRain.classList.toggle("dark", e.target.checked)
    buttonCoffeeShop.classList.toggle("dark", e.target.checked)
    buttonFireplace.classList.toggle("dark", e.target.checked)
    main.classList.toggle("text", e.target.checked)
    fill.classList.toggle("color", e.target.checked)
    fill.classList.toggle("white", e.target.checked)
    svg.classList.toggle("fill", e.target.checked)
    document.body.classList.toggle("dark", e.target.checked)

    buttonPressAudio.play()

    if (checkbox.checked == true) {
        darkModeOff()

    } else
        darkModeOn()

})

moreFive.addEventListener('click', function () {
    buttonPressAudio.play()
    addTimer()
})

minusFive.addEventListener('click', function () {
    buttonPressAudio.play()
    reduceTimer()
})

inputForest.addEventListener('change', function (e) {
    forest.changeVolume(e.target.value)
})

inputRain.addEventListener('change', function (e) {
    rain.changeVolume(e.target.value)
})

inputCoffeShop.addEventListener('change', function (e) {
    coffeShop.changeVolume(e.target.value)
})

inputFireplace.addEventListener('change', function (e) {
    fire.changeVolume(e.target.value)
})

let forest = new Card('forest', buttonForest, cardForest)
let rain = new Card('rain', buttonRain, cardRain)
let coffeShop = new Card('coffee_shop', buttonCoffeeShop, cardCoffeeShop)
let fire = new Card('fire', buttonFireplace, cardFireplace)

const cards = [forest, rain, coffeShop, fire]

function toggleCards(card) {
    cards.forEach(
        e => e.name == card.name ? e.toggle() : e.reset()
    )
}

buttonForest.addEventListener('click', function () {
    toggleCards(forest)
})

buttonRain.addEventListener('click', function () {
    toggleCards(rain)
})

buttonCoffeeShop.addEventListener('click', function () {
    toggleCards(coffeShop)
})

buttonFireplace.addEventListener('click', function () {
    toggleCards(fire)
})
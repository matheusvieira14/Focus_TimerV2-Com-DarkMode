import {
    buttonPlay, buttonPause, buttonStop, buttonSettings, minutesDisplay,
    secondsDisplay, kitchenTimer, buttonDarkModeOff, buttonDarkModeOn
} from "/src/variables.js"

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
let startMinutes = 25

function getMinutes() {

    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
        return false
    }
    startMinutes = newMinutes

    return Number(newMinutes)
}

function updateDisplay(newMinutes, seconds) {
    minutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {

    timerTimeOut = setTimeout(function () {

        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateDisplay(minutes, 0)

        if (isFinished) {
            resetControls()
            updateDisplay()
            kitchenTimer.play()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

function updateMinutes(newMinutes) {
    minutes = newMinutes
}

function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSettings.classList.add('hide')
    buttonStop.classList.remove('hide')
}

function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSettings.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function resetTimer() {
    updateDisplay(Number(startMinutes), 0)
    clearTimeout(timerTimeOut)
}

function addTimer() {
    if (minutes + 5 > 60) {
        alert('Não é possível aumentar, você já atingiu o máximo de minutos permitidos')

    } else {
        updateDisplay((Number(minutes) + 5), 0)
    }
}

function reduceTimer() {

    if (minutes - 5 < 0) {
        alert('Não é possível reduzir, você já atingiu o mínimo de minutos permitidos')
    } else {
        updateDisplay((Number(minutes) - 5), 0)
    }
}

function darkModeOff() {
    buttonDarkModeOff.classList.add('hide')
    buttonDarkModeOn.classList.remove('hide')
}

function darkModeOn() {
    buttonDarkModeOff.classList.remove('hide')
    buttonDarkModeOn.classList.add('hide')
}

export {
    getMinutes, updateDisplay, countdown, timerTimeOut, updateMinutes,
    play, pause, resetControls, resetTimer, addTimer, reduceTimer,
    darkModeOff, darkModeOn
}

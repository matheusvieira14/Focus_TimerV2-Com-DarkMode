export const SOUND_FOREST_PATH = './sounds/Floresta.wav'
export const SOUND_RAIN_PATH = './sounds/Chuva.wav'
export const SOUND_COFFEE_SHOP_PATH = './sounds/Cafeteria.wav'
export const SOUND_FIRE_PATH = './sounds/Lareira.wav'

export class Sound {

    constructor(audio) {
        this.sound = new Audio(audio)
    }

    play() {

        this.sound.play()
    }

    pause() {
        this.sound.pause()
    }

    changeVolume(volume) {
        this.sound.volume = volume
    }
}
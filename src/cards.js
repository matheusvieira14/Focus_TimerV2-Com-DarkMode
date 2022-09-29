import { Sound, SOUND_COFFEE_SHOP_PATH, SOUND_FIRE_PATH, SOUND_FOREST_PATH, SOUND_RAIN_PATH } from './sounds.js'

const cards = [
    {
        name: 'forest',
        color: '#28794B',
        sound_path: SOUND_FOREST_PATH
    },
    {
        name: 'rain',
        color: '#6dc1ff',
        sound_path: SOUND_RAIN_PATH
    },
    {
        name: 'coffee_shop',
        color: '#b29289',
        sound_path: SOUND_COFFEE_SHOP_PATH
    },
    {
        name: 'fire',
        color: '#DB6300',
        sound_path: SOUND_FIRE_PATH,
    }
]

export class Card {
    constructor(name, buttonHTML, cardHTML) {
        this.name = cards.filter(obj => obj.name == name)[0].name
        this.color = cards.filter(obj => obj.name == name)[0].color
        this.active = false
        this.buttonHTML = buttonHTML
        this.cardHTML = cardHTML

        this.sound = new Sound(
            cards.filter(obj => obj.name == name)[0].sound_path
        )
    }

    toggle() {
        this.originalColor = this.buttonHTML.style.backgroundColor
        !this.active ? (this.active = true, this.playSound()) :
            (this.active = false, this.pauseSound())

        this.changeColor()
    }

    playSound() {
        this.sound.play(this.volume)
    }

    pauseSound() {
        this.sound.pause()
    }

    changeColor() {

        !this.active ? (
            this.cardHTML.classList.remove("bg"),
            this.buttonHTML.classList.remove("bg"),
            this.buttonHTML.style.backgroundColor = this.originalColor
        ) :
            (
                this.cardHTML.classList.add("bg"),
                this.buttonHTML.classList.add("bg"),
                this.originalColor = this.buttonHTML.style.backgroundColor,
                this.buttonHTML.style.backgroundColor = this.color
            )
    }

    changeVolume(volume) {
        this.sound.changeVolume(volume)
    }

    reset() {
        this.active = false
        this.pauseSound()
        this.changeColor()
    }

}
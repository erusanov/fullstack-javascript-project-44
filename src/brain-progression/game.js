import { Game as BaseGame } from '../base/game.js'

const PROGRESSION_LENGTH = 10

const buildQuestion = (progression, hiddenIndex) => {
  const question = [...progression]

  question[hiddenIndex] = '..'

  return question.join(' ')
}

const getRandomProgression = () => {
  const start = Math.floor(Math.random() * 100)
  const step = Math.floor(Math.random() * 10) + 1
  const progression = []

  for (let i = 0; i < PROGRESSION_LENGTH; i++) {
    progression.push(start + i * step)
  }

  return progression
}

class Game extends BaseGame {
  currentQuestion = ''
  currentAnswer = '0'
  #hiddenNumber = 0

  renderRules = () => {
    console.log(`What number is missing in the progression?`)
  }

  getQuestion = () => {
    const progression = getRandomProgression()
    const hiddenIndex = Math.floor(Math.random() * PROGRESSION_LENGTH)

    this.#hiddenNumber = progression[hiddenIndex]

    return buildQuestion(progression, hiddenIndex)
  }

  get rightAnswer() {
    return String(this.#hiddenNumber)
  }
}

export {
  Game,
}

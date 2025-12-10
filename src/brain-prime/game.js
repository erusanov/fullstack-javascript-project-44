import { Game as BaseGame } from '../base/game.js'
import { NO, YES } from '../const.js'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

class Game extends BaseGame {
  currentQuestion = 0
  currentAnswer = NO

  renderRules = () => {
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
  }

  getQuestion = () => {
    return Math.floor(Math.random() * 100)
  }

  get rightAnswer() {
    return isPrime(this.currentQuestion) ? YES : NO
  }
}

export {
  Game,
}

import { Game as BaseGame } from '../base/game.js'

const gcd = (a, b) => {
  if (!b) {
    return a
  }

  return gcd(b, a % b)
}

const buildQuestion = ({ a, b }) => {
  return [
    a,
    b,
  ].join(' ')
}

const parseQuestion = (question) => {
  const [
    a,
    b,
  ] = question.split(' ')

  return {
    a: parseInt(a || '0'),
    b: parseInt(b || '0'),
  }
}

const getRandomQuestionParts = () => {
  const a = Math.floor(Math.random() * 100)
  const b = Math.floor(Math.random() * 100)

  return {
    a,
    b,
  }
}

class Game extends BaseGame {
  currentQuestion = ''
  currentAnswer = '0'

  renderRules = () => {
    console.log(`Find the greatest common divisor of given numbers.`)
  }

  getQuestion = () => {
    return buildQuestion(getRandomQuestionParts())
  }

  get rightAnswer() {
    const { a, b } = parseQuestion(this.currentQuestion)

    return String(gcd(a, b))
  }
}

export {
  Game,
}

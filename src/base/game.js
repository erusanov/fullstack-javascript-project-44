import readlineSync from 'readline-sync'

const ANSWERS_TO_WIN = 3

class Game {
  currentAnswer = ''
  currentQuestion = ''

  get rightAnswer() {
    return ''
  }

  run = () => {
    this.#greetings()
    this.renderRules()

    while (!this.#isStop) {
      this.ask()
      this.#afterAsk()
    }

    this.#afterGame()
  }

  renderRules = () => {
    console.warn('Rules must be implemented!')
  }

  getQuestion = () => {
    return ''
  }

  #player = ''
  #answersCount = 0

  get #isLoose() {
    return this.rightAnswer !== this.currentAnswer
  }

  get #isWin() {
    return this.#answersCount >= ANSWERS_TO_WIN
  }

  get #isStop() {
    return this.#isLoose || this.#isWin
  }

  #greetings = () => {
    console.log('Welcome to the Brain Games!')

    this.#player = readlineSync.question('May I have your name? ')

    console.log(`Hello, ${this.#player}!`)
  }

  ask = () => {
    this.currentQuestion = this.getQuestion()

    console.log(`Question: ${this.currentQuestion}`)

    this.currentAnswer = readlineSync.question('Your answer: ')
  }

  #afterAsk = () => {
    this.#answersCount++

    const message = !this.#isLoose
      ? 'Correct!'
      : `'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.rightAnswer}'`

    console.log(message)
  }

  #afterGame = () => {
    const message = !this.#isLoose
      ? `Congratulations, ${this.#player}!`
      : `Let's try again, ${this.#player}!`

    console.log(message)
  }
}

export {
  Game,
}

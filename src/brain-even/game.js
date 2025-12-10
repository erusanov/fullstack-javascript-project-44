import readlineSync from 'readline-sync';

const ANSWERS_TO_WIN = 3;
const YES = 'yes';
const NO = 'no';

class Game {
    run = () => {
        this.#greetings();

        while (!this.#isStop) {
            this.#ask();
            this.#afterAsk();
        }

        this.#afterGame();
    };

    #player = '';
    #answersCount = 0;
    #currentQuestion = 0;
    #currentAnswer = YES;

    get #rightAnswer() {
        const isEven = this.#currentQuestion % 2 === 0;

        return isEven ? YES : NO;
    }

    get #isLoose() {
        return this.#rightAnswer !== this.#currentAnswer;
    }

    get #isWin() {
        return this.#answersCount >= ANSWERS_TO_WIN;
    }

    get #isStop() {
        return this.#isLoose || this.#isWin;
    }

    #greetings = () => {
        console.log('Welcome to the Brain Games!');

        this.#player = readlineSync.question('May I have your name? ');

        console.log(`Hello, ${this.#player}!`);
        console.log(`Answer "yes" if the number is even, otherwise answer "no"`);
    };

    #ask = () => {
        this.#currentQuestion = Math.floor(Math.random() * 100);

        console.log(`Question: ${this.#currentQuestion}`);

        this.#currentAnswer = readlineSync.question('Your answer: ');
    };

    #afterAsk = () => {
        this.#answersCount++;

        const message = !this.#isLoose ?
            'Correct!' :
            `'${this.#currentAnswer}' is wrong answer ;(. Correct answer was '${this.#rightAnswer}'`;

        console.log(message);
    };

    #afterGame = () => {
        const message = !this.#isLoose ?
            `Congratulations, ${this.#player}!` :
            `Let's try again, ${this.#player}!`;

        console.log(message);
    };
}

export {
    Game
};

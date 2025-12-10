import {Game as BaseGame} from '../base/game.js';

const YES = 'yes';
const NO = 'no';

class Game extends BaseGame {
    currentQuestion = 0;
    currentAnswer = YES;

    renderRules = () => {
        console.log(`Answer "yes" if the number is even, otherwise answer "no"`);
    };

    getQuestion = () => {
        return Math.floor(Math.random() * 100)
    };

    get rightAnswer() {
        const isEven = this.currentQuestion % 2 === 0;

        return isEven ? YES : NO;
    }
}

export {
    Game
};

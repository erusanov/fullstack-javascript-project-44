import {Game as BaseGame} from '../base/game.js';

const ADD = '+';
const SUB = '-';

const buildQuestion = ({a, b, operator}) => {
    return [
        a,
        operator,
        b
    ].join(' ');
};

const parseQuestion = (question) => {
    const [
        a,
        operator,
        b
    ] = question.split(' ');

    return {
        a: parseInt(a || '0'),
        operator: operator || ADD,
        b: parseInt(b || '0')
    };
};

const getRandomQuestionParts = () => {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);

    const operator = Math.floor(Math.random() * 2) % 0 ?
        ADD :
        SUB;

    return {
        a,
        operator,
        b
    };
}

class Game extends BaseGame {
    currentQuestion = '';
    currentAnswer = '0';

    renderRules = () => {
        console.log(`What is the result of the expression?`);
    };

    getQuestion = () => {
        return buildQuestion(getRandomQuestionParts());
    };

    get rightAnswer() {
        const {a, operator, b} = parseQuestion(this.currentQuestion);

        return operator === ADD ?
            String(a + b) :
            String(a - b);
    }
}

export {
    Game
};
// Constructor for questions -----------------------------------------------
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// Create the questions for the game ---------------------------------------
let questions = [{
    question: {
        text: 'Who is Mario\'s dinosaur friend?',
        gif: "https://media.giphy.com/media/3o7TKVhFvrfc9xz0aY/giphy.gif",
        answers: ['Rex', 'Luigi', 'Toshi', 'Yoshi'],
        correctAnswer: 'Yoshi'
    },
}, {
    question: {
        text: 'What does Sonic the Hedgehog love to collect?',
        gif: "https://api.giphy.com/v1/gifs/search?q=sonic-the-hedgehog-boom-gif&api_key=dc6zaTOxFJmzC",
        answers: ['Jewels', 'Coins', 'Diamonds', 'Rings'],
        correctAnswer: 'Rings'
    },
}, {
    question: {
        text: 'Which of these is NOT a Pac-Man ghost?',
        gif: "https://api.giphy.com/v1/gifs/search?q=pacman-ghosts&api_key=dc6zaTOxFJmzC",
        answers: ['Inky', 'Clyde', 'Blinky', 'Bonnie'],
        correctAnswer: 'Bonnie'
    },
}, {
    question: {
        text: 'Who is Link\'s fairy companion?',
        gif: "https://api.giphy.com/v1/gifs/search?q=link-kills-navi&api_key=dc6zaTOxFJmzC",
        answers: ['Siri', 'Alexa', 'Cortana', 'Navi'],
        correctAnswer: 'Navi'
    },
}, {
    question: {
        text: 'Which game franchise, born in 1992, courted controversy with its ‘Fatalities’?',
        gif: "https://api.giphy.com/v1/gifs/search?q=dance-mash-up-mortal-kombat&api_key=dc6zaTOxFJmzC",
        answers: ['Art of Fighting', 'Fatal Fury', 'King of Fighters', 'Mortal Kombat'],
        correctAnswer: 'Mortal Kombat'
    },
}, {
    question: {
        text: 'Who says "@!#?@!" every time he is hit by something?',
        gif: "https://api.giphy.com/v1/gifs/search?q=qbert&api_key=dc6zaTOxFJmzC",
        answers: ['Donkey Kong', 'Wimpy', 'Bagman', 'Q*bert'],
        correctAnswer: 'Q*bert'
    },
}];

gamesQuiz = new Quiz(questions);

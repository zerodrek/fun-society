// Constructor for questions -----------------------------------------------
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// Create the questions for the game ---------------------------------------
let questions = [{
    question: {
        text: 'Which of the following is a Stephen King movie about an inmate who escapes prison?',
        gif: "https://api.giphy.com/v1/gifs/search?q=rain-shawshank&api_key=dc6zaTOxFJmzC",
        answers: ['Prison Break', 'Shawshank Redemption', 'Escape Plan', 'The Longest Yard'],
        correctAnswer: 'Shawshank Redemption'
    },
}, {
    question: {
        text: 'Which of these characters are NOT part of Dorothy\'s group in The Wizard of Oz?',
        gif: "https://api.giphy.com/v1/gifs/search?q=oz&api_key=dc6zaTOxFJmzC",
        answers: ['Scarecrow', 'Tin Woodman', 'Wicked Witch of the West', 'Cowardly Lion'],
        correctAnswer: 'Wicked Witch of the West'
    },
}, {
    question: {
        text: 'What is the famous saying of E.T?',
        gif: "https://api.giphy.com/v1/gifs/search?q=et-movie&api_key=dc6zaTOxFJmzC",
        answers: ['E.T. come home', 'E.T. go home', 'E.T. no home', 'E.T. phone home'],
        correctAnswer: 'E.T. phone home'
    },
}, {
    question: {
        text: 'Who is Luke\'s father in Star Wars?',
        gif: "https://api.giphy.com/v1/gifs/search?q=darth-vader-star-wars&api_key=dc6zaTOxFJmzC",
        answers: ['Darth Vader', 'Han Solo', 'Darth Sidious', 'Obi Wan'],
        correctAnswer: 'Darth Vader'
    },
}, {
    question: {
        text: 'Which car do they use in Back to the Future?',
        gif: "https://api.giphy.com/v1/gifs/search?q=back-to-the-future-delorean&api_key=dc6zaTOxFJmzC",
        answers: ['Thunderbird', 'Corvette', 'Mustang', 'DeLorean'],
        correctAnswer: 'DeLorean'
    },
}, {
    question: {
        text: 'What character does Harrison Ford play in Raiders of the Lost Ark?',
        gif: "https://api.giphy.com/v1/gifs/search?q=film-harrison-ford-indiana-jones&api_key=dc6zaTOxFJmzC",
        answers: ['Han Solo', 'Indiana Jones', 'Jack Ryan', 'Rick Deckard'],
        correctAnswer: 'Indian Jones'
    },
}]

new Quiz(questions);

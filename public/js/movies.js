// VARIABLES
// -----------------------------------------------------------------------
currentQuiz = "movies";
// FUNCTIONS
// -----------------------------------------------------------------------
/**
 * Constructor for questions.
 */
function Quiz(questions) {
    this.questions = questions;
    return this;
}
/**
 * Create the questions for the quiz.
 */
 var questions = [{
    question: {
        text: 'Which of the following is a Stephen King movie about an inmate who escapes prison?',
        gif: "https://media.giphy.com/media/AWJy0ZcCJmILe/giphy.gif",
        movie: "https://www.omdbapi.com/?t=Shawshank-redemption&y=&plot=short&r=json",
        answers: ['Prison Break', 'Shawshank Redemption', 'Escape Plan', 'The Longest Yard'],
        correctAnswer: 'Shawshank Redemption'
    },
}, {
    question: {
        text: 'Which of these characters are NOT part of Dorothy\'s group in The Wizard of Oz?',
        gif: "https://media.giphy.com/media/SKhNHgpJzthII/giphy.gif",
        movie: "https://www.omdbapi.com/?t=wizard-of-oz&y=&plot=short&r=json",
        answers: ['Scarecrow', 'Tin Woodman', 'Wicked Witch of the West', 'Cowardly Lion'],
        correctAnswer: 'Wicked Witch of the West'
    },
}, {
    question: {
        text: 'What is the famous saying of E.T?',
        gif: "https://media.giphy.com/media/lNGDT0uHuvS0w/giphy.gif",
        movie: "https://www.omdbapi.com/?t=e.t.&y=&plot=short&r=json",
        answers: ['E.T. come home', 'E.T. go home', 'E.T. no home', 'E.T. phone home'],
        correctAnswer: 'E.T. phone home'
    },
}, {
    question: {
        text: 'Who is Luke\'s Skywalker\'s father?',
        gif: "https://media.giphy.com/media/fInzUrMIM5Pm8/giphy.gif",
        movie: "https://www.omdbapi.com/?t=star-wars&y=&plot=short&r=json",
        answers: ['Darth Vader', 'Han Solo', 'Darth Sidious', 'Obi Wan'],
        correctAnswer: 'Darth Vader'
    },
}, {
    question: {
        text: 'What car does Doc and Marty use in Back to the Future?',
        gif: "https://media.giphy.com/media/B7nzZml6q1Oh2/giphy.gif",
        movie: "https://www.omdbapi.com/?t=back-to-the-future&y=&plot=short&r=json",
        answers: ['Thunderbird', 'Corvette', 'Mustang', 'DeLorean'],
        correctAnswer: 'DeLorean'
    },
}, {
    question: {
        text: 'What character does Harrison Ford play in Raiders of the Lost Ark?',
        gif: "https://media.giphy.com/media/8BmxE7qErN5nO/giphy.gif",
        movie: "https://www.omdbapi.com/?t=raiders-of-the-lost-ark&y=&plot=short&r=json",
        answers: ['Han Solo', 'Indiana Jones', 'Jack Ryan', 'Rick Deckard'],
        correctAnswer: 'Indiana Jones'
    },
}];
new Quiz(questions);

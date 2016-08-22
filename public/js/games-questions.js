/**
 * Constructor for quiz questions.
 */
function Quiz(questions) {
    this.questions = questions;
    return this;
}
/**
 * Create the questions for the quiz.
 */
let questions = [{
    question: {
        text: 'Who is Mario\'s dinosaur friend?',
        gif: "https://media.giphy.com/media/zJzQ8FyIbY8Y8/giphy.gif",
        answers: ['Rex', 'Luigi', 'Toshi', 'Yoshi'],
        correctAnswer: 'Yoshi'
    },
}, {
    question: {
        text: 'What does Sonic the Hedgehog love to collect?',
        gif: "https://media.giphy.com/media/aHEKecpQZHaaQ/giphy.gif",
        answers: ['Jewels', 'Coins', 'Diamonds', 'Rings'],
        correctAnswer: 'Rings'
    },
}, {
    question: {
        text: 'Which of these is NOT a Pac-Man ghost?',
        gif: "https://media.giphy.com/media/h3wT24ejH7g4M/giphy.gif",
        answers: ['Inky', 'Clyde', 'Blinky', 'Bonnie'],
        correctAnswer: 'Bonnie'
    },
}, {
    question: {
        text: 'Who is Link\'s fairy companion?',
        gif: "https://media.giphy.com/media/MSCmj0qsPPTDq/giphy.gif",
        answers: ['Siri', 'Alexa', 'Cortana', 'Navi'],
        correctAnswer: 'Navi'
    },
}, {
    question: {
        text: 'Which game franchise, born in 1992, courted controversy with its ‘Fatalities’?',
        gif: "https://media.giphy.com/media/8ySWO51yu0k9y/giphy.gif",
        answers: ['Art of Fighting', 'Fatal Fury', 'King of Fighters', 'Mortal Kombat'],
        correctAnswer: 'Mortal Kombat'
    },
}, {
    question: {
        text: 'Who says "@!#?@!" every time he is hit by something?',
        gif: "https://media.giphy.com/media/IXKBoWlYXsbSM/giphy.gif",
        answers: ['Donkey Kong', 'Wimpy', 'Bagman', 'Q*bert'],
        correctAnswer: 'Q*bert'
    },
}];

new Quiz(questions);

/**
 * Calculate quiz points writes the user's data to the database.
 */
function setScore(userId, name, gmScore) {
    // Multiply numRight to equal score
    gmScore = numRight * 100;
    firebase.database().ref('users/' + userId + '/' + name).update({
        gmScore: gmScore
    });
}
/**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic token refresh but not a User status change.
 */
// var currentUID;
//
// /**
//  * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
//  */
// function setUserScore() {
//     // We ignore token refresh events.
//     if (user && currentUID === user.uid || !user && currentUID === null) {
//         return;
//     }
//     currentUID = user ? user.uid : null;
//     if (user) {
//         setScore(user.uid, user.displayName, user.gmScore);
//     } else {
//         // Display info about saving scores.
//         return;
//     }
// }
// Bindings on load.
// window.addEventListener('load', function() {
//     // Listen for auth state changes
//     firebase.auth().onAuthStateChanged(onAuthStateChanged);
// }, false);

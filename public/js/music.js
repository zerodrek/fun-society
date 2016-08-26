// VARIABLES
// -----------------------------------------------------------------------
currentQuiz = "music";
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
 * Create the questions for the game.
 */
var questions = [{
    question: {
        text: 'Who was the 2nd bassist for Metallica?',
        gif: "https://media.giphy.com/media/TK39HMqxwtpSg/giphy.gif",
        answers: ['Robert Trujillo', 'Jason Newsted', 'Dave Mustaine', 'Cliff Burton'],
        correctAnswer: 'Cliff Burton',
        music: 'https://api.discogs.com/artists/18839',
        spot: 'https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB'
    },
}, {
    question: {
        text: 'What is one of the Eagles\' most famous songs?',
        gif: "https://media.giphy.com/media/g6HBNoB9h9F6/giphy.gif",
        answers: ['Rock With You', 'Crazy Little Thing Called Love', 'Funkytown', 'Hotel California'],
        correctAnswer: 'Hotel California',
        music: 'https://api.discogs.com/artists/255680',
        spot: 'https://api.spotify.com/v1/artists/0ECwFtbIWEVNwjlrfc6xoL'

    },
}, {
    question: {
        text: 'Which one of these singers were NOT part of the Beatles?',
        gif: "https://media.giphy.com/media/yrmb9TgQlb18k/giphy.gif",
        answers: ['Frankie Valli', 'Ringo Starr', 'George Harrison', 'Paul McCartney'],
        correctAnswer: 'Frankie Valli',
        music: 'https://api.discogs.com/artists/82730',
        spot: 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2'

    },
}, {
    question: {
        text: "Which of the following was the first to be inducted into the Rock 'n' Roll Hall of Fame?",
        gif: "https://media.giphy.com/media/l0G16XkIw4S22ASZy/giphy.gif",
        answers: ['Metallica', 'ZZ Top', 'The Hollies', 'The Rolling Stones'],
        correctAnswer: 'ZZ Top',
        music: 'https://api.discogs.com/artists/113655',
        spot: 'https://api.spotify.com/v1/artists/2AM4ilv6UzW0uMRuqKtDgN'

    },
}, {
    question: {
        text: 'Who was the first and original singer of AC/DC?',
        gif: "https://media.giphy.com/media/LuQbUJgMqqTV6/giphy.gif",
        answers: ['Bon Scott', 'Brian Johnson', 'Dave Evans', 'Malcom Young'],
        correctAnswer: 'Dave Evans',
        music: 'https://api.discogs.com/artists/84752',
        spot: 'https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un'

    },
}, {
    question: {
        text: 'Which artist was labeled as the "King of Pop"?',
        gif: "https://media.giphy.com/media/WKtwyvR2SNEJy/giphy.gif",
        answers: ['Michael Jackson', 'Prince', 'Justin Bieber', 'Justin Timberlake'],
        correctAnswer: 'Michael Jackson',
        music: 'https://api.discogs.com/artists/15885',
        spot: 'https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm'

    },
}];
new Quiz(questions);

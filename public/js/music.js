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
        text: 'Who sings Pretty Young Thing?',
        gif: "https://media.giphy.com/media/Bm5MTQwc1A1r2/giphy.gif",
        answers: ['Elivs', 'Michael Jackson', 'Janet Jackson', 'Elton John'],
        correctAnswer: 'Michael Jackson',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Michael Jackson&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'
    },
}, {
    question: {
        text: 'What was one of the Eagles most famous songs?',
        gif: "https://media.giphy.com/media/g6HBNoB9h9F6/giphy.gif",
        answers: ['Rock With You', 'Crazy Little Thing Called Love', 'Funkytown', 'Hotel California'],
        correctAnswer: 'Hotel California',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Eagles&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'

    },
}, {
    question: {
        text: 'Which one of these singers were NOT part of the Beatles?',
        gif: "https://media.giphy.com/media/yrmb9TgQlb18k/giphy.gif",
        answers: ['Frankie Valli', 'Ringo Starr', 'George Harrison', 'Paul McCartney'],
        correctAnswer: 'Frankie Valli',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Frankie Valli&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'

    },
}, {
    question: {
        text: "Which of the following was the first to be inducted into the Rock 'n' Roll Hall of Fame?",
        gif: "https://media.giphy.com/media/l0G16XkIw4S22ASZy/giphy.gif",
        answers: ['Metallica', 'ZZ Top', 'The Hollies', 'The Rolling Stones'],
        correctAnswer: 'ZZ Top',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=ZZ Top&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'

    },
}, {
    question: {
        text: 'Who was the first and original singer of AC/DC?',
        gif: "https://media.giphy.com/media/LuQbUJgMqqTV6/giphy.gif",
        answers: ['Bon Scott', 'Brian Johnson', 'Dave Evans', 'Malcom Young'],
        correctAnswer: 'Dave Evans',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=AC/DC&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'

    },
}, {
    question: {
        text: 'Which artist was labeled as the "King of Pop"?',
        gif: "https://media.giphy.com/media/WKtwyvR2SNEJy/giphy.gif",
        answers: ['Michael Jackson', 'Prince', 'Justin Bieber', 'Justin Timberlake'],
        correctAnswer: 'Michael Jackson',
        bio: 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Michael Jackson&api_key=746f649188f3ff1c10c12aa285575d2a&format=json'

    },
}];
new Quiz(questions);

// Constructor for questions -----------------------------------------------
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// Create the questions for the game ---------------------------------------
let questions = [{
    question: {
        text: 'On the show Breaking Bad, the main character is a teacher. What is he doing illegally?',
        gif: "https://media.giphy.com/media/7as8S0friUyvS/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=breaking-bad"
        answers: ['Sells weed', 'Steals identities', 'Robs banks', 'Produces meth'],
        correctAnswer: 'Produces meth'
    },
}, {
    question: {
        text: 'What is the symbol for the house of Stark in The Game of Thrones?',
        gif: "https://media.giphy.com/media/2WiDOZSA8DSGQ/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones"
        answers: ['Direwolf', 'Eagle', 'Dragon', 'Tiger'],
        correctAnswer: 'Direwolf'
    },
}, {
    question: {
        text: 'What does Elliot suffer from in Mr. Robot?',
        gif: "https://media.giphy.com/media/112cWFLjFTeLxC/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=mr-robot"
        answers: ['Cancer', 'Insomnia', 'Starvation', 'Social anxiety disorder and depression'],
        correctAnswer: 'Social anxiety disorder and depression'
    },
}, {
    question: {
        text: 'Who does Dustin, Mike, and Lucas go searching for in the TV series, Stranger Things?',
        gif: "https://media.giphy.com/media/l0MYMRR8vPtN7D5W8/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=stranger-things"
        answers: ['Jim Hopper', 'Karen Wheeler', 'Will Byers', 'Eleven("El")'],
        correctAnswer: 'Will Byers'
    },
}, {
    question: {
        text: 'In The Office, what city is the branch Dunder Mifflin based out of?',
        gif: "https://media.giphy.com/media/yoJC2i270b1mQvcDdK/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=office"
        answers: ['Houston, Texas', 'Scranton, Pennsylvania', 'New Orleans, Louisiana', 'St. Joseph, Michigan'],
        correctAnswer: 'Scranton, Pennsylvania'
    },
}, {
    question: {
        text: 'What is Mike constantly afraid of people finding out in Suits?',
        gif: "https://media.giphy.com/media/iP6NVaJtCJjl6/giphy.gif",
        descrip: "http://api.tvmaze.com/singlesearch/shows?q=suits"
        answers: ['He is a fraud', 'He owes someone a lot of money', 'He\'s a spay for another firm', 'He is secretly dating Jessica'],
        correctAnswer: 'He is a fraud'
    },
}]

new Quiz(questions);

// VARIABLES
// -----------------------------------------------------------------------
currentQuiz = "television";
// FUNCTIONS
// -----------------------------------------------------------------------
/**
 * Constructor for questions.
 */
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// PROCESSES
// -----------------------------------------------------------------------
/**
 * Create the questions for the game.
 */
var questions = [{
    question: {
        text: 'On the show Breaking Bad, the main character is a teacher. What is he doing illegally?',
        gif: "https://media.giphy.com/media/7as8S0friUyvS/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/8523",
        answers: ['Selling weed', 'Stealing identities', 'Robbing banks', 'Producing meth'],
        correctAnswer: 'Produces meth'
    },
}, {
    question: {
        text: 'What is the sigil for the House Stark in The Game of Thrones?',
        gif: "https://media.giphy.com/media/2WiDOZSA8DSGQ/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/6959",
        answers: ['Direwolf', 'Lion', 'Dragon', 'Stag'],
        correctAnswer: 'Direwolf'
    },
}, {
    question: {
        text: 'What does Elliot suffer from in Mr. Robot?',
        gif: "https://media.giphy.com/media/112cWFLjFTeLxC/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/28164",
        answers: ['Paranoid personality disorder', 'Narcissistic personality disorder', 'Insomnia and bipolar disorder', 'Social anxiety disorder and depression'],
        correctAnswer: 'Social anxiety disorder and depression'
    },
}, {
    question: {
        text: 'What is Michelle Tanner famous for saying on Full House?',
        gif: "https://media.giphy.com/media/xTiTnG7GYgnEejzOdW/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/1663",
        answers: ['"How you doin\'?"', '"You got it dude!"', '"What\'choo talkin\' \'bout, Willis?"', '"No way Jose!"'],
        correctAnswer: '"You got it dude!"'
    },
}, {
    question: {
        text: 'In The Office(US), in what city does Dunder Mifflin exist?',
        gif: "https://media.giphy.com/media/yoJC2i270b1mQvcDdK/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/205",
        answers: ['Houston, Texas', 'Scranton, Pennsylvania', 'New Orleans, Louisiana', 'St. Joseph, Michigan'],
        correctAnswer: 'Scranton, Pennsylvania'
    },
}, {
    question: {
        text: 'What is Mike constantly afraid of people finding out in Suits?',
        gif: "https://media.giphy.com/media/iP6NVaJtCJjl6/giphy.gif",
        tv: "https://api-public.guidebox.com/v1.43/US/rKv5kLVZwU3CmavYs4kgpqsHO8ORhaDG/show/300",
        answers: ['He is a fraud', 'He owes someone a lot of money', 'He\'s a spy for another firm', 'He is secretly dating Jessica'],
        correctAnswer: 'He is a fraud'
    },
}];
new Quiz(questions);

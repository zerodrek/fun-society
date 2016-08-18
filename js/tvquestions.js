// Constructor for questions -----------------------------------------------
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// Create the questions for the game ---------------------------------------
let questions = [{
    question: {
        text: 'On the show Breaking Bad, the main character is a teacher. What is he doing illegally?',
        gif: "https://api.giphy.com/v1/gifs/search?q=breaking-bad-silly-pinkman&api_key=dc6zaTOxFJmzC",
        answers: ['Sells weed', 'Steals identities', 'Robs banks', 'Produces meth'],
        correctAnswer: 'Produces meth'
    },
}, {
    question: {
        text: 'What is the symbol for the house of Stark in The Game of Thrones?',
        gif: "https://api.giphy.com/v1/gifs/search?q=oz&api_key=dc6zaTOxFJmzC",
        answers: ['Direwolf', 'Eagle', 'Dragon', 'Tiger'],
        correctAnswer: 'Direwolf'
    },
}, {
    question: {
        text: 'What does Elliot suffer from in Mr. Robot?',
        gif: "https://api.giphy.com/v1/gifs/search?q=et-movie&api_key=dc6zaTOxFJmzC",
        answers: ['Cancer', 'Insomnia', 'Starvation', 'Social anxiety disorder and depression'],
        correctAnswer: 'Social anxiety disorder and depression'
    },
}, {
    question: {
        text: 'Who does Dustin, Mike, and Lucas go searching for in the TV series, Stranger Things?',
        gif: "https://api.giphy.com/v1/gifs/search?q=darth-vader-star-wars&api_key=dc6zaTOxFJmzC",
        answers: ['Jim Hopper', 'Karen Wheeler', 'Will Byers', 'Eleven("El")'],
        correctAnswer: 'Will Byers'
    },
}, {
    question: {
        text: 'In The Office, what city is the branch Dunder Mifflin based out of?',
        gif: "https://api.giphy.com/v1/gifs/search?q=back-to-the-future-delorean&api_key=dc6zaTOxFJmzC",
        answers: ['Houston, Texas', 'Scranton, Pennsylvania', 'New Orleans, Louisiana', 'St. Joseph, Michigan'],
        correctAnswer: 'Scranton, Pennsylvania'
    },
}, {
    question: {
        text: 'What is Mike constantly afraid of people finding out in Suits?',
        gif: "https://api.giphy.com/v1/gifs/search?q=film-harrison-ford-indiana-jones&api_key=dc6zaTOxFJmzC",
        answers: ['He is a fraud', 'He owes someone a lot of money', 'He\'s a spay for another firm', 'He is secretly dating Jessica'],
        correctAnswer: 'He is a fraud'
    },
}]

new Quiz(questions);

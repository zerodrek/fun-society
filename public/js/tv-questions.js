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
        tv: "http://api.tvmaze.com/singlesearch/shows?q=breaking-bad&y=&summary=short&r=json",
        answers: ['Sells weed', 'Steals identities', 'Robs banks', 'Produces meth'],
        correctAnswer: 'Produces meth'
    },
}, {
    question: {
        text: 'What is the symbol for the house of Stark in The Game of Thrones?',
        gif: "https://media.giphy.com/media/2WiDOZSA8DSGQ/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&y=&summary=short&r=json",
        answers: ['Direwolf', 'Eagle', 'Dragon', 'Tiger'],
        correctAnswer: 'Direwolf'
    },
}, {
    question: {
        text: 'What does Elliot suffer from in Mr. Robot?',
        gif: "https://media.giphy.com/media/112cWFLjFTeLxC/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=mr-robot&y=&summary=short&r=json",
        answers: ['Cancer', 'Insomnia', 'Starvation', 'Social anxiety disorder and depression'],
        correctAnswer: 'Social anxiety disorder and depression'
    },
}, {
    question: {
        text: 'Who does Dustin, Mike, and Lucas go searching for in the TV series, Stranger Things?',
        gif: "https://media.giphy.com/media/l0MYMRR8vPtN7D5W8/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=stranger-things&y=&summary=short&r=json",
        answers: ['Jim Hopper', 'Karen Wheeler', 'Will Byers', 'Eleven("El")'],
        correctAnswer: 'Will Byers'
    },
}, {
    question: {
        text: 'In The Office, what city is the branch Dunder Mifflin based out of?',
        gif: "https://media.giphy.com/media/yoJC2i270b1mQvcDdK/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=office&y=&summary=short&r=json",
        answers: ['Houston, Texas', 'Scranton, Pennsylvania', 'New Orleans, Louisiana', 'St. Joseph, Michigan'],
        correctAnswer: 'Scranton, Pennsylvania'
    },
}, {
    question: {
        text: 'What is Mike constantly afraid of people finding out in Suits?',
        gif: "https://media.giphy.com/media/iP6NVaJtCJjl6/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=suits&y=&summary=short&r=json",
        answers: ['He is a fraud', 'He owes someone a lot of money', 'He\'s a spay for another firm', 'He is secretly dating Jessica'],
        correctAnswer: 'He is a fraud'
    },
}]

new Quiz(questions);
/**
 * Display correct answer.
 */
function displayAnswer() {
    $('.game-display').hide();
    $('.answer').show();
    if (answeredQuestions === 6) {
        gif = availableQuestions[5].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[5].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[5].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    } else if (answeredQuestions === 5) {
        gif = availableQuestions[4].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[4].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[4].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    } else if (answeredQuestions === 4) {
        gif = availableQuestions[3].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[3].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[3].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    } else if (answeredQuestions === 3) {
        gif = availableQuestions[2].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[2].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[2].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    } else if (answeredQuestions === 2) {
        gif = availableQuestions[1].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[1].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[1].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    } else if (answeredQuestions === 1) {
        gif = availableQuestions[0].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[0].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[0].question.tv,
            method: 'GET'
        }).done(function(response) {
            $('.tv-info').html("<p>Genre : " + response.genres + "</p><p>Rating: " + response.rating.average + "</p><p> Summary: " + response.summary + "</p>");
        });
    }
}
/**
 * Calculate quiz points writes the user's data to the database.
 */

function setScore(userId, tvScore) {
    userRef.on("value", function(snapshot) {
        firebase.database().ref('users/' + userId).update({
            tvScore: score
        });
    });
}

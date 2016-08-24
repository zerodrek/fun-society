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
        game: "http://www.giantbomb.com/api/game/1334/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Rex', 'Luigi', 'Toshi', 'Yoshi'],
        correctAnswer: 'Yoshi'
    },
}, {
    question: {
        text: 'What does Sonic the Hedgehog love to collect?',
        gif: "https://media.giphy.com/media/aHEKecpQZHaaQ/giphy.gif",
        game: "http://www.giantbomb.com/api/game/2465/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Jewels', 'Coins', 'Diamonds', 'Rings'],
        correctAnswer: 'Rings'
    },
}, {
    question: {
        text: 'Which of these is NOT a Pac-Man ghost?',
        gif: "https://media.giphy.com/media/h3wT24ejH7g4M/giphy.gif",
        game: "http://www.giantbomb.com/api/game/7624/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Inky', 'Clyde', 'Blinky', 'Bonnie'],
        correctAnswer: 'Bonnie'
    },
}, {
    question: {
        text: 'In Zelda, who is Link\'s fairy companion?',
        gif: "https://media.giphy.com/media/MSCmj0qsPPTDq/giphy.gif",
        game: "http://www.giantbomb.com/api/game/10276/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Siri', 'Alexa', 'Cortana', 'Navi'],
        correctAnswer: 'Navi'
    },
}, {
    question: {
        text: 'Which game franchise, born in 1992, courted controversy with its ‘Fatalities’?',
        gif: "https://media.giphy.com/media/8ySWO51yu0k9y/giphy.gif",
        game: "http://www.giantbomb.com/api/game/15743/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Art of Fighting', 'Fatal Fury', 'King of Fighters', 'Mortal Kombat'],
        correctAnswer: 'Mortal Kombat'
    },
}, {
    question: {
        text: 'Which game has a character that says "@!#?@!" every time he is hit by something?',
        gif: "https://media.giphy.com/media/IXKBoWlYXsbSM/giphy.gif",
        game: "http://www.giantbomb.com/api/game/20782/?api_key=fc361b2f01672438d73bbae8cf05810d1973a57c&format=json",
        answers: ['Donkey Kong', 'Mega Man', 'Mario', 'Q*bert'],
        correctAnswer: 'Q*bert'
    },
}];

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
            url: availableQuestions[5].question.game,
            method: 'GET',
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });
    } else if (answeredQuestions === 5) {
        gif = availableQuestions[4].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[4].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[4].question.game,
            method: 'GET',
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });
    } else if (answeredQuestions === 4) {
        gif = availableQuestions[3].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[3].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[3].question.game,
            method: 'GET',
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });
    } else if (answeredQuestions === 3) {
        gif = availableQuestions[2].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[2].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[2].question.game,
            method: 'GET',
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });
    } else if (answeredQuestions === 2) {
        gif = availableQuestions[1].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[1].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[1].question.game,
            method: 'GET',
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });
    } else if (answeredQuestions === 1) {
        gif = availableQuestions[0].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[0].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[0].question.game,
            method: 'GET'
        }).done(function(response) {
            $('.game-info').html("<p>" + response.plot + "</p><p>" + response.gameplay + "</p><p>" + response.levels + "</p>");
        });

    }
}


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

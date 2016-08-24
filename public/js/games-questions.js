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
            url: availableQuestions[5].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    } else if (answeredQuestions === 5) {
        gif = availableQuestions[4].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[4].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[4].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    } else if (answeredQuestions === 4) {
        gif = availableQuestions[3].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[3].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[3].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    } else if (answeredQuestions === 3) {
        gif = availableQuestions[2].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[2].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[2].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    } else if (answeredQuestions === 2) {
        gif = availableQuestions[1].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[1].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[1].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    } else if (answeredQuestions === 1) {
        gif = availableQuestions[0].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[0].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[0].question.movie,
            method: 'GET'
        }).done(function(response) {
            $('.movie-info').html("<p>Year Released: " + response.Year + "</p><p>Rating: " + response.Rated + "</p><p> Plot: " + response.Plot + "</p>");
        });
    }
}
/**
 * Calculate quiz points writes the user's data to the database.
 */
function setScore(userId, gmScore) {
    userRef.on("value", function(snapshot) {
            firebase.database().ref('users/' + userId).update({
                gmScore: score
            });
    });
}

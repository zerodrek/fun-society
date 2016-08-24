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
        game: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/1070?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=super-mario-world',
        answers: ['Rex', 'Luigi', 'Toshi', 'Yoshi'],
        correctAnswer: 'Yoshi'
    },
}, {
    question: {
        text: 'What does Sonic the Hedgehog love to collect?',
        gif: "https://media.giphy.com/media/aHEKecpQZHaaQ/giphy.gif",
        game: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/3192?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=sonic-the-hedgehog',
        answers: ['Jewels', 'Coins', 'Diamonds', 'Rings'],
        correctAnswer: 'Rings'
    },
}, {
    question: {
        text: 'Which of these is NOT a Pac-Man ghost?',
        gif: "https://media.giphy.com/media/h3wT24ejH7g4M/giphy.gif",
        game: "https://igdbcom-internet-game-database-v1.p.mashape.com/games/2750?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=pac-man",
        answers: ['Inky', 'Clyde', 'Blinky', 'Bonnie'],
        correctAnswer: 'Bonnie'
    },
}, {
    question: {
        text: 'In Zelda, who is Link\'s fairy companion?',
        gif: "https://media.giphy.com/media/MSCmj0qsPPTDq/giphy.gif",
        game: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/1026?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=zelda',
        answers: ['Siri', 'Alexa', 'Cortana', 'Navi'],
        correctAnswer: 'Navi'
    },
}, {
    question: {
        text: 'Which game franchise, born in 1992, courted controversy with its ‘Fatalities’?',
        gif: "https://media.giphy.com/media/8ySWO51yu0k9y/giphy.gif",
        game: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/1618?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=mortal-kombat',
        answers: ['Art of Fighting', 'Fatal Fury', 'King of Fighters', 'Mortal Kombat'],
        correctAnswer: 'Mortal Kombat'
    },
}, {
    question: {
        text: 'Which game has a character that says "@!#?@!" every time he is hit by something?',
        gif: "https://media.giphy.com/media/IXKBoWlYXsbSM/giphy.gif",
        game: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/1980?fields=name%2Crelease_dates.date%2Crating%2Csummary&limit=10&offset=0&order=release_dates.date%3asce&search=q*bert',
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
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
        });
    } else if (answeredQuestions === 5) {
        gif = availableQuestions[4].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[4].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[4].question.game,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
        });
    } else if (answeredQuestions === 4) {
        gif = availableQuestions[3].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[3].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[3].question.game,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
        });
    } else if (answeredQuestions === 3) {
        gif = availableQuestions[2].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[2].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[2].question.game,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
        });
    } else if (answeredQuestions === 2) {
        gif = availableQuestions[1].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[1].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[1].question.game,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
        });
    } else if (answeredQuestions === 1) {
        gif = availableQuestions[0].question.gif;
        $('.correct-answer').html(`The answer is: ${availableQuestions[0].question.correctAnswer}`);
        $('.gif').attr('src', gif);
        $.ajax({
            url: availableQuestions[0].question.game,
            method: 'GET',
            beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', '7fk8Bw6PnJmsh0TjOdbPX40q0ABKp1PfPZKjsnLQXNUocj9RjW');}
        }).done(function(response) {
            $('.game-info').html("<p>" + response[0].name + "</p><p>Release Date: " + moment(response[0].release_dates[0].date).format('l') + "</p><p>" + response[0].summary + "</p>");
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

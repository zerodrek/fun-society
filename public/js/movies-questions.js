// Constructor for questions -----------------------------------------------
function Quiz(questions) {
    this.questions = questions;
    return this;
}
// Create the questions for the game ---------------------------------------
let questions = [{
    question: {
        text: 'Which of the following is a Stephen King movie about an inmate who escapes prison?',
        gif: "https://media.giphy.com/media/AWJy0ZcCJmILe/giphy.gif",
        movie: "http://www.omdbapi.com/?t=Shawshank-redemption&y=&plot=short&r=json",
        answers: ['Prison Break', 'Shawshank Redemption', 'Escape Plan', 'The Longest Yard'],
        correctAnswer: 'Shawshank Redemption'
    },
}, {
    question: {
        text: 'Which of these characters are NOT part of Dorothy\'s group in The Wizard of Oz?',
        gif: "https://media.giphy.com/media/SKhNHgpJzthII/giphy.gif",
        movie: "http://www.omdbapi.com/?t=wizard-of-oz&y=&plot=short&r=json",
        answers: ['Scarecrow', 'Tin Woodman', 'Wicked Witch of the West', 'Cowardly Lion'],
        correctAnswer: 'Wicked Witch of the West'
    },
}, {
    question: {
        text: 'What is the famous saying of E.T?',
        gif: "https://media.giphy.com/media/lNGDT0uHuvS0w/giphy.gif",
        movie: "http://www.omdbapi.com/?t=e.t.&y=&plot=short&r=json",
        answers: ['E.T. come home', 'E.T. go home', 'E.T. no home', 'E.T. phone home'],
        correctAnswer: 'E.T. phone home'
    },
}, {
    question: {
        text: 'Who is Luke\'s father in Star Wars?',
        gif: "https://media.giphy.com/media/fInzUrMIM5Pm8/giphy.gif",
        movie: "http://www.omdbapi.com/?t=star-wars&y=&plot=short&r=json",
        answers: ['Darth Vader', 'Han Solo', 'Darth Sidious', 'Obi Wan'],
        correctAnswer: 'Darth Vader'
    },
}, {
    question: {
        text: 'Which car do they use in Back to the Future?',
        gif: "https://media.giphy.com/media/B7nzZml6q1Oh2/giphy.gif",
        movie: "http://www.omdbapi.com/?t=back-to-the-future&y=&plot=short&r=json",
        answers: ['Thunderbird', 'Corvette', 'Mustang', 'DeLorean'],
        correctAnswer: 'DeLorean'
    },
}, {
    question: {
        text: 'What character does Harrison Ford play in Raiders of the Lost Ark?',
        gif: "https://media.giphy.com/media/8BmxE7qErN5nO/giphy.gif",
        movie: "http://www.omdbapi.com/?t=raiders-of-the-lost-ark&y=&plot=short&r=json",
        answers: ['Han Solo', 'Indiana Jones', 'Jack Ryan', 'Rick Deckard'],
        correctAnswer: 'Indian Jones'
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

function setScore(userId, mvScore) {
    userRef.on("value", function(snapshot) {
        firebase.database().ref('users/' + userId).update({
            mvScore: score
        });
    });
}
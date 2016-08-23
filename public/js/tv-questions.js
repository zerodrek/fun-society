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
        tv: "http://api.tvmaze.com/singlesearch/shows?q=breaking-bad"
        answers: ['Sells weed', 'Steals identities', 'Robs banks', 'Produces meth'],
        correctAnswer: 'Produces meth'
    },
    {
    question: {
        text: 'What is the symbol for the house of Stark in The Game of Thrones?',
        gif: "https://media.giphy.com/media/2WiDOZSA8DSGQ/giphy.gif",
        tv: "http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones"
        answers: ['Direwolf', 'Eagle', 'Dragon', 'Tiger'],
        correctAnswer: 'Direwolf'
    },
    {
        question: {
            text: 'What does Elliot suffer from in Mr. Robot?',
            gif: "https://media.giphy.com/media/112cWFLjFTeLxC/giphy.gif",
            tv: "http://api.tvmaze.com/singlesearch/shows?q=mr-robot"
            answers: ['Cancer', 'Insomnia', 'Starvation', 'Social anxiety disorder and depression'],
            correctAnswer: 'Social anxiety disorder and depression'
    },
    {
        question: {
            text: 'Who does Dustin, Mike, and Lucas go searching for in the TV series, Stranger Things?',
            gif: "https://media.giphy.com/media/l0MYMRR8vPtN7D5W8/giphy.gif",
            tv: "http://api.tvmaze.com/singlesearch/shows?q=stranger-things"
            answers: ['Jim Hopper', 'Karen Wheeler', 'Will Byers', 'Eleven("El")'],
            correctAnswer: 'Will Byers'
    },
    {
        question: {
            text: 'In The Office, what city is the branch Dunder Mifflin based out of?',
            gif: "https://media.giphy.com/media/yoJC2i270b1mQvcDdK/giphy.gif",
            tv: "http://api.tvmaze.com/singlesearch/shows?q=office"
            answers: ['Houston, Texas', 'Scranton, Pennsylvania', 'New Orleans, Louisiana', 'St. Joseph, Michigan'],
            correctAnswer: 'Scranton, Pennsylvania'
    },
    {
        question: {
            text: 'What is Mike constantly afraid of people finding out in Suits?',
            gif: "https://media.giphy.com/media/iP6NVaJtCJjl6/giphy.gif",
            tv: "http://api.tvmaze.com/singlesearch/shows?q=suits"
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

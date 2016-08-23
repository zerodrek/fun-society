$(document).ready(function() {
<<<<<<< HEAD:public/js/quiz.js

    // FUNCTIONS
=======
    // VARIABLES
>>>>>>> master:public/js/quiz.js
    // -----------------------------------------------------------------------
    /**
     * Set up refs for Database endpoints.
     */
    var db = firebase.database();
    var userRef = db.ref('users/');

<<<<<<< HEAD:public/js/quiz.js
    // Countdown timers for questions and answer display ----------------
=======
    // FUNCTIONS
    // -----------------------------------------------------------------------
    /**
     * Countdown timers for questions and answer display.
     */
>>>>>>> master:public/js/quiz.js
    function questionTimer() {
        counter = setInterval(decrement, 1000);
    }

    function answerTimer() {
        counter = setInterval(decrement, 1000);
    }

    function decrement() {
        if (questionTime === 0) {
            onQuestion = false;
            $('.choice').remove();
            answeredQuestions++;
            numUnanswered++;
            $('.decision').html("You took to long to answer. :/");
            stopTimer();
            resetQuestionTimer();
            answerTimer();
            displayAnswer();
        } else if (answerTime === 0) {
            stopTimer();
            nextQuestion();
        }
        if (onQuestion === true) {
            questionTime--;
            $('.countdown').html(`Time Remaining: ${questionTime} seconds`);
        } else {
            answerTime--;
        }
    }

    function resetQuestionTimer() {
        questionTime = 30;
    }

    function resetAnswerTimer() {
        answerTime = 1;
    }

    function stopTimer() {
        clearInterval(counter);
    }
    // Fisher-Yates shuffle
    function shuffle(array) {
        let m = array.length,
            t, i;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
<<<<<<< HEAD:public/js/quiz.js
// Conect to API 
// function giphyApi(answerText){

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + answerText + "&api_key=dc6zaTOxFJmzC&limit=10";
 
//     $.ajax({
//             url: queryURL, method: 'GET'
//         })      
//         .done(function(response){
//         var responseResults = response.data;
//         var backgroundBt = responseResults.images.fixed_height_small.url;
            
//            })
//          return backgroundBt;
// //----------end API
// }
    // Switch to next available question --------------------------------
=======
    /**
     * Switch to next available question based on number of questions answered.
     */
>>>>>>> master:public/js/quiz.js
    function nextQuestion() {
        onQuestion = true;
        questionTimer();
        resetAnswerTimer();
        $('.countdown').html('Time Remaining: 30 seconds');
        $('.answer').hide();
        $('.game-display').show();
<<<<<<< HEAD:public/js/quiz.js


=======
>>>>>>> master:public/js/quiz.js
        if (answeredQuestions === 6) {
            displayResults();
        } else if (answeredQuestions === 5) {
            $('.question-text').html(availableQuestions[5].question.text);
            answer = availableQuestions[5].question.correctAnswer;
            for (let i = 0; i < availableQuestions[5].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[5].question.answers[i]);
                $('.answers').append(j);
            }
        } else if (answeredQuestions === 4) {
            $('.question-text').html(availableQuestions[4].question.text);
            answer = availableQuestions[4].question.correctAnswer;
            for (let i = 0; i < availableQuestions[4].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[4].question.answers[i]);
                $('.answers').append(j);
            }
        } else if (answeredQuestions === 3) {
            $('.question-text').html(availableQuestions[3].question.text);
            answer = availableQuestions[3].question.correctAnswer;
            for (let i = 0; i < availableQuestions[3].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[3].question.answers[i]);
                $('.answers').append(j);
            }
        } else if (answeredQuestions === 2) {
            $('.question-text').html(availableQuestions[2].question.text);
            answer = availableQuestions[2].question.correctAnswer;
            for (let i = 0; i < availableQuestions[2].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[2].question.answers[i]);
                $('.answers').append(j);
            }
        } else if (answeredQuestions === 1) {
            $('.question-text').html(availableQuestions[1].question.text);
            answer = availableQuestions[1].question.correctAnswer;
            for (let i = 0; i < availableQuestions[1].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[1].question.answers[i]);
                $('.answers').append(j);
<<<<<<< HEAD:public/js/quiz.js
            }   console.log("answer",answer);
=======
            }
>>>>>>> master:public/js/quiz.js
        } else {
            $('.question-text').html(availableQuestions[0].question.text);
            answer = availableQuestions[0].question.correctAnswer;

            console.log("answer",answer);
            
            for (let i = 0; i < availableQuestions[0].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
<<<<<<< HEAD:public/js/quiz.js
                // j.attr('background-image',url('http://imageshack.us/a/img856/3817/ticklf.png'));

                j.text(availableQuestions[0].question.answers[i]);
                $('.answers').append(j);

               
            }
        }
    }


    // Display correct answer -------------------------------------------
    function displayAnswer() {
        $('.game-display').hide();
        $('.answer').show();

=======
                j.text(availableQuestions[0].question.answers[i]);
                $('.answers').append(j);
            }
        }
    }
    /**
     * Display correct answer.
     */
    function displayAnswer() {
        $('.game-display').hide();
        $('.answer').show();
>>>>>>> master:public/js/quiz.js
        if (answeredQuestions === 6) {
            url = availableQuestions[5].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[5].question.correctAnswer}`);
            $('.gif').attr('src', url);
<<<<<<< HEAD:public/js/quiz.js

=======
>>>>>>> master:public/js/quiz.js
        } else if (answeredQuestions === 5) {
            url = availableQuestions[4].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[4].question.correctAnswer}`);
            $('.gif').attr('src', url);
        } else if (answeredQuestions === 4) {
            url = availableQuestions[3].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[3].question.correctAnswer}`);
            $('.gif').attr('src', url);
        } else if (answeredQuestions === 3) {
            url = availableQuestions[2].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[2].question.correctAnswer}`);
            $('.gif').attr('src', url);
        } else if (answeredQuestions === 2) {
            url = availableQuestions[1].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[1].question.correctAnswer}`);
            $('.gif').attr('src', url);
        } else if (answeredQuestions === 1) {
            url = availableQuestions[0].question.gif;
            $('.correct-answer').html(`The answer is: ${availableQuestions[0].question.correctAnswer}`);
            $('.gif').attr('src', url);
        }
        
    }

    // Calculate Game Points and push to firebase
    function calcPoints() {
        // Multiply numRight to equal score
        points = numRight * 100;
        // Variable for firebase obj
        var score = {
            points: points,
        };
        // Push score to firebase
        db.ref().push(score);
        // Log
        console.log('Points: ' + points);
    }
    /**
     * Display results.
     */
    function displayResults() {
        stopTimer();
<<<<<<< HEAD:public/js/quiz.js
        calcPoints();
=======
        setScore(user.uid, user.displayName, gmScore);
>>>>>>> master:public/js/quiz.js
        $('.game-display').hide();
        $('.answer').hide();
        $('.results').show();
        $('.outro').html("All done, here's how you did!");
        $('.end-results').html(`Correct Answers: ${numRight}<br />Incorrect Answers: ${numWrong}<br />Unanswered: ${numUnanswered}`);
    }

    // PROCESSES
    // -----------------------------------------------------------------------
<<<<<<< HEAD:public/js/quiz.js

    // When Quiz button is clicked display the game and start the timer -------
=======
    /**
     * When Quiz button is clicked display the game and start the timer.
     */
>>>>>>> master:public/js/quiz.js
    function startQuiz() {
        questionTime = 30;
        answerTime = 1;
        counter = '';
        onQuestion = false;
        numRight = 0;
        numWrong = 0;
        numUnanswered = 0;
        answeredQuestions = 0;
        points = '';

        // Shuffle questions.
        availableQuestions = shuffle(questions);
        // Shuffle question's answers.
        for (let i = 0; i < availableQuestions.length; i++) {
            shuffle(availableQuestions[i].question.answers);
        }

        $('.choice').remove();
        $('.answer').hide();
        $('.results').hide();
        $('.game-display').show();
        nextQuestion();
    }
<<<<<<< HEAD:public/js/quiz.js

    // Check if selected answer is wrong/right --------------------------
=======
    /**
     * Check if selected answer is wrong/right.
     */
>>>>>>> master:public/js/quiz.js
    $(document).on('click', '.choice', function() {
        onQuestion = false;
        $('.choice').remove();
        answeredQuestions++;
        if (this.innerHTML === answer) {
            numRight++;
            $('.decision').html("That's right!");
        } else {
            numWrong++;
            $('.decision').html("Sorry, that's incorrect. :(");
        }
        stopTimer();
        resetQuestionTimer();
        answerTimer();
        displayAnswer();
    });

<<<<<<< HEAD:public/js/quiz.js
    $(document).on("click", ".start-game", function() {
        startQuiz();
    });

    // INITIALIZE
    // -----------------------------------------------------------------------
=======
    // INITIALIZE QUIZ
    // -----------------------------------------------------------------------
    $(document).on("click", ".start-game", function() {
        startQuiz();
    });
>>>>>>> master:public/js/quiz.js
    startQuiz();
});

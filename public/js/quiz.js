$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------
    /**
     * Countdown timers for questions and answer display.
     */
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
        var m = array.length,
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
    /**
     * Switch to next available question based on number of questions answered.
     */
    function nextQuestion() {
        console.log(index);
        onQuestion = true;
        questionTimer();
        resetAnswerTimer();
        $('.countdown').html('Time Remaining: 30 seconds');
        $('.answer').addClass('hide');
        $('.game-display').removeClass('hide');
        if (answeredQuestions === 6) {
            displayResults();
        } else {
            $('.question-text').html(availableQuestions[index].question.text);
            answer = availableQuestions[index].question.correctAnswer;
            for (var i = 0; i < availableQuestions[index].question.answers.length; i++) {
                j = $('<button>');
                j.addClass('btn btn-md btn-default btn-block choice');
                j.text(availableQuestions[index].question.answers[i]);
                $('.answers').append(j);
            }
            index++;
        }
    }
    /**
     * Display results.
     */
    function displayResults() {
        stopTimer();
        score = numRight * 100;
        if (signedIn) {
            setScore(currentUser.uid, score);
        } else {
            $('.re-start').prepend('<h4>Log in if you would like to save your scores</h4>');
        }
        $('.game-display').hide();
        $('.answer').addClass('hide');
        $('.results').removeClass('hide');
        $('.outro').html("All done, here's how you did!");
        $('.end-results').html(`Correct Answers: ${numRight}<br />Incorrect Answers: ${numWrong}<br />Unanswered: ${numUnanswered}<br /><br /> <strong>Your Score</strong>: <strong>${score}</strong>`);
    }

    // PROCESSES
    // -----------------------------------------------------------------------
    /**
     * When Quiz button is clicked display the game and start the timer.
     */
    function startQuiz() {
        questionTime = 30;
        answerTime = 1;
        counter = '';
        onQuestion = false;
        numRight = 0;
        numWrong = 0;
        numUnanswered = 0;
        answeredQuestions = 0;
        score = '';

        // Shuffle questions.
        index = 0;
        availableQuestions = shuffle(questions);
        // Shuffle question's answers.
        for (let i = 0; i < availableQuestions.length; i++) {
            shuffle(availableQuestions[i].question.answers);
        }
        console.log(availableQuestions);
        $('.choice').remove();
        $('.answer').addClass('hide');
        $('.results').addClass('hide');
        // $('.results').addClass('hide');
        $('.game-display').removeClass('hide');
        nextQuestion();
    }
    /**
     * Check if selected answer is wrong/right.
     */
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

    // INITIALIZE QUIZ
    // -----------------------------------------------------------------------
    $(document).on("click", ".start-game", function() {
        startQuiz();
    });
    startQuiz();
});

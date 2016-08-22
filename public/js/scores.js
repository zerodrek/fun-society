$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------

    // Sort Scores
    function sortScores() {
        globalGmScoresArray = [];
        globalTvScoresArray = [];
        globalScoresRef = firebase.database().ref('users/');
        globalScoresRef.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                usr = childSnapshot.val();
                for (var key in usr) {
                    // skip loop if the property is from prototype
                    if (!usr.hasOwnProperty(key)) continue;
                    var scores = usr[key];
                    for (var prop in scores) {
                        // skip loop if the property is from prototype
                        if (!scores.hasOwnProperty(prop)) continue;
                        if (prop === "gmScore") {
                            globalGmScoresArray.push(scores[prop]);
                        } else if (prop === "tvScore") {
                            globalTvScoresArray.push(scores[prop]);
                        }
                    }
                }
            });
            sortedScores = function(arr) {
                arr.sort(function(a, b) {
                    return b - a;
                });
            };
            sortedScores(globalGmScoresArray);
            sortedScores(globalTvScoresArray);
            console.log("Global Games Quiz Scores: " + globalGmScoresArray);
            console.log("Global Televsion Quiz Scores: " + globalTvScoresArray);

            // Add each score into the associated table)
            $(document).on("click", ".game-scores", function() {
                console.log('Game Scores!!');
                $('.scores').html('Games High Scores');
                $(".highScores > tbody").html("<tr><th>1</th><td>Name 01</td><td>" + globalGmScoresArray[0] + "<tr><th>2</th><td>Name 02</td><td>" + globalGmScoresArray[1] + "<tr><th>3</th><td>Name 03</td><td>" + globalGmScoresArray[2] + "</td>");
            });

        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }

    sortScores();
});

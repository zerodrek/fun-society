$(document).ready(function() {

    // FUNCTIONS
    // ------------------------------------------------------------------

    // Sort Scores
    function sortScores() {
        var globalGmScoresArray = [];
        var globalTvScoresArray = [];
        var globalScoresRef = firebase.database().ref('users/');
        globalScoresRef.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var usr = childSnapshot.val();
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

            /**
             * Add each score into the associated table).
             */
            //Televsion
            $(".tel-scores > tbody").html("<tr><th>1</th><td>Name 01</td><td>" + globalTvScoresArray[0] + "<tr><th>2</th><td>Name 02</td><td>" + globalTvScoresArray[1] + "<tr><th>3</th><td>Name 03</td><td>" + globalTvScoresArray[2] + "</td>");
            // Movies
            // Games
            $(".gam-scores > tbody").html("<tr><th>1</th><td>Name 01</td><td>" + globalGmScoresArray[0] + "<tr><th>2</th><td>Name 02</td><td>" + globalGmScoresArray[1] + "<tr><th>3</th><td>Name 03</td><td>" + globalGmScoresArray[2] + "</td>");
            // Music

        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }

    sortScores();

});

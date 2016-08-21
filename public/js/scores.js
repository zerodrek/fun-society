$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------

    // Sort points
    function sortGmScores() {
        globalScoresRef = firebase.database().ref('users/')
        globalScoresRef.on("value", function(snapshot) {
            globalScoresArray = [];
            var dbObj = snapshot.val();
            var objKeys = Object.keys(dbObj);
            for (var i = 0; i < objKeys.length; i++) {
                globalScores = dbObj[objKeys[i]].gmScore;
                globalScoresUsr = dbObj[objKeys[i]].gmScore;
                globalScoresArray.push(globalScores);
            }
            sortedScores = globalScoresArray.sort(function(a, b) {
                return b - a;
            });
            console.log(sortedScores);
            // Add each score into the associated table
            $('.scores').html('Games High Scores');
            $(".highScores > tbody").append("<tr><th>1</th><td>Name 01</td><td>" + sortedScores[0] + "<tr><th>2</th><td>Name 02</td><td>" + sortedScores[1] + "<tr><th>3</th><td>Name 03</td><td>" + sortedScores[2] + "</td>");
        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }

    sortGmScores();
});

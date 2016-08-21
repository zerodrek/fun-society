$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------

    // Sort points
    function sortGmScores() {
        globalGmScoresArray = [];
        globalScoresRef = firebase.database().ref('users/');
        globalScoresRef.on("value", function(snapshot) {
            var dbObj = snapshot.val();
            // var objKeys = Object.keys(dbObj);
            for (var name in dbObj) {
                // skip loop if the property is from prototype
                if (!dbObj.hasOwnProperty(name)) continue;
                var obj = dbObj[name];
                for (var key in obj) {
                    // skip loop if the property is from prototype
                    if (!obj.hasOwnProperty(key)) continue;
                    var scores = obj[key];
                    console.log(scores);
                    for (var prop in scores) {
                        // skip loop if the property is from prototype
                        if (!scores.hasOwnProperty(prop)) continue;
                        globalGmScoresArray.push(scores[prop]);
                    }
                }
            }
            sortedGmScores = globalGmScoresArray.sort(function(a, b) {
                return b - a;
            });
            console.log(sortedGmScores);
            // Add each score into the associated table
            $('.scores').html('Games High Scores');
            $(".highScores > tbody").append("<tr><th>1</th><td>Name 01</td><td>" + sortedGmScores[0] + "<tr><th>2</th><td>Name 02</td><td>" + sortedGmScores[1] + "<tr><th>3</th><td>Name 03</td><td>" + sortedGmScores[2] + "</td>");
        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }

    sortGmScores();
});

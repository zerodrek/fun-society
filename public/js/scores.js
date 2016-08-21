$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------

    // Sort Scores
    function sortScores() {
        globalGmScoresArray = [];
        globalTvScoresArray = [];
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
                    // var gmScores = scores.find("gmScore");
                    for (var prop in scores) {
                        // skip loop if the property is from prototype
                        if (!scores.hasOwnProperty(prop)) continue;
                        if (prop === "gmScore") {
                            globalGmScoresArray.push(scores[prop]);
                        } else if (prop === "tvScore") {
                            globalTvScoresArray.push(scores[prop]);
                        }
                        // var gmScores = scores.find("gmScore");
                        // console.log(gmScores);
                    }
                }
            }
            sortedScores = function(arr) {
                arr.sort(function(a, b) {
                    return b - a;
                });
            };
            sortedScores(globalGmScoresArray);
            sortedScores(globalTvScoresArray);
            console.log("Global Games Quiz Scores: " + globalGmScoresArray);
            console.log("Global Televsion Quiz Scores: " + globalTvScoresArray);
            // Add each score into the associated table
            $('.scores').html('Games High Scores');
            $(".highScores > tbody").append("<tr><th>1</th><td>Name 01</td><td>" + globalGmScoresArray[0] + "<tr><th>2</th><td>Name 02</td><td>" + globalGmScoresArray[1] + "<tr><th>3</th><td>Name 03</td><td>" + globalGmScoresArray[2] + "</td>");
        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }

    sortScores();
});

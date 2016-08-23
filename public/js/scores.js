$(document).ready(function() {

    var globalScoresRef = firebase.database().ref('users/');
    var userScoresArray = [];
    var globalTvScoresArray = [];
    var globalMvScoresArray = [];
    var globalGmScoresArray = [];
    var globalMuScoresArray = [];

    var tvRank = 1;
    var mvRank = 1;
    var gmRank = 1;
    var muRank = 1;

    /**
     * Sort Scores.
     */
    function sortScores() {
        globalScoresRef.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var usr = childSnapshot.val();
                // Current User Scores Array Push
                if (currentUser.displayName === usr.name) {
                    userScoresArray.push({
                        usrTvScore: usr.tvScore,
                        usrMvScore: usr.mvScore,
                        usrGmScore: usr.gmScore,
                        usrMuScore: usr.muScore
                    });
                }
                // Global User High Scores Array Push
                for (var key in usr) {
                    // skip loop if the property is from prototype
                    if (!usr.hasOwnProperty(key)) continue;
                    if (key === "tvScore") {
                        globalTvScoresArray.push({
                            name: usr.name,
                            score: usr[key]
                        });
                    } else if (key === "mvScore") {
                        globalMvScoresArray.push({
                            name: usr.name,
                            score: usr[key]
                        });
                    } else if (key === "gmScore") {
                        globalGmScoresArray.push({
                            name: usr.name,
                            score: usr[key]
                        });
                    } else if (key === "muScore") {
                        globalMuScoresArray.push({
                            name: usr.name,
                            score: usr[key]
                        });
                    }
                }
            });
            sortedScores = function(arr) {
                arr.sort(function(a, b) {
                    return b.score - a.score;
                });
            };
            sortedScores(globalTvScoresArray);
            sortedScores(globalMvScoresArray);
            sortedScores(globalGmScoresArray);
            sortedScores(globalMuScoresArray);
            /**
             * Add each score into the associated table.
             */
            // Current User Scores
                $(".user-scores > tbody").append("<td>" + userScoresArray[0].usrTvScore + "</td><td>" + userScoresArray[0].usrMvScore + "</td><td>" + userScoresArray[0].usrGmScore + "</td><td>" + userScoresArray[0].usrMuScore + "</td>");
            //Televsion
            for (var t = 0; t < globalTvScoresArray.length; t++) {
                $(".tv-scores > tbody").append("<tr><th>" + tvRank + "</th><td>" + globalTvScoresArray[t].name + "</td><td>" + globalTvScoresArray[t].score + "</td>");
                tvRank++;
            }
            // Movies
            for (var v = 0; v < globalTvScoresArray.length; v++) {
                $(".mv-scores > tbody").append("<tr><th>" + mvRank + "</th><td>" + globalMvScoresArray[v].name + "</td><td>" + globalMvScoresArray[v].score + "</td>");
                tvRank++;
            }
            // Games
            for (var g = 0; g < globalGmScoresArray.length; g++) {
                $(".gm-scores > tbody").append("<tr><th>" + gmRank + "</th><td>" + globalGmScoresArray[g].name + "</td><td>" + globalGmScoresArray[g].score + "</td>");
                gmRank++;
            }
            // Music
            for (var m = 0; m < globalMuScoresArray.length; m++) {
                $(".mu-scores > tbody").append("<tr><th>" + muRank + "</th><td>" + globalMuScoresArray[m].name + "</td><td>" + globalMuScoresArray[m].score + "</td>");
                muRank++;
            }
            $('.modal-body').append('<h6 class="text-center"><br />(Scores Reset on Monday @ <a href="http://www.timeanddate.com/worldclock/timezone/utc" target="_blank">12am UTC</a>)</h6>');
        }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    sortScores();
});

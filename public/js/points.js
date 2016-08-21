$(document).ready(function() {
    // FUNCTIONS
    // -----------------------------------------------------------------------

    // Sort points
    function sortPoints() {
        db.ref().on("value", function(snapshot) {
            globalPointsArray = [];
            var dbObj = snapshot.val();
            var objKeys = Object.keys(dbObj);
            for (let i = 0; i < objKeys.length; i++) {
                globalPoints = dbObj[objKeys[i]].points;
                globalPointsArray.push(globalPoints);
            }
            sortedPoints = globalPointsArray.sort(function(a, b) {
                return b - a;
            });
            console.log(sortedPoints);
        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);

        });
    }
});

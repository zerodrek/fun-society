// Firebase Authentication ----------------------------------------------
var provider = new firebase.auth.GoogleAuthProvider();
// Sign in redirect
$(".sign-in").on("click", function() {
    firebase.auth().signInWithRedirect(provider);
});
// Get redirect result ---------------------------------------------------
firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});
// Get current user -------------------------------------------------
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $('.sign-in').hide();
        $('.signed-in').show();
        $('.user').html(user.displayName);
    } else {
        // No user is signed in.
        $('.signed-in').hide();
        $('.sign-in').show();
    }
});
// Sign out ---------------------------------------------------------
$('#sign-out').on('click', function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }, function(error) {
        // An error happened.
    });
});

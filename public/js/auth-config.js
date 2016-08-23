// FIREBASE AUTHENTICATION
// -----------------------------------------------------------------------
var signedIn = false;
var user;
var userId;
var username = null;

$usrSignIn = ('<a class="btn btn-default navbar-btn sign-in">Sign in with Google</a>');
$usrSignOut = ('<li class="dropdown"><a href="#" class="dropdown-toggle signed-in" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="user"></span><span class="caret"></span></a><ul class="dropdown-menu"><li class="usr-scores"><a href="#">View Your Scores</a></li><li class="sign-out"><a href="#">Sign out</a></li></ul></li>');

/**
 * User sign in.
 */
function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    // Sign in redirect
    firebase.auth().signInWithRedirect(provider);
    // Get redirect result
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
}
/**
 * User sign out.
 */
function signOut() {
    firebase.auth().signOut().then(function() {
        location.reload();
        // Sign-out successful.
    }, function(error) {
        // An error happened.
    });
}
/**
 * Update user info in database.
 */
function updateUsername(UserId, name) {
    firebase.database().ref('users/' + userId).update({
        name: name
    });
}
/**
 * User state.
 */
var initAuth = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            currentUser = firebase.auth().currentUser;
            userId = user.uid;
            $('.sign-in').remove();
            $('.site-nav').append($usrSignOut);
            $('.user').html(user.displayName);
            updateUsername(user.uid, user.displayName);
        } else {
            // No user is signed in.
            $('.signed-in').remove();
            $('.site-nav').append($usrSignIn);
        }
    }, function(error) {
        console.log(error);
    });
    /**
     * Auth buttons.
     */
    $(document).on("click", ".sign-in", signIn);
    $(document).on("click", ".sign-out", signOut);
};

window.onload = function() {
    initAuth();
};

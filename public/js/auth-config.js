// FIREBASE AUTHENTICATION
// -----------------------------------------------------------------------
var signedIn = false;
var user;
var userId;
var username = null;

$usrSignIn = ('<a class="btn btn-default navbar-btn sign-in">Sign in with Google</a>');
$usrSignOut = ('<li class="dropdown"><a href="#" class="dropdown-toggle signed-in" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="user"></span><span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#" data-toggle="modal" data-target=".yourScoresModal">View Your Scores</a></li><li class="sign-out"><a href="#">Sign out</a></li></ul></li>');

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
 * The ID of the currently signed-in User. Keep track of this to detect Auth state change events that are just programmatic token refresh but not a User status change.
 */
var currentUID;
/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {
    // Ignore token refresh events.
    if (user && currentUID === user.uid || !user && currentUID === null) {
        return;
    }
    currentUID = user ? user.uid : null;
    if (user) {
        // User is signed in.
        currentUser = firebase.auth().currentUser;
        userId = user.uid;
        signedIn = true;
        $('.sign-in').remove();
        $('.site-nav').append($usrSignOut);
        $('.user').html(user.displayName);
        updateUsername(user.uid, user.displayName);
    } else {
        // No user is signed in.
        signedIn = false;
        $('.signed-in').remove();
        $('.site-nav').append($usrSignIn);
    }
    /**
     * Auth buttons.
     */
    $(document).on("click", ".sign-in", signIn);
    $(document).on("click", ".sign-out", signOut);
}

// Listen for auth state changes
firebase.auth().onAuthStateChanged(onAuthStateChanged);

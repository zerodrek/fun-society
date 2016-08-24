// Initialize Firebase
var config = {
    apiKey: "AIzaSyAumrxjoe5hs1KPyl_dPdzL4Dl9n8ctRao",
    authDomain: "fun-society.firebaseapp.com",
    databaseURL: "https://fun-society.firebaseio.com",
    storageBucket: "fun-society.appspot.com",
};
firebase.initializeApp(config);

db = firebase.database();
userRef = firebase.database().ref('users/');

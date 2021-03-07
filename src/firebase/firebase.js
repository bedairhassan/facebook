var firebaseConfig = {
    apiKey: "AIzaSyB9WGsbghOWP-rBYqyNa5FoeHmowIjk-bo",
    authDomain: "test-server-875a8.firebaseapp.com",
    databaseURL: "https://test-server-875a8-default-rtdb.firebaseio.com",
    projectId: "test-server-875a8",
    storageBucket: "test-server-875a8.appspot.com",
    messagingSenderId: "343973160482",
    appId: "1:343973160482:web:c0e7d0527712cce3bacc7b",
    measurementId: "G-DG276927NL"
};

var firebase = require('firebase');
var app = firebase.initializeApp(firebaseConfig);
let database = app.database()

export default database

// database.ref('data/').set({name:`ali`}){
    
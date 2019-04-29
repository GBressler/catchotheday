import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCeZqYlDEQsO1_XCjMNOplm8vBMlhtxYE0",
    authDomain: "gb-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://gb-catch-of-the-day.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//this is a default export
export default base;
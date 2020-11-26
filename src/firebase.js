import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD-MwqatainXp7B9wO1RHRx8xY7YVreRbc",
    authDomain: "news-e7493.firebaseapp.com",
    databaseURL: "https://news-e7493.firebaseio.com",
    projectId: "news-e7493",
    storageBucket: "news-e7493.appspot.com",
    messagingSenderId: "678039003898",
    appId: "1:678039003898:web:ae554e0e01433ba4b21f43",
    measurementId: "G-G6VHLNYVFH"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
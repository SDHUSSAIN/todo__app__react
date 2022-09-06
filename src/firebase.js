import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDGbj8VGjwlV3VKSC8uLtqSDzNK4VKPPjg",
    authDomain: "todolist-19ac1.firebaseapp.com",
    projectId: "todolist-19ac1",
    storageBucket: "todolist-19ac1.appspot.com",
    messagingSenderId: "519325316199",
    appId: "1:519325316199:web:0e6051c04708533503d0c2",

});


export { firebaseConfig as firebase};


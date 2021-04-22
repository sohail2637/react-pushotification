importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeYtktzWT4G_o1WYEdqYbOjSpdREZb6_Q",
  authDomain: "push-notification-6003b.firebaseapp.com",
  projectId: "push-notification-6003b",
  storageBucket: "push-notification-6003b.appspot.com",
  messagingSenderId: "793260406177",
  appId: "1:793260406177:web:6b722711e1b502169c07e0",
  measurementId: "G-WZW6TTMB04",
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


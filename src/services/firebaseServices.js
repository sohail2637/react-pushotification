import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

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
const messaging = firebase.messaging()


export const initNotifacation = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        // .getToken({ vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("token => > ", currentToken);
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    }
  });
};

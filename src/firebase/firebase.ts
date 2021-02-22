import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC41wAfA9S1yMBWoFxWrLsrzt5TBNm0y80",
  authDomain: "we-partner-up.firebaseapp.com",
  projectId: "we-partner-up",
  storageBucket: "we-partner-up.appspot.com",
  messagingSenderId: "739533129850",
  appId: "1:739533129850:web:f80b3cd16678a660f7d3c3",
}

export const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

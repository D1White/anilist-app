import firebase from 'firebase/app'
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAYfLmoV50fyS7H_qTW1U2ZlrEXgBS0neY",
  authDomain: "animelist-146a3.firebaseapp.com",
  databaseURL: "https://animelist-146a3.firebaseio.com",
  projectId: "animelist-146a3",
  storageBucket: "animelist-146a3.appspot.com",
  messagingSenderId: "803510370009",
  appId: "1:803510370009:web:4506bd2842e1b2dfc688c8"
};

firebase.initializeApp(config);

const db = firebase.firestore()
 
export { db };